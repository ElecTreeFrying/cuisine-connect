import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Recipe } from '../common';

@Pipe({
  name: 'filterDish',
  standalone: true
})
export class FilterDishPipe implements PipeTransform {

  transform(recipes$: Observable<Recipe[] | null>, dishName: string): Observable<Recipe[]> {
    return recipes$.pipe(
      map((recipes: Recipe[] | null) => {
        if (!recipes) return [] as Recipe[];
        if (!dishName) return recipes;
        return recipes.filter(e => e.dishName.toLowerCase().includes(dishName.toLowerCase()));
      })
    )
  }

}
