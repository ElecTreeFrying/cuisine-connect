import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const useMaterialProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    MatSnackBarModule,
    MatDialogModule
  )
];
