import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable, filter } from 'rxjs';

import { AppState, CuisineCategory } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class AddCuisineService {

  @Select(AppState.selectedCuisineCategory) selectedCuisineCategory$!: Observable<CuisineCategory>;

  form: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.form = fb.group({
      title: [ '', [ Validators.required ] ],
      details: [ '', [ Validators.required ] ],
      photo: [ 'https://shorturl.at/vDFIY', [ Validators.required ] ]
    });
  }

  get formValue(): any {
    const value = { ...this.form.value };
    value.category = 'Cuisine Category';
    value.date = new Date().toISOString();
    if (this.form.invalid) return null;
    return value;
  }

  initSelectedCuisineCategory(): void {
    this.selectedCuisineCategory$.pipe(
      filter(Boolean),
    ).subscribe((selectedCuisineCategory: CuisineCategory) => {
      this.form.patchValue({
        title: selectedCuisineCategory.title,
        details: selectedCuisineCategory.details,
        photo: selectedCuisineCategory.photo,
      });
    });
  }

}
