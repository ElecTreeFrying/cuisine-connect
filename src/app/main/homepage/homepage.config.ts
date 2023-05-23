import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HomepageService } from './homepage.service';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

export const viewProviders = [
  HomepageService
];
