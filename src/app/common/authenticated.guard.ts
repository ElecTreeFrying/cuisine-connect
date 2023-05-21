import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';

import { AppState } from '../store';

export function authenticatedGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  const authenticated = inject(Store).selectSnapshot(AppState.authenticated);

  !authenticated && inject(Router).navigateByUrl('/auth');

  return authenticated;
}
