import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { map, tap } from 'rxjs';

import { AppStateModel, AppAction, Recipe, CuisineCategory } from '.';
import { FirestoreService } from 'src/app/main';

export const defaults: AppStateModel = {
  admin: false,
  authenticated: false,
  recipes: null,
  cuisineCategories: null
};

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: defaults
})

@Injectable()
export class AppState {

  @Selector()
  static admin(state: AppStateModel): boolean {
    return state.admin;
  }

  @Selector()
  static authenticated(state: AppStateModel): boolean {
    return state.authenticated;
  }

  @Selector()
  static recipes(state: AppStateModel): Recipe[] | null {
    if (!state.recipes) return null;
    return state.recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  @Selector()
  static cuisineCategories(state: AppStateModel): CuisineCategory[] | null {
    if (!state.cuisineCategories) return null;
    return state.cuisineCategories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  constructor(
    private firestore: FirestoreService
  ) { }

  @Action(AppAction.UpdateAuthenticationState)
  updateAuthenticationState(ctx: StateContext<AppStateModel>, action: AppAction.UpdateAuthenticationState): void {
    ctx.patchState({
      admin: action.state.admin || false,
      authenticated: action.state.authenticated,
      recipes: action.state.authenticated ? ctx.getState().recipes : null,
      cuisineCategories: action.state.authenticated ? ctx.getState().cuisineCategories : null
    });
  }
  
  @Action(AppAction.RecipesControl)
  recipesControl(ctx: StateContext<AppStateModel>, { control }: AppAction.RecipesControl) {
    if (control === 'get') {
      return this.firestore.recipes$.pipe(
        map(query => query.map(value => value.data() as Recipe)),
        tap(recipes => ctx.patchState({ recipes }))
      );
    } else {
      return ctx.patchState({ recipes: null });
    }
  }
  
  @Action(AppAction.CuisineCategoryControl)
  cuisineCategoriesControl(ctx: StateContext<AppStateModel>, { control }: AppAction.RecipesControl) {
    if (control === 'get') {
      return this.firestore.cuisineCategories$.pipe(
        map(query => query.map(value => value.data() as CuisineCategory)),
        tap(cuisineCategories => ctx.patchState({ cuisineCategories }))
      );
    } else {
      return ctx.patchState({ cuisineCategories: null });
    }
  }
  
}
