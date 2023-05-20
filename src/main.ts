import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { RootComponent } from './app/main';

import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(RootComponent, appConfig)
  .catch((err) => console.error('@@@ (bootstrapApplication)', err));
  