import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { imports, viewProviders } from './manage-recipes.config';
import { ManageRecipesService } from './manage-recipes.service';
import { RecipesService, SnackbarService } from '../../common';
import { Recipe } from 'src/app/store';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageRecipesComponent implements OnInit {

  constructor(
    public store: Store,
    private recipesServices: RecipesService,
    public service: ManageRecipesService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.service.getRecipes();
  }

  async removeRecipe(recipe: Recipe): Promise<void> {

    const condition = confirm('Are you sure you want to delete');

    if (!condition) return;
    
    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});
    try {
      await this.recipesServices.removeRecipe(recipe.uid!);
      this.snackbar.dismiss();
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

}
