import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../common';

@Injectable()
export class RecipeService {

  constructor(
    private router: Router
  ) { }

  initializeQueryParams(recipe: Recipe): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { cuisine: recipe.uid }
    });
  }
  
  removeQueryParams(): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { cuisine: null }
    });
  }

}
