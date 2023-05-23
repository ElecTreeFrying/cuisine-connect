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
        loadComponent: () => import('./manage-cuisines/manage-cuisines.component').then(m => m.ManageCuisinesComponent),
        title: 'Manage Cuisines | Cuisine Connect'
      },  
    ]
  },
];
