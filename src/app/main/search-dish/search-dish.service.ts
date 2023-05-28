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
    this.store.dispatch(new AppAction.RecipesControl('get'));
  }

  openRecipe(recipe: Recipe) {
    this.dialog.open(RecipeComponent, {
      data: recipe,
      height: '90dvh',
      width: '700px',
      autoFocus: false
    });
  }

  checkDialogCuisineQueryParam(param: string): void {
    param && this.dialog.open(RecipeComponent, {
      data: this.store.selectSnapshot(AppState.recipe(param)),
      height: '90dvh',
      width: '700px',
      autoFocus: false
    });
  }

}
