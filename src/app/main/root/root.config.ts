import { AsyncPipe, NgIf } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { RootService } from './root.service';

export const imports = [
  NgIf,
  AsyncPipe,
  RouterOutlet,
  MatToolbarModule,
  MatButtonModule
];

export const viewProviders = [
  RootService
];
