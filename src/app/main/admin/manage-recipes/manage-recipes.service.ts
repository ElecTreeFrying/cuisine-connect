import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, Recipe } from 'src/app/store';

@Injectable()
export class ManageRecipesService {

  @Select(AppState.recipes) recipes$!: Observable<Recipe[] | null>

  dishNameSearch!: string;

  constructor(
    private store: Store
  ) { }

  getRecipes(): void {
    this.store.selectSnapshot(AppState.recipes)
    || this.store.dispatch(new AppAction.RecipesControl('get'));
  }

}
