import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { HomepageService } from './homepage.service';

export const imports = [
  RouterLink,
  MatCardModule,
  MatButtonModule,
  TranslateModule
];

export const viewProviders = [
  HomepageService
];
