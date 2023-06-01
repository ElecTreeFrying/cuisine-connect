import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { LocalTimePipe } from '../../shared';
import { OrderByTimestampPipe } from './order-by-timestamp.pipe';

import { RecipeService } from './recipe.service';

export const imports = [
  NgIf,
  NgFor,
  NgClass,
  AsyncPipe,
  FormsModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  TranslateModule,
  LocalTimePipe,
  OrderByTimestampPipe
];

export const viewProviders = [
  RecipeService
];
