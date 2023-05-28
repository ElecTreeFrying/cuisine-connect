import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './manage-cuisines.config';
import { ManageCuisinesService } from './manage-cuisines.service';

@Component({
  selector: 'app-manage-cuisines',
  templateUrl: './manage-cuisines.component.html',
  styleUrls: ['./manage-cuisines.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageCuisinesComponent implements OnInit {
  
  constructor(
    public service: ManageCuisinesService
  ) { }

  ngOnInit(): void {
    this.service.getCuisineCategories();
  }

}
