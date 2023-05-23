import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, take } from 'rxjs';

import { AppState } from '../store';

export function adminGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

  const admin = inject(Store).select(AppState.admin);

  admin.pipe(take(1)).subscribe((admin) => {
    !admin && inject(Router).navigateByUrl('/auth');
  });

  return admin;
}
