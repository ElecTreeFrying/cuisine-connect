import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, QueryDocumentSnapshot, addDoc, collection, collectionSnapshots, deleteDoc, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Recipe } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private get recipeCollectionRef(): CollectionReference<Recipe> {
    return collection(getFirestore(), 'recipes') as CollectionReference<Recipe>;
  }

  get recipes$(): Observable<QueryDocumentSnapshot<Recipe>[]> {
    return collectionSnapshots<Recipe>(this.recipeCollectionRef);
  }

  addRecipe(data: Recipe): Promise<DocumentReference<Recipe>> {
    return addDoc<Recipe>(this.recipeCollectionRef, data);
  }

  async updateRecipe(data: Recipe): Promise<void> {
    if (!data?.uid) {
      throw Error('No uid');
    }
    const ref = doc(this.recipeCollectionRef, data.uid);
    delete data.uid;
    await updateDoc(ref, data);
  }

  async removeRecipe(uid: string): Promise<void> {
    const ref = doc(this.recipeCollectionRef, uid);
    await deleteDoc(ref);
  }

}

export { Recipe } from 'src/app/store';
