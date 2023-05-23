import { APP_ID, Provider, inject } from "@angular/core";

import { APP_PROVIDER, appId } from "../main";
import { environment } from '../../environments/environment';

export const useTokenProviders: Provider[] = [
  {
    provide: APP_ID,
    useValue: appId
  },
  {
    provide: APP_PROVIDER,
    useFactory: () => ({
      environment,
      appId: inject(APP_ID)
    })
  }
];
