import { Component, OnInit } from '@angular/core';

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
    private service: RootService
  ) { }

  ngOnInit(): void {
    this.service.adminStateListener();
  }

}
