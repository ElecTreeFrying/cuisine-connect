import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ManageProfileService } from './manage-profile.service';

export const imports = [
  NgIf,
  AsyncPipe,
  RouterLink,
  MatButtonModule,
  MatDividerModule
];

export const viewProviders = [
  ManageProfileService
];
