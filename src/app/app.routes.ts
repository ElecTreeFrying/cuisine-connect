import { Routes } from '@angular/router';
import { authenticatedGuard, notAuthenticatedGuard } from './common';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./main').then(m => m.HomepageComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Homepage | Cuisine Connect'
  },
  {
    path: 'auth',
    loadComponent: () => import('./main').then(m => m.AuthComponent),
    canActivate: [ notAuthenticatedGuard ],
    title: 'Login or Register | Cuisine Connect'
  }
];
