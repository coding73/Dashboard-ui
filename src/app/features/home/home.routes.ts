import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FlightsCreateComponent } from './components/flights-create/flights-create.component';

export const homeRoutes: Routes = [
    {
      path: '',
      component: HomePageComponent,
    },
    {
      path: 'create',
      component: FlightsCreateComponent,
    }
];
