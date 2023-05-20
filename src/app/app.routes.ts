import { Routes } from '@angular/router';
import { authenticatedGuard, notAuthenticatedGuard } from './common';

export const APP_ROUTES: Routes = [
  {
    path: 'add-recipe',
    loadComponent: () => import('./main').then(m => m.AddRecipeComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Add a recipe | Cuisine Connect'
  },
  {
    path: 'search-dish',
    loadComponent: () => import('./main').then(m => m.SearchDishComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Search a dish | Cuisine Connect'
  },
  {
    path: 'manage-profile',
    loadComponent: () => import('./main').then(m => m.ManageProfileComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Manage profile | Cuisine Connect'
  },
  {
    path: 'auth',
    loadComponent: () => import('./main').then(m => m.AuthComponent),
    canActivate: [ notAuthenticatedGuard ],
    title: 'Login or Register | Cuisine Connect'
  },
  {
    path: '',
    loadComponent: () => import('./main').then(m => m.HomepageComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Homepage | Cuisine Connect'
  },
];
