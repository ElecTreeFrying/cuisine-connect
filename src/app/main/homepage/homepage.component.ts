import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './homepage.config';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true, imports, viewProviders
})
export class HomepageComponent implements OnInit {
  
  constructor(
    public service: HomepageService
  ) { }

  ngOnInit(): void {
    this.service.getCuisineCategories();
  }

}
