import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, QueryDocumentSnapshot, addDoc, collection, collectionSnapshots, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { CuisineCategory } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class CuisineCategoriesService {

  private get cuisineCategoriesCollectionRef(): CollectionReference<CuisineCategory> {
    return collection(getFirestore(), 'cuisine-categories') as CollectionReference<CuisineCategory>;
  }

  addCuisineCategory(data: CuisineCategory): Promise<DocumentReference<CuisineCategory>> {
    return addDoc<CuisineCategory>(this.cuisineCategoriesCollectionRef, data);
  }

  get cuisineCategories$(): Observable<QueryDocumentSnapshot<CuisineCategory>[]> {
    return collectionSnapshots<CuisineCategory>(this.cuisineCategoriesCollectionRef);
  }

}

export { CuisineCategory } from 'src/app/store';
