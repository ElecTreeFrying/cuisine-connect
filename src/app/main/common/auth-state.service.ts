import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, UserMetadata, authState } from '@angular/fire/auth';
import { Store } from '@ngxs/store';

import { AppAction, AppState } from 'src/app/store';
import { APP_PROVIDER, AppProvider } from './app-provider';
import { Observable, startWith } from 'rxjs';

type CurrentUser = User & UserMetadata;

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    @Inject(APP_PROVIDER) appProvider: AppProvider,
    private auth: Auth,
    router: Router,
    store: Store,
  ) {
    authState(auth).subscribe((response: CurrentUser | null) => {
      console.log('\n\n\n\n@@@ (auth-state)', response, '\n\n\n\n\n');

      if (!response && store.selectSnapshot(AppState.authenticated)) {
        store.dispatch(new AppAction.UpdateAuthenticationState({
          authenticated: false
        }));
        router.navigateByUrl('/auth')
      }
    });
  }

  get currentUser(): CurrentUser {
    return this.auth.currentUser as CurrentUser;
  }

  get currentUser$(): Observable<CurrentUser | null> {
    return authState(this.auth).pipe(
      startWith(this.auth.currentUser)
    );
  }

}
