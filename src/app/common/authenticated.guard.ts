import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';

export function authenticatedGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  // const isAuthenticated = inject(Store).selectSnapshot(AuthUserState.authenticated);

  // if (!isAuthenticated && inject(Router).navigated) {
  //   inject(Store).dispatch(new GlobalAction.SetNavigatingState(false));
  // }

  return true;
}
