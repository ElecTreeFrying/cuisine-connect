import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { imports, viewProviders } from './add-cuisine.config';
import { AddCuisineService } from './add-cuisine.service';
import { CuisineCategoriesService, SnackbarService } from 'src/app/main/common';
import { AppAction, AppState } from 'src/app/store';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.scss'],
  standalone: true, imports, viewProviders
})
export class AddCuisineComponent implements OnInit, OnDestroy {

  update!: boolean;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public store: Store,
    public cuisineCategoriesService: CuisineCategoriesService,
    public service: AddCuisineService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.service.initSelectedCuisineCategory();
    this.update = this.route.snapshot.data['update'];
  }

  ngOnDestroy(): void {
    this.store.dispatch(new AppAction.SelectedCuisineCategoryControl('reset'));
  }

  get value(): any {
    return this.service.form.value;
  }

  async addCuisine(): Promise<void> {
    const formValue = this.service.formValue;
    if (!formValue) return;

    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});

    try {
      await this.cuisineCategoriesService.addCuisineCategory(formValue);
      this.snackbar.dismiss();
      this.service.form.reset();
      this.router.navigateByUrl('/admin/manage-cuisines');
      this.store.dispatch(new AppAction.RecipesControl('reset'));
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

  async updateCuisine(): Promise<void> {
    const formValue = this.service.formValue;
    formValue['uid'] = this.store.selectSnapshot(AppState.selectedCuisineCategory)?.uid;
    if (!formValue) return;

    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});

    try {
      await this.cuisineCategoriesService.updateCuisineCategory(formValue);
      this.snackbar.dismiss();
      this.service.form.reset();
      this.router.navigateByUrl('/admin/manage-cuisines');
      this.store.dispatch(new AppAction.SelectedRecipeControl('reset'));
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }
  
}
