import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridDateRendererComponent, AgGridSlNoRendererComponent, AgGridStatsTablePage, StatsTablePage } from 'src/app/features/ag-grid';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialData } from '@app/models';
import { FlightsAgGridService } from '../../services/flights-ag-grid.service';

@Component({
  selector: 'app-flights-ag-grid',
  standalone: true,
  imports: [
    AgGridAngular
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: StatsTablePage,
      useExisting: forwardRef(() => FlightsAgGridService),
    }
  ],
  templateUrl: './flights-ag-grid.component.html',
  styleUrl: './flights-ag-grid.component.scss'
})
export class FlightsAgGridComponent extends AgGridStatsTablePage implements OnInit {

  components: any = {
    AgGridSlNoRendererComponent,
    AgGridDateRendererComponent
  }
  constructor(
    injector: Injector,
    router: Router,
    activatedRoute: ActivatedRoute
  ) {
    super(injector, router, activatedRoute)
  }

  ngOnInit(): void {
    this.initPage();
  }

  override get listParams(): PartialData {
    return {}
  }
}
