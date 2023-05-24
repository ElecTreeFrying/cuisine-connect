import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

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
export class RecipeComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Recipe,
    private service: RecipeService
  ) { }
  
  ngOnInit(): void {
    this.service.initializeQueryParams(this.data)
  }

  ngOnDestroy(): void {
    this.service.removeQueryParams();
  }

}
