import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule, NoopNgxsExecutionStrategy, getActionTypeFromInstance } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterDataResolved, RouterNavigation, RouterNavigated } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { KeyWithExplicitEngine, environment, keyEngine } from '../common';

const LOCAL_STORAGE: KeyWithExplicitEngine[] = [
  // keyEngine(GLOBAL_STATE_TOKEN, 'local'),
  // keyEngine(UID_STATE_TOKEN, 'local')
];

const SESSION_STORAGE: KeyWithExplicitEngine[] = [
];

const STATE_MODULES_IMPORT = [
];

const filterActionInNgxsLoggerPlugin = (action: any) =>
  getActionTypeFromInstance(action) !== RouterDataResolved.type &&
  getActionTypeFromInstance(action) !== RouterNavigation.type &&
  getActionTypeFromInstance(action) !== RouterNavigated.type;

export const useNgxsProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    NgxsModule.forRoot(undefined, {
      compatibility: {
        strictContentSecurityPolicy: true
      },
      selectorOptions: {
        suppressErrors: true,
        injectContainerState: false
      },
      executionStrategy: NoopNgxsExecutionStrategy
    }),
    NgxsStoragePluginModule.forRoot({
      key: [
        ...LOCAL_STORAGE,
        ...SESSION_STORAGE
      ]
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
      filter: filterActionInNgxsLoggerPlugin
    }),
    NgxsRouterPluginModule.forRoot(),
    // STATE_MODULES_IMPORT
  )
];
