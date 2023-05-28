import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AppAction, AppState } from 'src/app/store';
import { imports, viewProviders } from './add-recipe.config';
import { AddRecipeService } from './add-recipe.service';
import { RecipesService, SnackbarService } from '../common';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  standalone: true, imports, viewProviders
})
export class AddRecipeComponent implements OnInit, OnDestroy {

  update!: boolean;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public store: Store,
    public service: AddRecipeService,
    private recipesServices: RecipesService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.service.initSelectedRecipe();
    this.update = this.route.snapshot.data['update'];
  }

  ngOnDestroy(): void {
    this.store.dispatch(new AppAction.SelectedRecipeControl('reset'));
  }

  get value(): any {
    return this.service.form.value;
  }

  async addRecipe(): Promise<void> {
    const formValue = this.service.formValue;
    if (!formValue) return;

    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});

    try {
      await this.recipesServices.addRecipe(formValue);
      this.snackbar.dismiss();
      this.service.form.reset();
      this.store.selectSnapshot(AppState.admin)
        ? this.router.navigateByUrl('/admin/manage-recipes')
        : this.router.navigateByUrl('/search-dish');
      this.store.dispatch(new AppAction.RecipesControl('reset'));
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

  async updateRecipe(): Promise<void> {
    const formValue = this.service.formValue;
    formValue['uid'] = this.store.selectSnapshot(AppState.selectedRecipe)?.uid;
    if (!formValue) return;

    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});

    try {
      await this.recipesServices.updateRecipe(formValue);
      this.snackbar.dismiss();
      this.service.form.reset();
      this.router.navigateByUrl('/admin/manage-recipes');
      this.store.dispatch(new AppAction.SelectedRecipeControl('reset'));
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

}
