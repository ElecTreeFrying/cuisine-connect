import { AsyncPipe, NgIf } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { RootService } from './root.service';

export const imports = [
  NgIf,
  AsyncPipe,
  RouterOutlet,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule
];

export const viewProviders = [
  RootService
];
