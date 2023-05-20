import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Recipe {
  dishName: string;
  ingredients: string[];
  cookingSteps: string[];
  cookingTime: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesFirestoreService {

  constructor() { }

  private get collection(): CollectionReference<DocumentData> {
    return collection(getFirestore(), 'recipes');
  }

  addDoc(data: Recipe): Promise<DocumentReference<DocumentData>> {
    return addDoc(this.collection, data as Recipe);
  }

  get collection$(): Observable<Recipe[]> {
    return collectionData(this.collection) as Observable<Recipe[]>;
  }

}
