import { Injectable } from '@angular/core';
import { StoreType, PartialData, PageStatsData, AgGridOptions } from '@app/models';
import { Observable } from 'rxjs';

export interface IStatsTablePage {
  fetchPageStats(storeType: StoreType, params?: PartialData): Observable<PageStatsData>;
  fetchPageList(storeType: StoreType, params?: PartialData): Observable<AgGridOptions>;
}

@Injectable()
export class StatsTablePage implements IStatsTablePage {

  constructor() { }

  fetchPageStats(storeType: StoreType, params?: PartialData): Observable<PageStatsData> {
    throw new Error("Method not implemented.");
  }

  fetchPageList(storeType: StoreType, params?: PartialData): Observable<AgGridOptions> {
    throw new Error("Method not implemented.");
  }
}
