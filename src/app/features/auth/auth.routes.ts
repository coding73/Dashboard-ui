import { Routes } from '@angular/router';
import { SignInComponent } from './components';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const authRoutes: Routes = [
    {
      path: 'login',
      component: SignInComponent,
    },
    {
      path: 'signup',
      component: SignUpComponent,
    },
    {
      path: '**',
      redirectTo: 'login',
      pathMatch: 'full'
    }
];
