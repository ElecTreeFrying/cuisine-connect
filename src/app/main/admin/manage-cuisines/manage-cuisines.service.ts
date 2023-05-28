import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, CuisineCategory } from 'src/app/store';

@Injectable()
export class ManageCuisinesService {

  @Select(AppState.cuisineCategories) cuisineCategories$!: Observable<CuisineCategory[] | null>

  constructor(
    private store: Store
  ) { }

  getCuisineCategories(): void {
    this.store.selectSnapshot(AppState.cuisineCategories)
    || this.store.dispatch(new AppAction.CuisineCategoryControl('get'));
  }

}
