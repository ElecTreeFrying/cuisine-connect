import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ManageCuisinesService } from './manage-cuisines.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

export const viewProviders = [
  ManageCuisinesService
];
