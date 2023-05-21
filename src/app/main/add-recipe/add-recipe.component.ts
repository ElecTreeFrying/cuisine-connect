import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AppAction } from 'src/app/store';
import { imports, viewProviders } from './add-recipe.config';
import { AddRecipeService } from './add-recipe.service';
import { RecipesFirestoreService, SnackbarService } from '../common';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  standalone: true, imports, viewProviders
})
export class AddRecipeComponent implements OnInit {

  constructor(
    public router: Router,
    public store: Store,
    public service: AddRecipeService,
    private recipesFirestore: RecipesFirestoreService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  getFormField(value: string): any {
    return this.service.form.get(value);
  }

  get value(): any {
    return this.service.form.value;
  }

  async addRecipe(): Promise<void> {
    const formValue = this.service.formValue;
    if (!formValue) return;

    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});

    try {
      await this.recipesFirestore.addDoc(formValue);
      this.snackbar.dismiss();
      this.service.form.reset();
      this.router.navigateByUrl('/search-dish');
      this.store.dispatch(new AppAction.ClearRecipes);
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

}
