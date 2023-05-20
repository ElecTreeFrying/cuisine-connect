import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { 
  provideAuth, initializeAuth, getAuth, 
  browserLocalPersistence, browserPopupRedirectResolver
} from '@angular/fire/auth';

import { environment } from '../common';

export const useFirebaseProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => (typeof document === 'undefined' 
      ? getAuth(getApp())
      : initializeAuth(getApp(), {
          persistence: browserLocalPersistence,
          popupRedirectResolver: browserPopupRedirectResolver
        })
    ))
  )
];
