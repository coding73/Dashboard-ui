import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICellEditorRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellEditorRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-sl-no-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ag-grid-sl-no-renderer.component.html',
  styleUrl: './ag-grid-sl-no-renderer.component.scss'
})
export class AgGridSlNoRendererComponent implements ICellEditorRendererAngularComp {
  param!: any;
  public cell: any;

  agInit(params: any): void {
    this.param = params;

    this.cell = {
      row: params.value,
      col: params.colDef.headerName,
      rowIndex: params.node.rowIndex,
    };
  }
}
