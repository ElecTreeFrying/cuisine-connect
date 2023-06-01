import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken, createSelector } from '@ngxs/store';
import { map, tap } from 'rxjs';

import { AppStateModel, AppAction, Recipe, CuisineCategory, Language, UserPermissions } from '.';
import { CuisineCategoriesService, RecipesService, UserPermissionsService } from 'src/app/main';

export const defaults: AppStateModel = {
  language: 'en',
  admin: false,
  authenticated: false,
  admin_portal: false,
  user: null,
  recipes: null,
  selectedRecipe: null,
  cuisineCategories: null,
  selectedCuisineCategory: null,
  userPermissions: null
};

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: defaults
})

@Injectable()
export class AppState {

  @Selector()
  static language(state: AppStateModel): Language {
    return state.language;
  }

  @Selector()
  static admin(state: AppStateModel): boolean {
    return state.admin;
  }

  @Selector()
  static adminPortal(state: AppStateModel): boolean {
    return state.admin_portal;
  }

  @Selector()
  static authenticated(state: AppStateModel): boolean {
    return state.authenticated;
  }

  @Selector()
  static user(state: AppStateModel): any {
    return state.user;
  }

  @Selector()
  static userId(state: AppStateModel): string {
    return state.user.uid;
  }

  @Selector()
  static recipes(state: AppStateModel): Recipe[] | null {
    if (!state.recipes) return null;
    return state.recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  @Selector()
  static selectedRecipe(state: AppStateModel): Recipe | null {
    return state.selectedRecipe;
  }

  static recipe(uid: string): (state: AppStateModel) => Recipe | null {
    return createSelector([AppState], (state: AppStateModel): Recipe | null => {
      return state?.recipes?.find(e => e.uid === uid) || null;
    });
  }

  @Selector()
  static cuisineCategories(state: AppStateModel): CuisineCategory[] | null {
    if (!state.cuisineCategories) return null;
    return state.cuisineCategories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  @Selector()
  static selectedCuisineCategory(state: AppStateModel): CuisineCategory | null {
    return state.selectedCuisineCategory;
  }

  @Selector()
  static userPermissions(state: AppStateModel): UserPermissions[] | null {
    if (!state.userPermissions) return null;
    return state.userPermissions;
  }

  constructor(
    private recipesService: RecipesService,
    private cuisineCategoriesService: CuisineCategoriesService,
    private userPermissionsService: UserPermissionsService
  ) { }
  
  @Action(AppAction.UpdateLanguageState)
  updateLanguageState(ctx: StateContext<AppStateModel>, { language }: AppAction.UpdateLanguageState) {
    ctx.patchState({ language });
  }

  @Action(AppAction.UpdateAuthenticationState)
  updateAuthenticationState(ctx: StateContext<AppStateModel>, action: AppAction.UpdateAuthenticationState): void {
    ctx.patchState({
      language: action.state.authenticated ? ctx.getState().language : 'en',
      admin: action.state.admin || false,
      authenticated: action.state.authenticated,
      admin_portal: action.state.authenticated ? ctx.getState().admin_portal : false,
      user: action.state.authenticated ? ctx.getState().user : null,
      recipes: action.state.authenticated ? ctx.getState().recipes : null,
      cuisineCategories: action.state.authenticated ? ctx.getState().cuisineCategories : null,
      userPermissions: action.state.authenticated ? ctx.getState().userPermissions : null,
    });
  }
  
  @Action(AppAction.SetFirebaseUser)
  setFirebaseUser(ctx: StateContext<AppStateModel>, { user }: AppAction.SetFirebaseUser) {
    ctx.patchState({ user });
  }
  
  @Action(AppAction.UpdateAdminPortalState)
  updateAdminPortalState(ctx: StateContext<AppStateModel>, { state }: AppAction.UpdateAdminPortalState) {
    setTimeout(() => ctx.patchState({ admin_portal: state }));
  }
  
  @Action(AppAction.RecipesControl)
  recipesControl(ctx: StateContext<AppStateModel>, { control }: AppAction.RecipesControl) {
    if (control === 'get') {
      return this.recipesService.recipes$.pipe(
        map(query => query.map(value => ({ ...value.data(), uid: value.id }))),
        tap(recipes => ctx.patchState({ recipes }))
      );
    } else {
      return ctx.patchState({ recipes: null });
    }
  }
  
  @Action(AppAction.SelectedRecipeControl)
  selectedRecipeControl(ctx: StateContext<AppStateModel>, { control, selectedRecipe }: AppAction.SelectedRecipeControl) {
    ctx.patchState({ selectedRecipe: control === 'set' ? selectedRecipe : null });
  }
  
  @Action(AppAction.CuisineCategoryControl)
  cuisineCategoriesControl(ctx: StateContext<AppStateModel>, { control }: AppAction.RecipesControl) {
    if (control === 'get') {
      return this.cuisineCategoriesService.cuisineCategories$.pipe(
        map(query => query.map(value => ({ ...value.data(), uid: value.id }))),
        tap(cuisineCategories => ctx.patchState({ cuisineCategories }))
      );
    } else {
      return ctx.patchState({ cuisineCategories: null });
    }
  }
  
  @Action(AppAction.SelectedCuisineCategoryControl)
  selectedCuisineCategoryControl(ctx: StateContext<AppStateModel>, { control, selectedCuisineCategory }: AppAction.SelectedCuisineCategoryControl) {
    ctx.patchState({ selectedCuisineCategory: control === 'set' ? selectedCuisineCategory : null });
  }
  
  @Action(AppAction.UserPermissionsControl)
  userPermissionsControl(ctx: StateContext<AppStateModel>, { control }: AppAction.UserPermissionsControl) {
    if (control === 'get') {
      return this.userPermissionsService.userPermission$.pipe(
        map(query => query.map(value => value.data())),
        tap(userPermissions => ctx.patchState({ userPermissions }))
      );
    } else {
      return ctx.patchState({ cuisineCategories: null });
    }
  }
  
}
