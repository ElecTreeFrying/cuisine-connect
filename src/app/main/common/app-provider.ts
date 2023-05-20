import { InjectionToken } from "@angular/core";

export const appId = 'cuisine-connect';

export interface AppProvider {
  environment: any;
  appId: string;
}

export const APP_PROVIDER = new InjectionToken<AppProvider>('app-provider');
