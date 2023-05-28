import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

import { ManageCuisinesService } from './manage-cuisines.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  RouterLink,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatRippleModule,
  TranslateModule,
];

export const viewProviders = [
  ManageCuisinesService
];
