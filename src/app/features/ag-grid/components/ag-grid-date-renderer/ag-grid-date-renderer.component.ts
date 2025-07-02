import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IAgGridCellRenderer } from '@app/models';


@Component({
  selector: "app-ag-grid-date-renderer",
  template: `
  <span [title]="cell?.row | date: cell?.titleFormatter">{{ cell?.row | date: cell?.formatter }}</span>`,
  standalone: true,
  imports: [
    CommonModule
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AgGridDateRendererComponent implements OnInit, IAgGridCellRenderer {

  public static componentId = 'AgGridDateRendererComponent';

  private params: any;
  public cell: any;

  ngOnInit(): void { }

  agInit(params: any): void {
    this.params = params;
    this.cell = {
      row: params.value,
      col: params.colDef.headerName,
      formatter: params.colDef.formatterValue,
      titleFormatter: params.colDef.titleFormatterValue,
    };
  }

  refresh(): boolean {
    return false;
  }

  formatString(val: any): string {

    try {
      return new Date(val).toUTCString();
    } catch (e) {
      return '';
    }

  }
}