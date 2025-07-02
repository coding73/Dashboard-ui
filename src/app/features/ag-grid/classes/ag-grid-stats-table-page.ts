import { Directive, EventEmitter, Injector, Input, OnDestroy, Output, ViewChild,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, ProcessCellForExportParams } from 'ag-grid-community';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { finalize, map, takeUntil } from 'rxjs/operators';
import { UtilService } from '../services/util.service';
import { StatsTablePage } from './stats-table-page';
import { PageStatsData, AgGridOptions, PageStats, StoreAdminConfiguration, PartialData, StatsCardType, IAgGridCellRenderer,} from '@app/models';
import { STORE_ADMIN_CONFIG } from '@app/config';
import { ActivatedRoute, Router } from '@angular/router';

@Directive()
export class AgGridStatsTablePage implements OnDestroy {
  @ViewChild(AgGridAngular)
  agGrid!: AgGridAngular;

  @Input()
  pageStats!: PageStatsData;

  @Input()
  agGridOptions: AgGridOptions = {
    results: [],
    columnDefs: [],
    count: 0,
  };

  @Input()
  selectedStat!: PageStats;

  @Input()
  selectedStatForm = new FormControl('');

  @Input()
  paginationPageSize: number = 100;

  @Input()
  pagination: boolean = true;

  @Input()
  paginationAutoPageSize: boolean = false;

  @Input()
  animateRows: boolean = true;

  @Input()
  enableQuickSearch: boolean = true;

  @Output()
  rowSelected = new EventEmitter<any>();

  @Output()
  rowClicked = new EventEmitter<any>();

  statsLoadingProgress = false;

  protected config: StoreAdminConfiguration;
  protected statsTablePage: StatsTablePage;
  protected util: UtilService;
  protected destroyed$: Observable<any>;
  private isSelectionSubscribed = false;
  private readonly destroyedSubject = new Subject();
  private readonly resetStatsSubject = new Subject();
  private readonly selectedRowsSubject = new BehaviorSubject<any[]>([]);
  private readonly resetStats$: Observable<any>;
  readonly selectedRows$: Observable<any[]>;

  constructor(protected injector: Injector,  protected router: Router,protected route: ActivatedRoute) {
    this.destroyed$ = this.destroyedSubject.asObservable();
    this.resetStats$ = this.resetStatsSubject.asObservable();
    this.selectedRows$ = this.selectedRowsSubject.asObservable();
    this.util = this.injector.get(UtilService);
    this.config =
      this.injector.get<StoreAdminConfiguration>(STORE_ADMIN_CONFIG);
    this.statsTablePage = this.injector.get(StatsTablePage);
  }

  /**
   * Extra params passed to the stats service
   */
  get statsParams(): PartialData {
    return {};
  }

  /**
   * Extra params passed to the list service
   */
  get listParams(): PartialData {
    return {};
  }

  /**
   * Gets the current selected rows.
   */
  get selectedRows(): any {
    return this.selectedRowsSubject.getValue();
  }

  // --------------------------------------------------------
  // #region Public methods
  // --------------------------------------------------------

  /**
   * Called once, before the instance is destroyed.
   * Internally it calls the onDestroyed() method.
   */
  ngOnDestroy(): void {
    this.destroyedSubject.next(null);
    this.destroyedSubject.complete();
    this.onDestroyed();
  }

  /**
   * Implement this method to clean up resources
   */
  protected onDestroyed(): void {}

  /**
   * Initializes the ag-grid stats page
   */
  initPage(): void {
    this.subscribeToSelectedStatsChange();
    this.resetStats$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((v) => this.loadPageStats());

    // this.loadPageStats();
    this.resetStats();
  }

  /**
   * Click event handler for ag-grid row selected
   */
  onRowSelected(row: any): void {
    this.rowSelected.emit(row.data);
  }

  /**
   * Download the current table result set as CSV format.
   */
  downloadCsv(fileName?: string): void {
    // Filename is set to 'export' if file name is not provided
    fileName = fileName ? this.util.encodeUri(fileName, '-') : 'export';

    // Get column definitions
    const columnDefs = this.agGrid.api.getColumnDefs();

    // Filter out the 'Action' column by colId or headerName
    const columnKeys = columnDefs
      ?.filter((col: any) => col.colId !== '0' && col.headerName !== 'Action')
      .map((col: any) => col.colId);

    this.agGrid.api.exportDataAsCsv({
      columnKeys,
      fileName,
      processCellCallback: this.processCellForExport,
    });
  }

  /**
   * Downloads the current table result set as excel.
   */
  downloadExcel(fileName: string = 'export'): void {
    // Trim special characters from the filename
    fileName = this.util.encodeUri(fileName, '-');

    this.agGrid.api.exportDataAsExcel({
      allColumns: true,
      fileName,
      processCellCallback: this.processCellForExport,
    });
  }

