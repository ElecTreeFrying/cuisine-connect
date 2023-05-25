import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, QueryDocumentSnapshot, addDoc, collection, collectionSnapshots, getFirestore, query, where, updateDoc, doc, getDocs } from '@angular/fire/firestore';
import { Observable, filter, map, tap } from 'rxjs';

import { Recipe, CuisineCategory, UserPermissions } from 'src/app/store';
import { CurrentUser } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private get userPermissionsCollectionRef(): CollectionReference<UserPermissions> {
    return collection(getFirestore(), 'user-permissions') as CollectionReference<UserPermissions>;
  }

  addUserPermission(data: UserPermissions): Promise<DocumentReference<UserPermissions>> {
    return addDoc<UserPermissions>(this.userPermissionsCollectionRef, data);
  }

  get userPermission$(): Observable<QueryDocumentSnapshot<UserPermissions>[]> {
    return collectionSnapshots<UserPermissions>(this.userPermissionsCollectionRef);
  }

  async updateUserPermissionByUid(uid: string, data: Partial<UserPermissions>): Promise<void> {
    const userPermissionsQuery = query(this.userPermissionsCollectionRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(userPermissionsQuery);
    querySnapshot.forEach(async (docSnapshot) => {
      const docRef = doc(getFirestore(), 'user-permissions', docSnapshot.id);
      await updateDoc(docRef, data);
    });
  }

  getUserPermission(currentUser: CurrentUser): Observable<UserPermissions> {
    return collectionSnapshots<UserPermissions>(
      query(this.userPermissionsCollectionRef, where('uid', '==', currentUser.uid))
    ).pipe(
      tap((permissions: QueryDocumentSnapshot<UserPermissions>[]) => {
        if (permissions.length) return;
        this.addUserPermission({
          admin: false, requestTimestamp: null,
          uid: currentUser.uid,
          creationTime: currentUser.metadata.creationTime || '',
          lastSignInTime: currentUser.metadata.lastSignInTime || '',
          user: currentUser.providerData[0]
        });
      }),
      filter(e => !!e.length),
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
