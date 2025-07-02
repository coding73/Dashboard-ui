import { inject, Injectable, Injector } from '@angular/core';
import { TOKEN_REGISTRY } from '@app/config';
import { AgGridColumnDef, AgGridFilters, AgGridFormatter } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class AgGridMapperService {
  injector: Injector = inject(Injector);
  components: any[] = [];

  constructor() { }

  /**
   * Maps value formatters, cell renderers, filters params to the ag grid.
   */
  mapAgGridColumnDefs(columnDefs: AgGridColumnDef[], dynamicComponents?: any[]): AgGridColumnDef[] {
    if (dynamicComponents && dynamicComponents.length) {
      dynamicComponents.forEach((component) => {
        this.components.push(component);
      });
    }

    return columnDefs.map((c) => {
      c = this._mapValueFormatter(c);
      c = this._mapCellFilterParams(c);
      c = this._mapCellRendererFramework(c);

      return c;
    });
  }

  /**
   * Maps all the filter with their param values
   * @param columnDefs Ag grid column definitions
   */
  mapCellFilterParams(columnDefs: AgGridColumnDef[]): AgGridColumnDef[] {
    return columnDefs.map((c) => this._mapCellFilterParams(c));
  }

  /**
   * Maps all the string value formatters to its function definitions
   * @param columnDefs Ag grid column definitions
   */
  mapValueFormatter(columnDefs: AgGridColumnDef[]): AgGridColumnDef[] {
    return columnDefs.map((c) => this._mapValueFormatter(c));
  }

  /**
   * Maps all cell renderer framework names to their component type
   *
   * @param columnDefs Ag grid column definitions
   */
  mapCellRendererFramework(columnDefs: AgGridColumnDef[]): AgGridColumnDef[] {
    return columnDefs.map((c) => this._mapCellRendererFramework(c));
  }

  private _mapCellFilterParams(columnDef: AgGridColumnDef): AgGridColumnDef {
    if (columnDef.filter === AgGridFilters.DateFilter) {
      columnDef.filterParams = this._dateFilterParams();
    }

    // Return the column definition
    return columnDef;
  }

  private _mapValueFormatter(columnDef: AgGridColumnDef): AgGridColumnDef {
    if (columnDef.formatter) {
      try {
        // Get injector from service
        const formatter: AgGridFormatter = this.injector.get<AgGridFormatter>(TOKEN_REGISTRY[columnDef.formatter as string]);
        // Add value formatter to the current column def
        columnDef.valueFormatter = (val) =>
          formatter.format(val.value, columnDef.formatterValue);
      } catch (e) {
        console.error('No value formatter found for ', columnDef);
        console.error(e);
      }
    }

    // Return the column definition
    return columnDef;
  }

  private _mapCellRendererFramework(
    columnDef: AgGridColumnDef
  ): AgGridColumnDef {
    if (columnDef.cellRenderer) {
      try {
        // Get all registered components
        const factories = this.getAllRegisteredComponents();
        // Find the matching component with specified name
        const comp = this.getComponents(factories, columnDef.cellRenderer);

        // Assign cell renderer framework
        columnDef.cellRenderer = columnDef.cellRenderer as any;

      } catch (e) {
        console.error(
          'No cell renderer framework component found for ',
          columnDef
        );
        console.error(e);
      }
    }

    // Return the column definition
    return columnDef;
  }

  private getAllRegisteredComponents(): any[] {
    return Array.from(this.components);
  }

  private getComponents(factories: any[], componentName: string) {
    return this.components.find(
      (f: any) => {
        return f.name.slice(1) === componentName || f.componentId === componentName
      }
    );
  }

  /**
   * @see https://www.ag-grid.com/javascript-grid-date-component/
   */
  private _dateFilterParams() {
    return {
      inRangeInclusive: true,
      clearButton: true,
      resetButton: true,

      comparator: (filterLocalDateAtMidnight: any, cellValue: number) => {
        const originalDate = new Date(cellValue);
        var cellDate = new Date(
          originalDate.getFullYear(),
          originalDate.getMonth(),
          originalDate.getDate()
        );

        return filterLocalDateAtMidnight.getTime() === cellDate.getTime()
          ? 0
          : cellDate < filterLocalDateAtMidnight
            ? -1
            : 1;
      },
    };
  }
}
