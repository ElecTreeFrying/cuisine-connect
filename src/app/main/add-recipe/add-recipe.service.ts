import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const cookingTime = /^(\d+)\s+(second|seconds|minute|minutes|hour|hours|day|days)$/;

@Injectable()
export class AddRecipeService {
  
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

  get hasCookingSteps(): boolean  {
    return this.cookingSteps$$.value.length > 0;
  }

  get hasIngredients(): boolean  {
    return this.ingredients$$.value.length > 0;
  }

  get hasNutritionalValue(): boolean  {
    return this.nutritionalValue$$.value.length > 0;
  }

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

  addCookingStep(): any {
    const value = this.form.value.cookingSteps;
    if (value.length < 7) return;
    this.cookingSteps$$.value.push(value);
    this.cookingSteps$$.next(this.cookingSteps$$.value);
    this.form.patchValue({ cookingSteps: '' });
  }
  
  addIngredients(): any {
    const value = this.form.value.ingredients;
    if (value.length < 7) return;
    this.ingredients$$.value.push(value);
    this.ingredients$$.next(this.ingredients$$.value);
    this.form.patchValue({ ingredients: '' });
  }
  
  addNutritionalValue(): any {
    const value = this.form.value.nutritionalValue;
    if (value.length < 7) return;
    this.nutritionalValue$$.value.push(value);
    this.nutritionalValue$$.next(this.nutritionalValue$$.value);
    this.form.patchValue({ nutritionalValue: '' });
  }

}
