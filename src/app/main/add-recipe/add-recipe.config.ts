import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AddRecipeService } from './add-recipe.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];

export const viewProviders = [
  AddRecipeService
];
