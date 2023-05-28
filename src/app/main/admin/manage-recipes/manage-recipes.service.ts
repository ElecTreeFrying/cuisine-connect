import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, Recipe } from 'src/app/store';

@Injectable()
export class ManageRecipesService {

  @Select(AppState.recipes) recipes$!: Observable<Recipe[] | null>

  dishNameSearch!: string;

  constructor(
    private router: Router,
    private store: Store
  ) { }

  getRecipes(): void {
    this.store.dispatch(new AppAction.RecipesControl('get'));
  }
  
  updateRecipe(recipe: Recipe): void {
    this.store.dispatch(new AppAction.SelectedRecipeControl('set', recipe)).subscribe(() => {
      this.router.navigate([ '/admin/manage-recipes/update-recipe' ]);
    });
  }

}
