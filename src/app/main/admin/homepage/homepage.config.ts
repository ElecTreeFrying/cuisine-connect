import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HomepageService } from './homepage.service';

export const imports = [
  RouterLink,
  MatCardModule,
  MatButtonModule
];

export const viewProviders = [
  HomepageService
];
