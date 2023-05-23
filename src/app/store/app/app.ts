type CollectionControl = 'get' | 'reset';

export class UpdateAuthenticationState {
  static readonly type = '[App State] UpdateAuthenticationState';
  constructor(public state: { authenticated: boolean, admin?: boolean }) { }
}

export class RecipesControl {
  static readonly type = '[App State] RecipesControl';
  constructor(public control: CollectionControl) { }
}

export class CuisineCategoryControl {
  static readonly type = '[App State] CuisineCategoryControl';
  constructor(public control: CollectionControl) { }
}
