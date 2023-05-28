import { Component } from '@angular/core';

import { imports, viewProviders } from './add-cuisine.config';
import { AddCuisineService } from './add-cuisine.service';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.scss'],
  standalone: true, imports, viewProviders
})
export class AddCuisineComponent {

  constructor(
    public service: AddCuisineService
  ) { }
  
}
