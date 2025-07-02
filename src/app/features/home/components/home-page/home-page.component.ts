import { Component } from '@angular/core';
import { FlightsAgGridComponent } from '../flights-ag-grid/flights-ag-grid.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FlightsAgGridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router: Router) {

  }

  createFlights() {
    this.router.navigate(['/app/home/create']);
  }

}
