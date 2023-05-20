import { Component } from '@angular/core';

import { imports, viewProviders } from './root.config';
import { AuthStateService } from '../common/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  standalone: true, imports, viewProviders
})
export class RootComponent {

  constructor(
    authState: AuthStateService
  ) { }
  
}
