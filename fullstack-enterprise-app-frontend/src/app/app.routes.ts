import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/constants/routes.constants';

export const routes: Routes = [

  {
    path: APP_ROUTES.HOME,

    loadComponent: () =>
      import('./features/home/home/home')
      .then(m => m.Home)
  },


  {
    path: APP_ROUTES.DASHBOARD,

    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard')
      .then(m => m.Dashboard)
  },


  {
    path: APP_ROUTES.LOGIN,

    loadComponent: () =>
      import('./features/auth/login/login/login')
      .then(m => m.Login)
  },


  {
    path: APP_ROUTES.REGISTER,

    loadComponent: () =>
      import('./features/auth/register/register/register')
      .then(m => m.Register)
  },


  {
    path: '**',
    redirectTo: APP_ROUTES.HOME
  }

];
