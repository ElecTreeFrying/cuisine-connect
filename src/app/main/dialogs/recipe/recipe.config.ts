import { NgFor } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecipeService } from './recipe.service';

export const imports = [
  NgFor,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
];

export const viewProviders = [
  RecipeService
];
