export class UpdateAuthenticationState {
  static readonly type = '[App State] UpdateAuthenticationState';
  constructor(public authenticated: boolean, public admin?: boolean) { }
}

export class GetRecipes {
  static readonly type = '[App State] GetRecipes';
  constructor() { }
}

export class ClearRecipes {
  static readonly type = '[App State] ClearRecipes';
  constructor() { }
}
