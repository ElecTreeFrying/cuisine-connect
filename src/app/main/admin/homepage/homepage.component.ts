import { Component } from '@angular/core';

import { imports, viewProviders } from './homepage.config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true, imports, viewProviders
})
export class HomepageComponent {

}
