import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

import { FilterDishPipe } from './filter-dish.pipe';

import { ManageRecipesService } from './manage-recipes.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  FormsModule,
  RouterLink,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  TranslateModule,
  FilterDishPipe
];

export const viewProviders = [
  ManageRecipesService
];
