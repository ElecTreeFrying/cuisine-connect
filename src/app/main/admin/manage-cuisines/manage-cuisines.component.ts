import { Component, OnInit } from '@angular/core';

import { imports, viewProviders } from './manage-cuisines.config';
import { ManageCuisinesService } from './manage-cuisines.service';
import { CuisineCategoriesService, CuisineCategory, SnackbarService } from '../../common';

@Component({
  selector: 'app-manage-cuisines',
  templateUrl: './manage-cuisines.component.html',
  styleUrls: ['./manage-cuisines.component.scss'],
  standalone: true, imports, viewProviders
})
export class ManageCuisinesComponent implements OnInit {
  
  constructor(
    public service: ManageCuisinesService,
    public cuisineCategoriesService: CuisineCategoriesService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.service.getCuisineCategories();
  }

  async removeCuisineCategories(cuisineCategory: CuisineCategory): Promise<void> {

    const condition = confirm('Are you sure you want to delete');

    if (!condition) return;
    
    this.snackbar.open({ message: 'Please wait.' , duration: Infinity});
    try {
      await this.cuisineCategoriesService.removeCuisineCategory(cuisineCategory.uid!);
      this.snackbar.dismiss();
    } catch (error) {
      console.error(error);
      this.snackbar.open({ message: 'Something went wrong. Please try again.' , duration: 5000});
    }
  }

}
