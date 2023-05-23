import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { Select, Store } from '@ngxs/store';
import { Observable, filter, first, map, switchMap, take, tap } from 'rxjs';

import { AppAction, AppState } from '../../store';
import { AuthStateService, FirestoreService } from '../common';

@Injectable()
export class RootService {

  @Select(AppState.authenticated) authenticated$!: Observable<boolean>;

  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store,
    public authState: AuthStateService,
    private firestore: FirestoreService
  ) { }

  initializeUserPermissions(): void {
    this.userPermissionHandler();
  }

  private userPermissionHandler(): void {
    this.authState.currentUser$.pipe(
      filter(Boolean),
      switchMap((user) => this.firestore.getUserPermission(user.uid)),
      tap((permission) => this.dispatch({ authenticated: true, admin: permission.admin })),
    ).subscribe();
  }

  logout(): void {
    signOut(this.auth);
    this.dispatch({ authenticated: false });
    this.router.navigateByUrl('/auth');
  }
  
  private dispatch({ authenticated, admin }: { authenticated: boolean, admin?: boolean }) {
    this.store.dispatch(new AppAction.UpdateAuthenticationState({
      authenticated, admin
    }));
  }

}
