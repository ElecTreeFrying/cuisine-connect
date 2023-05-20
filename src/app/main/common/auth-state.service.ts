import { Inject, Injectable } from '@angular/core';
import { Auth, User, authState } from '@angular/fire/auth';

import { APP_PROVIDER, AppProvider } from './app-provider';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    @Inject(APP_PROVIDER) appProvider: AppProvider,
    auth: Auth,
  ) {

    console.log('@@@ (app-provider)', appProvider);

    authState(auth).subscribe((response: User | null) => {
      console.log('\n\n\n\n@@@ (auth-state)', response, '\n\n\n\n\n');
    });
  }

}
