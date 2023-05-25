import { Component, Inject, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { imports, viewProviders } from './recipe.config';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../../common';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true, imports, viewProviders
})
export class RecipeComponent implements OnDestroy, AfterViewInit {

  @ViewChild(MatTabGroup) matTabGroup!: MatTabGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Recipe,
    private service: RecipeService
  ) { }

  ngOnDestroy(): void {
    this.service.updateQueryParams({ cuisine: null, tab: null });
  }

  ngAfterViewInit(): void {
    this.matTabGroup.selectedIndex = this.service.tabIndex;
    this.service.setTabQueryParams(this.service.tabIndex!, this.data);
    this.matTabGroup.selectedIndexChange.subscribe(
      (index: number) => this.service.setTabQueryParams(index, this.data)
    );
  }

}
