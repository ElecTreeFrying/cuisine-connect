import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import * as Provider from './providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    Provider.useRouteProviders,
    Provider.useTokenProviders,
    Provider.useMaterialProviders,
    Provider.useFirebaseProviders,
    Provider.useTranslateProviders,
    Provider.useNgxsProviders
  ]
};
