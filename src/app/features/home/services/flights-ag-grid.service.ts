import { inject, Injectable } from '@angular/core';
import { KL_ENV } from '@app/config';
import { AgGridOptions, AppEnvironmentConfig, PageStatsData, PartialData, StatsCardType, StoreType } from '@app/models';
import { Observable, of } from 'rxjs';
import { StatsTablePageService } from 'src/app/features/ag-grid';

@Injectable({
  providedIn: 'root'
})
export class FlightsAgGridService {
  env: AppEnvironmentConfig = inject(KL_ENV);
  statsPageService: StatsTablePageService = inject(StatsTablePageService);

  /**
  * `v2/apmc/accounts/masters/ledger`
  */
  private readonly API_LEDGER_LIST = `http://localhost:8080/api/v2/tms/dashboard/flights`;

  constructor() {}

  fetchPageStats(
    storeType: StoreType,
    params: PartialData = {}
  ): Observable<PageStatsData> {
    params = {
      ...params,
      mode: 'ag_grid',
      offset: 0,
      limit: 1000,
    };

    return of({
      results: [
        {
          clickAction: true,
          key: 'ALL',
          title: 'All',
          total: 1,
        },
      ],
      selectedIndex: 0,
      viewType: StatsCardType.CHIP
    });
  }

  /**
   * fetch the ag-grid data
   */
  fetchPageList(storeType: any, params: PartialData = {}): Observable<AgGridOptions> {
    params = {
      ...params,
      mode: 'ag_grid'
    };

    storeType = StoreType.BIZ_STORE;
    return this.statsPageService.fetchList(this.API_LEDGER_LIST, storeType, params);
  }
}
