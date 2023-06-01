import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { FirebaseDatePipe } from './../../shared';

import { ManageUsersService } from './manage-users.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  TranslateModule,
  FirebaseDatePipe
];

export const viewProviders = [
  ManageUsersService
];
