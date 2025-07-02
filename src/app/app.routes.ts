import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from '@app/core';
import { homeRoutes } from './features/home';
import { authRoutes } from './features/auth';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    children: authRoutes
  },
  {
    path: 'app',
    loadComponent: () => import('./shared/components/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        children: homeRoutes
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
