import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, collectionSnapshots, getFirestore } from '@angular/fire/firestore';
import { Recipe } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class RecipesFirestoreService {

  private get collection(): CollectionReference<DocumentData> {
    return collection(getFirestore(), 'recipes');
  }

  addDoc(data: Recipe): Promise<DocumentReference<DocumentData>> {
    return addDoc(this.collection, data as Recipe);
  }

  get collection$() {
    return collectionSnapshots(this.collection);
  }

}

export { Recipe } from 'src/app/store';
