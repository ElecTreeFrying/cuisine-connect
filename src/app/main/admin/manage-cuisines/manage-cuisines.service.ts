import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, CuisineCategory } from 'src/app/store';

@Injectable()
export class ManageCuisinesService {

  @Select(AppState.cuisineCategories) cuisineCategories$!: Observable<CuisineCategory[] | null>

  constructor(
    private router: Router,
    private store: Store
  ) { }

  getCuisineCategories(): void {
    this.store.dispatch(new AppAction.CuisineCategoryControl('get'));
  }
  
  updateCuisineCategory(cuisineCategory: CuisineCategory): void {
    this.store.dispatch(new AppAction.SelectedCuisineCategoryControl('set', cuisineCategory)).subscribe(() => {
      this.router.navigate([ '/admin/manage-cuisines/update-cuisine-category' ]);
    });
  }

}
