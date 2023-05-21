import { Component, Inject } from '@angular/core';

import { RecipeService } from './recipe.service';
import { imports, viewProviders } from './recipe.config';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../../common';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true, imports, viewProviders
})
export class RecipeComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Recipe,
    public service: RecipeService
  ) { }

}
