import { AsyncPipe, NgClass, NgIf } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { RootService } from './root.service';

export const imports = [
  NgIf,
  NgClass,
  AsyncPipe,
  RouterOutlet,
  RouterLink,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
];

export const viewProviders = [
  RootService
];
