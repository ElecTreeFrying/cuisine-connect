import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, UserMetadata, authState } from '@angular/fire/auth';
import { Store } from '@ngxs/store';

import { AppAction, AppState } from 'src/app/store';
import { Observable, startWith } from 'rxjs';

type CurrentUser = User & UserMetadata;

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    private auth: Auth,
    private store: Store,
    router: Router
  ) {
    authState(auth).subscribe((response: CurrentUser | null) => {
      console.log('\n\n\n\n@@@ (auth-state)', response, '\n\n\n\n\n');

      store.selectSnapshot(AppState.authenticated)
      && store.dispatch(new AppAction.SetFirebaseUser(response));

      if (!response && store.selectSnapshot(AppState.authenticated)) {
        store.dispatch(new AppAction.UpdateAuthenticationState({
          authenticated: false
        }));
        router.navigateByUrl('/auth')
      }
    });
  }

  get currentUser(): CurrentUser {
    return this.store.selectSnapshot(AppState.user) as CurrentUser;
  }

  get currentUser$(): Observable<CurrentUser | null> {
    return this.store.select(AppState.user);
  }

}
