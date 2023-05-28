import { CuisineCategory, Language, Recipe } from "./app.model";

type CollectionControl = 'get' | 'set' | 'reset';

export class UpdateLanguageState {
  static readonly type = '[App State] UpdateLanguageState';
  constructor(public language: Language) { }
}

export class UpdateAuthenticationState {
  static readonly type = '[App State] UpdateAuthenticationState';
  constructor(public state: { authenticated: boolean, admin?: boolean }) { }
}

export class SetFirebaseUser {
  static readonly type = '[App State] SetFirebaseUser';
  constructor(public user: any) { }
}

export class UpdateAdminPortalState {
  static readonly type = '[App State] UpdateAdminPortalState';
  constructor(public state: boolean) { }
}

export class RecipesControl {
  static readonly type = '[App State] RecipesControl';
  constructor(public control: CollectionControl) { }
}
export class SelectedRecipeControl {
  static readonly type = '[App State] SelectedRecipeControl';
  constructor(public control: CollectionControl, public selectedRecipe?: Recipe) { }
}

export class CuisineCategoryControl {
  static readonly type = '[App State] CuisineCategoryControl';
  constructor(public control: CollectionControl) { }
}

export class SelectedCuisineCategoryControl {
  static readonly type = '[App State] CuisineCategoryControl';
  constructor(public control: CollectionControl, public selectedCuisineCategory?: CuisineCategory) { }
}

export class UserPermissionsControl {
  static readonly type = '[App State] UserPermissionsControl';
  constructor(public control: CollectionControl) { }
}

