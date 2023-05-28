import { NgStyle, NgFor, AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { FilterDishPipe } from './filter-dish.pipe';

import { SearchDishService } from './search-dish.service';

export const imports = [
  NgIf,
  NgFor,
  NgStyle,
  AsyncPipe,
  FormsModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  TranslateModule,
  FilterDishPipe
];

export const viewProviders = [
  SearchDishService
];
