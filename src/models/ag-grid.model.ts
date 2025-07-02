import { InjectionToken, Type } from "@angular/core";
import { ICellEditorParams } from 'ag-grid-community';
import { ApiResponseCommon } from "./rest-api.model";
import { PartialData } from "./core.model";
import { StoreType } from "./product-catalogue.model";
import { ICellRendererAngularComp } from "ag-grid-angular";

export interface AgGridOptions extends IAgGridAngular {
  results: any[];
  columnDefs: AgGridColumnDef[];
  count: number;
}

export interface IAgGridAngular {
  rowSelection?: 'multiple' | 'single' | '';
  floatingFilter?: boolean;
  rowHeight?: number;
  rowClassRules?: AgGridRowClassRules;

  [key: string]: any;
}

export interface AgGridColumnDef {
  headerName?: string;
  resizable?: boolean;
  field?: string;
  sortable?: boolean;
  filter?: boolean | string;
  filterParams?: any;
  width?: number;

  headerCheckboxSelection?: boolean;
  headerCheckboxSelectionFilteredOnly?: boolean;
  checkBoxSelection?: boolean;

  // formatter?: string; // Actual key used by ag-grid
  formatter?: string | InjectionToken<AgGridFormatter>; // Allow string or InjectionToken
  formatterValue?: string; // Formats value in the cell
  titleFormatterValue?: string; // Formats value in the title

  valueFormatter?: (val: any) => string;

  cellRenderer?: Type<any> & string; // Actual key used by ag-grid
  cellRendererFramework?: Type<any>; // Actual key used by ag-grid
  // cellRendererFrameworkName?: string; // API sends the component name
}

export interface AgGridRowClassRules {
  [key: string]: ((params: ICellEditorParams) => boolean) | string;
}

/**
 * Page stats object
 */
export interface PageStats {
    title: string;
    total: number;
    key?: string;
    clickAction?: boolean;
    filter?: PartialData;
    isRecommend?: boolean;
}

export declare type PageStatsList = Array<PageStats>;

/**
 * Stats card type
 */
export enum StatsCardType {
    CHIP = "CHIPS",
    CARD = "CARDS"
}

export interface PageStatsData {
    results: PageStatsList;
    viewType: StatsCardType;
    selectedIndex?: number;
}

export interface PageStatsApiResponse extends ApiResponseCommon {
    data: PageStatsData;
}

export interface PageListApiResponse extends ApiResponseCommon {
    data: AgGridOptions;
}

export enum AgGridFilters {
    DateFilter = 'agDateColumnFilter',
}

export interface AgGridFormatter {
    // format(value: any, format?: string): any;
    format(value: any, formatterValue?: any): string;
}

/**
 * Specifies Kalgudi admin configuration
 *
 * @author Raghuvarma CB
 */
export interface StoreAdminConfiguration {
  // coreConfig: KalgudiCoreConfig;
  storeType: StoreType;
  env?: StoreEnvironmentConfig;
}

export interface StoreEnvironmentConfig {
  readonly appId?: string;
  readonly production: boolean;
  readonly development?: boolean;
  readonly awsAccessKey: string;
  readonly s3BucketUrl: string;
  readonly domain: string;
  readonly kalgudiDomain?: string;
  readonly consumerStoreDomain: string;
  readonly bizStoreDomain: string;
  readonly farmerStoreDomain: string;
  readonly restBaseUrl: string;
  readonly restBaseUrlV2: string;
  readonly googlePlacesApi?: string;
  readonly firebaseApi?: string;
  readonly [key: string]: any;
}

export interface IAgGridCellRenderer extends ICellRendererAngularComp {

  formatString(val: any): string;
}