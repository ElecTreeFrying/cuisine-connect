import { Component } from '@angular/core';

import { imports, viewProviders } from './manage-profile.config';
import { ManageProfileService } from './manage-profile.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageProfileComponent {

  constructor(
    public service: ManageProfileService
  ) { }
  
}
