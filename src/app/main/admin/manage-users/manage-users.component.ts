import { Component, OnInit } from '@angular/core';

import { ManageUsersService } from './manage-users.service';
import { imports, viewProviders } from './manage-users.config';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageUsersComponent implements OnInit {

  constructor(
    public service: ManageUsersService
  ) { }

  ngOnInit(): void {
    this.service.getUserPermissions();
  }

}
