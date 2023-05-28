import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, QueryDocumentSnapshot, addDoc, collection, collectionSnapshots, deleteDoc, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { CuisineCategory } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class CuisineCategoriesService {

  private get cuisineCategoriesCollectionRef(): CollectionReference<CuisineCategory> {
    return collection(getFirestore(), 'cuisine-categories') as CollectionReference<CuisineCategory>;
  }

  get cuisineCategories$(): Observable<QueryDocumentSnapshot<CuisineCategory>[]> {
    return collectionSnapshots<CuisineCategory>(this.cuisineCategoriesCollectionRef);
  }

  addCuisineCategory(data: CuisineCategory): Promise<DocumentReference<CuisineCategory>> {
    return addDoc<CuisineCategory>(this.cuisineCategoriesCollectionRef, data);
  }

  async updateCuisineCategory(data: CuisineCategory): Promise<void> {
    if (!data?.uid) {
      throw Error('No uid');
    }
    const ref = doc(this.cuisineCategoriesCollectionRef, data.uid);
    delete data.uid;
    await updateDoc(ref, data);
  }

  async removeCuisineCategory(uid: string): Promise<void> {
    const ref = doc(this.cuisineCategoriesCollectionRef, uid);
    await deleteDoc(ref);
  }

}

export { CuisineCategory } from 'src/app/store';
