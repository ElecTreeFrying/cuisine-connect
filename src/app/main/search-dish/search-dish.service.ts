import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Recipe } from './../common';
import { RecipeComponent } from './../dialogs';
import { AppAction, AppState } from 'src/app/store';

@Injectable()
export class SearchDishService {

  @Select(AppState.recipes) recipes$!: Observable<Recipe[] | null>

  dishNameSearch!: string;

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  getRecipes(): void {
    this.store.selectSnapshot(AppState.recipes)
    || this.store.dispatch(new AppAction.GetRecipes);
  }

  openRecipe(recipe: Recipe) {
    this.dialog.open(RecipeComponent, {
      data: recipe,
      height: '90dvh',
      width: '700px',
      autoFocus: false
    });
  }

}
