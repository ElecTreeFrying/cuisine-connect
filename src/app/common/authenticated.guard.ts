import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthState } from '../store';

export function authenticatedGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  const authenticated = inject(Store).selectSnapshot(AuthState.authenticated);

  !authenticated && inject(Router).navigateByUrl('/auth');

  return authenticated;
}
