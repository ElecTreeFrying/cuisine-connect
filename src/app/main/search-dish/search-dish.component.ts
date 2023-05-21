import { Component, OnInit } from '@angular/core';

import { SearchDishService } from './search-dish.service';
import { imports, viewProviders } from './search-dish.config';

@Component({
  selector: 'app-search-dish',
  templateUrl: './search-dish.component.html',
  styleUrls: ['./search-dish.component.scss'],
  standalone: true, imports, viewProviders
})
export class SearchDishComponent implements OnInit {

  constructor(
    public service: SearchDishService
  ) { }

  ngOnInit(): void {
    this.service.getRecipes();
  }

}
