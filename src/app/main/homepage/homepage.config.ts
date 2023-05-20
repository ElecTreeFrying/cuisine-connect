import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HomepageService } from './homepage.service';
import { MatButtonModule } from '@angular/material/button';

export const imports = [
  NgFor,
  MatCardModule,
  MatButtonModule
];

export const viewProviders = [
  HomepageService
];
