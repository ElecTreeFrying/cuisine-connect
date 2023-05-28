import { AsyncPipe, NgClass, NgIf, UpperCasePipe } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatRippleModule } from "@angular/material/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";

import { RootService } from './root.service';

export const imports = [
  NgIf,
  NgClass,
  AsyncPipe,
  UpperCasePipe,
  RouterOutlet,
  RouterLink,
  MatRippleModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  TranslateModule
];

export const viewProviders = [
  RootService
];