  /**
   * Resets the stats list and causes the stats list to be reloaded.
   */
  resetStats(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.selectedRowsSubject.next([]);
      this.resetStatsSubject.next(null);
      resolve();
    });
  }

  /**
   * Resets table stream and fetches latest table data again
   */
  resetTable(): void {
    // Empty selected rows
    this.selectedRowsSubject.next([]);
    this.loadPageList(this.selectedStat);
  }

  /**
   * Performs quick search on the ag-grid table provided by the ag-grid api
   *
   * @param keyword Keyword to search
   */
  quickSearch(keyword: string = ''): void {
    // AgGrid not yet loaded
    if (!this.agGrid) {
      console.warn('AgGrid table not available');
      return;
    }

    // Update quick filter in ag-grid api
    this.agGrid.api.setGridOption('quickFilterText', keyword);
  }

  // --------------------------------------------------------
  // #endregion
  // --------------------------------------------------------

  // --------------------------------------------------------
  // #region Private methods
  // --------------------------------------------------------

  /**
   * Load page stats
   */
  private loadPageStats(): void {
    this.statsLoadingProgress = true;

    this.statsTablePage
      .fetchPageStats(this.config.storeType, { ...this.statsParams })
      .pipe(
        finalize(() => (this.statsLoadingProgress = false)),

        takeUntil(this.destroyed$)
      )
      .subscribe((res) => this.initPageStats(res));
  }

  /**
   * Loads the list data
   *
   * @param stat Selected stats
   */
  private loadPageList(stat: PageStats): void {
    // Show loading progress
    if (this.agGrid) {
      this.agGrid.api.setGridOption("loading", true);
    }

    this.statsTablePage
      .fetchPageList(this.config.storeType, {
        ...stat.filter,
        ...this.listParams,
      })
      .pipe(
        takeUntil(this.destroyed$),
        // Finalize the loading progress
        finalize(() => {
          if (this.agGrid) {
            this.agGrid.api.setGridOption("loading", false);
          }
        })// Set the grid options
      )
      .subscribe((res) => {
        this.agGridOptions = res;

        // Subscribe to ag-grid selection changed
        this.subscribeToSelectionChanges();
      });
  }

  /**
   * Initializes page stats if the API response is valid
   * @param val Page stats API response
   */
  private initPageStats(val: PageStatsData): void {
    if (!Array.isArray(val.results) || typeof val.selectedIndex !== 'number') {
      this.pageStats = {
        results: [],
        viewType: StatsCardType.CHIP,
      };
      this.util.showMessage(`API did not responded with correct format`);

      return;
    }

    this.pageStats = val;

    // Update the selected index
    const selectedStat =
      val.results.length > 0 && val.selectedIndex >= 0
        ? val.results[val.selectedIndex]
        : null;

    // Update the selected stats
    this.setSelectedStat(selectedStat);
  }

  /**
   * Loads the list of any stats selection change
   */
  private subscribeToSelectedStatsChange(): void {
    this.selectedStatForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((stat: any) => {
        this.selectedStat = stat;
        this.loadPageList(stat);
      });
  }

  /**
   * Updates selected stats
   */
  private setSelectedStat(val: any): void {
    this.selectedStatForm.patchValue(val);
    this.selectedStat = val;
  }

  /**
   * Processes a cell to transform complex values to simple textual format
   */
  private processCellForExport(params: ProcessCellForExportParams): string {

    // Get current column definition and its cell renderer component class
    const colDef: any = params.column.getColDef();
    const CellRenderer = colDef.cellRendererFramework;

    // Get the index in downloaded files
    if (colDef.field === 'slNo') {
      const SlNum =
        (params && params.node && params.node.rowIndex
          ? params.node.rowIndex
          : 0) + 1;
      return SlNum.toString();
    }

    // Create new instance of the cell renderer
    if (CellRenderer) {
      const comp: IAgGridCellRenderer = new CellRenderer();

      // Format the cell if it contains formatString method
      if (typeof comp.formatString === 'function') {
        return comp.formatString(params.value);
      }
    }

    // No complex cell renderer found hence return the cell value
    // Ensure objects are not transformed to string directly
    return typeof params.value === 'object' ? '' : params.value;
  }

  /**
   * Subscribes to selection updates
   */
  private subscribeToSelectionChanges(retryAmount = 1) {
    if (!this.agGrid) {
      // Keep on retrying until ag-grid not available
      if (retryAmount < 10) {
        setTimeout(
          () => this.subscribeToSelectionChanges(retryAmount + 1),
          1000
        );
      }
      throw new Error('AgGrid not defined');
    }

    // Don't resubscribe again if already selected
    if (this.isSelectionSubscribed) {
      console.warn('Already subscribed to selection changes');
      return;
    }

    // Subscribe to the ag-grid selection event
    this.agGrid.selectionChanged
      .pipe(
        takeUntil(this.destroyed$),

        // Get the grid api from the selection change event
        map((val) => val.api as GridApi),

        // Get current selected rows
        map((api) => api.getSelectedRows())
      )
      .subscribe((selectedRows) => this.updateSelectedRows(selectedRows));

    // Ensure not to resubscribe to the same event
    this.isSelectionSubscribed = true;
  }

  /**
   * Updates the current selected rows
   */
  private updateSelectedRows(selectedRows: any[]) {
    this.selectedRowsSubject.next(selectedRows);
  }

  // --------------------------------------------------------
  // #endregion
  // --------------------------------------------------------
}
