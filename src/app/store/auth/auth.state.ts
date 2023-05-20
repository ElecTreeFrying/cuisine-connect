import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

import { AuthStateModel, AuthAction } from '.';

export const defaults: AuthStateModel = {
  authenticated: false
};

export const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: defaults
})

@Injectable()
export class AuthState {

  @Selector()
  static authenticated(state: AuthStateModel): boolean {
    return state.authenticated;
  }

  @Action(AuthAction.Login)
  login(ctx: StateContext<AuthStateModel>): void {
    ctx.patchState({ authenticated: true });
  }
  
  @Action(AuthAction.Logout)
  logout(ctx: StateContext<AuthStateModel>): void {
    ctx.patchState({ authenticated: false });
  }
  
}
