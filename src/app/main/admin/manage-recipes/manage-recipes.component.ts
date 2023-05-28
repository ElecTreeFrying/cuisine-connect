import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './manage-recipes.config';
import { ManageRecipesService } from './manage-recipes.service';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageRecipesComponent implements OnInit {

  constructor(
    public service: ManageRecipesService
  ) { }

  ngOnInit(): void {
    this.service.getRecipes();
  }

}
