import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, QueryDocumentSnapshot, addDoc, collection, collectionSnapshots, getFirestore, query, where  } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { Recipe, CuisineCategory, UserPermissions } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private get userPermissionsCollectionRef(): CollectionReference<UserPermissions> {
    return collection(getFirestore(), 'user-permissions') as CollectionReference<UserPermissions>;
  }

  getUserPermission(uid: string): Observable<UserPermissions> {
    return collectionSnapshots<UserPermissions>(
      query(this.userPermissionsCollectionRef, where('uid', '==', uid))
    ).pipe(
      map((permissions: QueryDocumentSnapshot<UserPermissions>[]) => permissions[0].data())
    );
  }

  private get recipeCollectionRef(): CollectionReference<Recipe> {
    return collection(getFirestore(), 'recipes') as CollectionReference<Recipe>;
  }

  addRecipe(data: Recipe): Promise<DocumentReference<Recipe>> {
    return addDoc<Recipe>(this.recipeCollectionRef, data);
  }

  get recipes$(): Observable<QueryDocumentSnapshot<Recipe>[]> {
    return collectionSnapshots<Recipe>(this.recipeCollectionRef);
  }

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

export { Recipe, CuisineCategory } from 'src/app/store';
