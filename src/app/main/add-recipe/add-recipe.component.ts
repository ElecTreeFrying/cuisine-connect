import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './add-recipe.config';
import { RecipesFirestoreService } from '../common';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  standalone: true, imports, viewProviders
})
export class AddRecipeComponent implements OnInit {

  constructor(
    public recipes: RecipesFirestoreService
  ) { }

  ngOnInit(): void {
    this.recipes.collection$;
  }

}
