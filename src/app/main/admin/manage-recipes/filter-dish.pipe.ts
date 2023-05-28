import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Recipe } from '../../common';

@Pipe({
  name: 'filterDish',
  standalone: true
})
export class FilterDishPipe implements PipeTransform {

  transform(recipes$: Observable<Recipe[] | null>, search: string): Observable<Recipe[]> {
    return recipes$.pipe(
      map((recipes: Recipe[] | null) => {
        if (!recipes) return [] as Recipe[];
        if (!search) return recipes;
        return recipes.filter((recipe: Recipe) => {
          return recipe.dishName.toLowerCase().includes(search.toLowerCase())
          || recipe.ingredients.map(e => e.toLowerCase()).includes(search.toLowerCase())
        });
      })
    )
  }

}
