import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { AppAction } from 'src/app/store';
import { imports, viewProviders } from './root.config';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  standalone: true, imports, viewProviders
})
export class RootComponent implements OnInit {

  constructor(
    private store: Store,
    private service: RootService
  ) { }

  ngOnInit(): void {
    this.service.adminStateListener();
    this.store.dispatch(new AppAction.UpdateAdminPortalState(true));
  }
  
  ngOnDestroy(): void {
    this.store.dispatch(new AppAction.UpdateAdminPortalState(false));
  }

}
