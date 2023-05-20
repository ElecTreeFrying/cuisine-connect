import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, authState } from '@angular/fire/auth';
import { Store } from '@ngxs/store';

import { AuthAction, AuthState } from 'src/app/store';
import { APP_PROVIDER, AppProvider } from './app-provider';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    @Inject(APP_PROVIDER) appProvider: AppProvider,
    router: Router,
    auth: Auth,
    store: Store,
  ) {

    console.log('@@@ (app-provider)', appProvider);

    authState(auth).subscribe((response: User | null) => {
      console.log('\n\n\n\n@@@ (auth-state)', response, '\n\n\n\n\n');

      if (!response && store.selectSnapshot(AuthState.authenticated)) {
        store.dispatch(new AuthAction.Logout);
        router.navigateByUrl('/auth')
      }
    });
  }

}
