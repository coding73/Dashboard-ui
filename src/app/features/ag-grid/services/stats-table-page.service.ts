import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, concat, Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap, toArray } from 'rxjs/operators';
import { AppNotification, PartialData, StoreType } from '@app/models';
import { AgGridOptions, PageListApiResponse, PageStatsApiResponse, PageStatsData, } from '@app/models';
import { AgGridMapperService } from './ag-grid-mapper.service';
import { UtilService } from './util.service';
import { KL_NOTIFICATION } from '@app/config';

@Injectable({
  providedIn: 'root',
})
export class StatsTablePageService {
  notification: AppNotification = inject(KL_NOTIFICATION);

  constructor(
    private httpClient: HttpClient,
    private util: UtilService,
    private agGridDataMapper: AgGridMapperService,
  ) { }

  /**
   * Fetches stats from the API.
   */
  fetchStats(url: string, storeType: StoreType, filters: PartialData = {}, payload: any = undefined): Observable<PageStatsData> {
    const params = {
      storeType,
      ...filters,
    };

    if (payload) {
      return this.httpClient
        .put<PageStatsApiResponse>(url, payload, { params })
        .pipe(
          // Handle api error
          map((res) => this.util.apiErrorHandler(res)),

          // Return response data
          map((res) => res.data)
        );
    } else {
      return this.httpClient.get<PageStatsApiResponse>(url, { params }).pipe(
        // Handle api error
        map((res) => this.util.apiErrorHandler(res)),

        // Return response data
        map((res) => res.data)
      );
    }
  }

  /**
   * Fetches page list from the API.
   */
  fetchList(url: string, storeType: StoreType, filters: PartialData = {}, dynamicComponents?: any, batchSize = 1000, fetchSequentially: boolean = true, payload: any = undefined): Observable<AgGridOptions> {
    // this.notification.showSpinner();
    if (payload) {
      return this.fetchWithPayload(url, storeType, 0, batchSize, filters, payload, dynamicComponents
      ).pipe(
        // Check if API has enabled offset and limit and there are more items to fetch
        // then group all API calls and fetch items.
        switchMap((res) =>
          this.hasItemsToGroup(res)
            ? this.groupAndFetch(res, url, storeType, batchSize, filters, fetchSequentially) : of(res)),
        finalize(() => this.notification.hideSpinner()));
    } else {
      // Fetch initial list
      return this.fetch(url, storeType, 0, batchSize, filters, dynamicComponents
      ).pipe(
        // Check if API has enabled offset and limit and there are more items to fetch
        // then group all API calls and fetch items.
        switchMap((res) =>
          this.hasItemsToGroup(res)
            ? this.groupAndFetch(res, url, storeType, batchSize, filters, fetchSequentially) : of(res)),
        finalize(() => this.notification.hideSpinner())
      );
    }
  }

  /**
   * Checks if API has enabled ag-grid offset and limit or not. Returns `true`
   * if ag-grid has enabled offset and limit.
   */
  private hasItemsToGroup(agGridResults: AgGridOptions): boolean {
    return agGridResults.count
      ? +agGridResults.count > agGridResults.results.length
      : false;
  }

  /**
   * Group multiple API calls and return final ag-grid results array
   */
  private groupAndFetch(
    res: AgGridOptions,
    url: string,
    storeType: StoreType,
    batchSize: number,
    filters: PartialData = {},
    fetchSequentially: boolean = true
  ) {
    const obs: Observable<AgGridOptions>[] = this.splitApiCalls(url, storeType, batchSize, +res.count, filters);

    // Observable to fetch records sequentially
    const sequentialFetchObs = concat(of(res), ...obs).pipe(toArray());

    // Observable to make API calls in parallel
    const parallelFetchObs = combineLatest(of(res), ...obs);

    // Resultant observable to call based on the fetchSequentially param
    const resultantObs = fetchSequentially
      ? sequentialFetchObs
      : parallelFetchObs;

    return resultantObs.pipe(map((res) => this.mergeList(res)));
  }

  /**
   * Merges multiple API call response into one
   */
  private mergeList(res: AgGridOptions[]): AgGridOptions {
    const mergedResponse = res[0];

    const mergedResults = res
      .map((r) => r.results) // Extract results from the AgGridOptions
      .reduce((acc, curr) => acc.concat(curr), []); // Concat all results to single array

    mergedResponse.results = mergedResults;

    return mergedResponse;
  }

  /**
   * Splits fetch list api calls into multiple api calls
   */
  private splitApiCalls(
    url: string,
    storeType: StoreType,
    batchSize: number,
    totalItems: number,
    filters: PartialData = {}
  ): Observable<AgGridOptions>[] {
    const obs: Observable<AgGridOptions>[] = [];

    for (let offset = batchSize; offset < +totalItems; offset += batchSize) {
      obs.push(this.fetch(url, storeType, offset, batchSize, filters));
    }

    return obs;
  }

  /**
   * Fetch list from the API
   */
  private fetch(
    url: string,
    storeType: StoreType,
    offset: number,
    limit: number,
    filters: PartialData = {},
    dynamicComponents?: any
  ): Observable<AgGridOptions> {
    const params = {
      storeType, ...filters, offset: offset.toString(), limit: limit.toString(),
    };

    return this.httpClient.get<PageListApiResponse>(url, { params }).pipe(
      // Handle api error
      map((res) => this.util.apiErrorHandler(res)),

      // Need to be deleted when cell renderer framework name issue has been fixed
      map(res => {
        res.data.columnDefs.map((def: any) => {
          if (def.cellRendererFrameworkName) {
            def.cellRenderer = def.cellRendererFrameworkName;
            delete def.cellRendererFrameworkName;
          };

          if (def.field === 'date') {
            def.valueParser = (params: any) => ({ name: params.newValue });
          };
          return def;
        });
        return res;
      }),

      // Return response data
      map((res: PageListApiResponse) => {
        const data = res.data;

        // Map column definitions
        data.columnDefs = this.agGridDataMapper.mapAgGridColumnDefs(
          data.columnDefs,
          dynamicComponents
        );

        return data;
      }),

      // Handle service errors
      catchError((err) => {
        // Show error message
        this.util.showMessage(err.message);

        const dummyRes: AgGridOptions = {
          columnDefs: [],
          results: [],
          count: 0,
        };

        return of(dummyRes);
      })
    );
  }

  /**
   * Fetch list from the API
   * Using PUT Service with payload
   */
  private fetchWithPayload(
    url: string,
    storeType: StoreType,
    offset: number,
    limit: number,
    filters: PartialData = {},
    payload: any = undefined,
    dynamicComponents: any
  ): Observable<AgGridOptions> {
    const params = {
      storeType, ...filters, offset: offset.toString(), limit: limit.toString(),
    };

    return this.httpClient
      .put<PageListApiResponse>(url, payload, { params })
      .pipe(
        // Handle api error
        map((res) => this.util.apiErrorHandler(res)),

        // Return response data
        map((res: PageListApiResponse) => {
          const data = res.data;

          // Map column definitions
          data.columnDefs = this.agGridDataMapper.mapAgGridColumnDefs(
            data.columnDefs,
            dynamicComponents
          );

          return data;
        }),

        // Handle service errors
        catchError((err) => {
          // Show error message
          this.util.showMessage(err.message);

          const dummyRes: AgGridOptions = {
            columnDefs: [],
            results: [],
            count: 0,
          };

          return of(dummyRes);
        })
      );
  }
}
