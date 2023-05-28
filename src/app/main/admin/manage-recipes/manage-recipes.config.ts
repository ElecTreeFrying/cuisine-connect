import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { FilterDishPipe } from './filter-dish.pipe';

import { ManageRecipesService } from './manage-recipes.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  FormsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FilterDishPipe
];

export const viewProviders = [
  ManageRecipesService
];
