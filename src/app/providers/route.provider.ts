import { EnvironmentProviders, Provider, inject } from '@angular/core';
import {
  provideRouter, withDebugTracing, withComponentInputBinding,
  withEnabledBlockingInitialNavigation, withInMemoryScrolling,
  withRouterConfig, withNavigationErrorHandler, NavigationError
} from '@angular/router';

import { APP_ROUTES } from '../app.routes';


export const useRouteProviders: EnvironmentProviders[] | Provider = [
  provideRouter(
    APP_ROUTES,
    // withDebugTracing(),
    withComponentInputBinding(),
    withEnabledBlockingInitialNavigation(),
    withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top'
    }),
    withRouterConfig({
      canceledNavigationResolution: 'computed',
      onSameUrlNavigation: 'ignore',
      urlUpdateStrategy: 'deferred',
      paramsInheritanceStrategy: 'always'
    }),
    withNavigationErrorHandler(
      (e: NavigationError) => inject(() => {}).trackError(e)
    ),
  )
];
