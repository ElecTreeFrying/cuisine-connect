import { Pipe, PipeTransform } from '@angular/core';
import { RecipeComment } from 'src/app/store';

@Pipe({
  name: 'orderByTimestamp',
  standalone: true
})
export class OrderByTimestampPipe implements PipeTransform {

  transform(recipeComments: RecipeComment[]): RecipeComment[] {
    return recipeComments.sort((a, b) => b.timestamp - a.timestamp);
  }

}
