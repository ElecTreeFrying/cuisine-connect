import { Routes } from '@angular/router';
import { adminGuard, authenticatedGuard, notAuthenticatedGuard } from './route-guards';

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
    path: 'admin',
    loadChildren: () => import('./main').then(m => m.ADMIN_ROUTES),
    canActivate: [ adminGuard ]
  },
  {
    path: '',
    loadComponent: () => import('./main').then(m => m.HomepageComponent),
    canActivate: [ authenticatedGuard ],
    title: 'Homepage | Cuisine Connect'
  },
];
