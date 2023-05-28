
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { AuthStateService, UserPermissionsService } from '../../common';

@Injectable()
export class RootService {

  constructor(
    private router: Router,
    private authState: AuthStateService,
    private userPermissionsService: UserPermissionsService
  ) { }

  adminStateListener(): void {
    this.authState.currentUser$.pipe(
      filter(Boolean),
      switchMap(currentUser => this.userPermissionsService.getUserPermission(currentUser)),
      tap((permission) => (permission.admin || this.router.navigateByUrl('/')))
    ).subscribe();
  }

}
