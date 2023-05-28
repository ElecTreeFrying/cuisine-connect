import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { HomepageService } from './homepage.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  TranslateModule
];

export const viewProviders = [
  HomepageService
];
