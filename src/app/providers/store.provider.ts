import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { NgxsModule, NoopNgxsExecutionStrategy, getActionTypeFromInstance } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterDataResolved, RouterNavigation, RouterNavigated } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { APP_STATE_TOKEN, AppState } from '../store';
import { KeyWithExplicitEngine, keyEngine } from './state-key-engine';
import { environment } from '../../environments/environment';

const LOCAL_STORAGE: KeyWithExplicitEngine[] = [
  keyEngine(APP_STATE_TOKEN, 'local'),
];

const SESSION_STORAGE: KeyWithExplicitEngine[] = [
];

const STATE = [
  AppState
];

const filterActionInNgxsLoggerPlugin = (action: any) =>
  getActionTypeFromInstance(action) !== RouterDataResolved.type &&
  getActionTypeFromInstance(action) !== RouterNavigation.type &&
  getActionTypeFromInstance(action) !== RouterNavigated.type;

export const useNgxsProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    NgxsModule.forRoot(STATE, {
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
    NgxsRouterPluginModule.forRoot()
  )
];
