import { Routes } from '@angular/router';
import { RootComponent } from './root/root.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./homepage/homepage.component').then(m => m.HomepageComponent),
        title: 'Admin portal | Cuisine Connect'
      },  
      {
        path: 'manage-cuisines',
        loadChildren: () => import('./manage-cuisines/manage-cuisines.routes').then(m => m.MANAGE_CUISINE_CATEGORIES_ROUTES),
        title: 'Manage Cuisine Categories | Cuisine Connect'
      },
      {
        path: 'manage-recipes',
        loadChildren: () => import('./manage-recipes/manage-recipes.routes').then(m => m.MANAGE_RECIPES_ROUTES),
        title: 'Manage Recipes | Cuisine Connect'
      },
      {
        path: 'manage-users',
        loadComponent: () => import('./manage-users/manage-users.component').then(m => m.ManageUsersComponent),
        title: 'Manage Users | Cuisine Connect'
      },
    ]
  },
];
