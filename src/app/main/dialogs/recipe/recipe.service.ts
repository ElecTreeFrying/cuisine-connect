import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../common';

function getTabIndex(tab: string): number {
  switch (tab) {
    case 'recipe':   return 0;
    case 'details':  return 1;
    case 'comments': return 2;
    default:         return 0;
  }
}

@Injectable()
export class RecipeService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  get tabParam(): string {
    return this.route.snapshot.queryParamMap.get('tab') || 'recipe';
  }

  get tabIndex(): number {
    return getTabIndex(this.tabParam);
  }

  setTabQueryParams(index: number, recipe: Recipe): void {
    switch (index) {
      case 0: return this.updateQueryParams({ tab: 'recipe', cuisine: recipe?.uid });
      case 1: return this.updateQueryParams({ tab: 'details', cuisine: recipe?.uid });
      case 2: return this.updateQueryParams({ tab: 'comments', cuisine: recipe?.uid });
    }
  }
  
  updateQueryParams(queryParams: any): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams
    });
  }

}
