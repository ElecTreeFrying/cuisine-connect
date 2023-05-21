import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken, createSelector } from '@ngxs/store';
import { map, tap } from 'rxjs';

import { AppStateModel, AppAction, Recipe } from '.';
import { RecipesFirestoreService } from 'src/app/main';

export const defaults: AppStateModel = {
  admin: false,
  authenticated: false,
  recipes: null
};

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: defaults
})

@Injectable()
export class AppState {

  @Selector()
  static authenticated(state: AppStateModel): boolean {
    return state.authenticated;
  }

  @Selector()
  static recipes(state: AppStateModel): Recipe[] | null {
    if (!state.recipes) return null;
    return state.recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  static getRecipeByDishName(dishName: string): (state: AppStateModel) => Recipe | null {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.recipes!.find(e => e.dishName.toLowerCase().includes(dishName.toLowerCase())) || null;
    });
  }

  static filteredRecipes(dishName: string): (state: AppStateModel) => Recipe[] | null {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.recipes!.filter(e => e.dishName.toLowerCase().includes(dishName.toLowerCase())) || null;
    });
  }

  constructor(
    private recipesService: RecipesFirestoreService
  ) { }

  @Action(AppAction.UpdateAuthenticationState)
  updateAuthenticationState(ctx: StateContext<AppStateModel>, action: AppAction.UpdateAuthenticationState): void {
    ctx.patchState({
      admin: action.admin || false,
      authenticated: action.authenticated,
      recipes: action.authenticated ? ctx.getState().recipes : null
    });
  }
  
  @Action(AppAction.GetRecipes)
  setRecipes(ctx: StateContext<AppStateModel>) {
    return this.recipesService.collection$.pipe(
      map(query => query.map(value => value.data() as Recipe)),
      tap(recipes => ctx.patchState({ recipes }))
    );
  }
  
  @Action(AppAction.ClearRecipes)
  clearRecipes(ctx: StateContext<AppStateModel>) {
    ctx.patchState({ recipes: null });
  }
  
}
