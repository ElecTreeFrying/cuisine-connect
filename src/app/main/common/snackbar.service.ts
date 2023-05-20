import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, TextOnlySnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

interface SnackbarConfig {
  message: string;
  duration?: number;
  delay?: number;
  class?: string[],
  horizontal?: MatSnackBarHorizontalPosition,
  vertical?: MatSnackBarVerticalPosition
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar: MatSnackBar
  ) { }
  
  open(option: SnackbarConfig, action?: string): MatSnackBarRef<TextOnlySnackBar> {
    if (option.delay) {
      return setTimeout(
        () => this.snackbar.open(option.message, action || 'Close', this.config(option)),
        option.delay
      ) as any;
    }
    return this.snackbar.open(option.message, action || 'Close', this.config(option));
  }

  dismiss(): void {
    this.snackbar.dismiss();
  }
  
  private config(option: SnackbarConfig): MatSnackBarConfig<SnackbarConfig> {
    const config = new MatSnackBarConfig<SnackbarConfig>();
    config.duration = option.duration || 4000;
    config.panelClass = option.class || 'fisendo-snackbar';
    config.verticalPosition = option.vertical || 'bottom';
    config.horizontalPosition = option.horizontal || 'center';
    return config;
  }

}
