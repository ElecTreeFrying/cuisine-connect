import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable, filter } from 'rxjs';

import { AppState, Recipe } from 'src/app/store';

const cookingTime = /^(\d+)\s+(second|seconds|minute|minutes|hour|hours|day|days)$/;

@Injectable()
export class AddRecipeService {

  @Select(AppState.selectedRecipe) selectedRecipe$!: Observable<Recipe>;
  
  form: FormGroup;
  cookingSteps$$ = new BehaviorSubject<string[]>([]);
  ingredients$$ = new BehaviorSubject<string[]>([]);
  nutritionalValue$$ = new BehaviorSubject<string[]>([]);

  constructor(
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.form = fb.group({
      dishName: [ '', [ Validators.required ] ],
      imageUrl: [ 'https://shorturl.at/vDFIY', [ Validators.required ] ],
      cookingTime: [ '', [ Validators.required, Validators.pattern(cookingTime) ] ],
      cookingSteps: [ '', [ Validators.minLength(7) ] ],
      ingredients: [ '' , [ Validators.minLength(7) ]],
      calorieContent: [ '', [ Validators.required ] ],
      nutritionalValue: [ '' , [ Validators.minLength(7) ]],
    });
  }

  get hasCookingSteps(): boolean { return this.cookingSteps$$.value.length > 0; }
  get hasIngredients(): boolean { return this.ingredients$$.value.length > 0; }
  get hasNutritionalValue(): boolean { return this.nutritionalValue$$.value.length > 0 }

  get formValue(): any {
    const value = { ...this.form.value };
    value.photo = value.imageUrl;
    delete value.imageUrl;
    delete value.cookingSteps;
    delete value.ingredients;
    delete value.nutritionalValue;
    value.cookingSteps = this.cookingSteps$$.value;
    value.date = new Date().toISOString();
    value.ingredients = this.ingredients$$.value;
    value.nutritionalValue = this.nutritionalValue$$.value;
    if (
      this.form.invalid 
      || !value.cookingSteps.length 
      || !value.ingredients.length
      || !value.nutritionalValue.length
    ) return null;
    return value;
  }

  initSelectedRecipe(): void {
    this.selectedRecipe$.pipe(
      filter(Boolean),
    ).subscribe((recipe: Recipe) => {
      this.cookingSteps$$.next(recipe.cookingSteps);
      this.ingredients$$.next(recipe.ingredients);
      this.nutritionalValue$$.next(recipe.nutritionalValue);
      this.form.patchValue({
        dishName: recipe.dishName,
        imageUrl: recipe.photo,
        cookingTime: recipe.cookingTime,
        calorieContent: recipe.calorieContent,
      });
    });
  }
  
  updateCookingStep(index?: number): void {
    const value = this.form.value.cookingSteps;
    this.updateArrayField(value, this.cookingSteps$$, 'cookingSteps', index);
  }
  
  updateIngredients(index?: number): void {
    const value = this.form.value.ingredients;
    this.updateArrayField(value, this.ingredients$$, 'ingredients', index);
  }
  
  updateNutritionalValue(index?: number): void {
    const value = this.form.value.nutritionalValue;
    this.updateArrayField(value, this.nutritionalValue$$, 'nutritionalValue', index);
  }

  private updateArrayField(value: string, field: BehaviorSubject<string[]>, formField: string, index?: number): void {
    if (index === undefined) {
      if (value.length < 7) return;
      field.value.push(value);
    } else {
      field.value.splice(index, 1);
    }
    field.next(field.value);
    this.form.patchValue({ [formField]: '' });
  }

}
