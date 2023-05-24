import { Component } from '@angular/core';

import { imports, viewProviders } from './manage-users.config';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageUsersComponent {

}
