import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-manage-recipes-root',
  template: '<router-outlet />',
  standalone: true, imports: [ RouterOutlet ]
})
class RootComponent {}

export const MANAGE_RECIPES_ROUTES: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./manage-recipes.component').then(m => m.ManageRecipesComponent),
        title: 'Manage Recipes | Cuisine Connect'
      },  
      {
        path: 'add-recipe',
        loadComponent: () => import('../../add-recipe/add-recipe.component').then(m => m.AddRecipeComponent),
        title: 'Add Recipe | Cuisine Connect'
      },
      {
        path: 'update-recipe',
        loadComponent: () => import('../../add-recipe/add-recipe.component').then(m => m.AddRecipeComponent),
        title: 'Update Recipe | Cuisine Connect',
        data: { update: true }
      }
    ]
  },
];
