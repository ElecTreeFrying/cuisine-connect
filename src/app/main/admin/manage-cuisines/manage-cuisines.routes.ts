import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-manage-cuisine-categories-root',
  template: '<router-outlet />',
  standalone: true, imports: [ RouterOutlet ]
})
class RootComponent {}

export const MANAGE_CUISINE_CATEGORIES_ROUTES: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./manage-cuisines.component').then(m => m.ManageCuisinesComponent),
        title: 'Manage Cuisine Categories | Cuisine Connect'
      },  
      {
        path: 'add-cuisine-category',
        loadComponent: () => import('./add-cuisine/add-cuisine.component').then(m => m.AddCuisineComponent),
        title: 'Add Cuisine Categories | Cuisine Connect'
      },
      {
        path: 'update-cuisine-category',
        loadComponent: () => import('./add-cuisine/add-cuisine.component').then(m => m.AddCuisineComponent),
        title: 'Update Cuisine Categories | Cuisine Connect',
        data: { update: true }
      }
    ]
  },
];
