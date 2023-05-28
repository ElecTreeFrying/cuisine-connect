import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { AddCuisineService } from './add-cuisine.service';

export const imports = [
  NgIf,
  NgFor,
  AsyncPipe,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  TranslateModule
];

export const viewProviders = [
  AddCuisineService
];
