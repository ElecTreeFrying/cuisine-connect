import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { 
  provideAuth, initializeAuth, getAuth, 
  browserLocalPersistence, browserPopupRedirectResolver
} from '@angular/fire/auth';

import { environment } from '../../environments/environment';

export const useFirebaseProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore(getApp())),
    provideStorage(() => getStorage(getApp())),
    provideAuth(() => (typeof document === 'undefined' 
      ? getAuth(getApp())
      : initializeAuth(getApp(), {
          persistence: browserLocalPersistence,
          popupRedirectResolver: browserPopupRedirectResolver
        })
    ))
  )
];
