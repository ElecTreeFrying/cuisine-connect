
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { AuthStateService, FirestoreService } from '../../common';

@Injectable()
export class RootService {

  constructor(
    private router: Router,
    private authState: AuthStateService,
    private firestore: FirestoreService
  ) { }

  adminStateListener(): void {
    this.authState.currentUser$.pipe(
      filter(Boolean),
      switchMap(currentUser => this.firestore.getUserPermission(currentUser)),
      tap((permission) => (permission.admin || this.router.navigateByUrl('/')))
    ).subscribe();
  }

}
