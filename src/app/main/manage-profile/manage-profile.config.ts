import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { FirebaseDatePipe } from '../shared';

import { ManageProfileService } from './manage-profile.service';

export const imports = [
  NgIf,
  AsyncPipe,
  RouterLink,
  MatButtonModule,
  MatDividerModule,
  TranslateModule,
  FirebaseDatePipe
];

export const viewProviders = [
  ManageProfileService
];
