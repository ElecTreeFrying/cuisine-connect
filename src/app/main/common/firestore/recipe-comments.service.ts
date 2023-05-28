import { Injectable } from '@angular/core';
import { addDoc, collection, collectionSnapshots, getFirestore, CollectionReference, DocumentReference, query, where, serverTimestamp, orderBy } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import * as _ from 'lodash';

import { RecipeComment } from 'src/app/store';
import { CurrentUser } from '../auth-state.service';

interface AddRequest { recipe: string; comment: string; }
interface GetRequest { user: string; recipe: string; }

@Injectable({
  providedIn: 'root'
})
export class RecipeCommentsService {

  private get recipeCommentsCollectionRef(): CollectionReference<RecipeComment> {
    return collection(getFirestore(), 'recipe-comments') as CollectionReference<RecipeComment>;
  }

  addRecipeComment(user: CurrentUser, data: AddRequest): Promise<DocumentReference<RecipeComment>> {
    return addDoc<RecipeComment>(this.recipeCommentsCollectionRef, {
      user: user.uid,
      host: _.pick(user.providerData[0], [ 'displayName', 'email', 'photoURL' ]),
      timestamp: Math.floor(new Date().getTime() / 1000),
      ...data
    });
  }

  getRecipeComments(recipe: string): Observable<RecipeComment[]> {
    return collectionSnapshots<RecipeComment>(
      query(
        this.recipeCommentsCollectionRef,
        where('recipe', '==', recipe)
      )
    ).pipe(
      map(e => e.map(x => x.data()))
    );
  }

}
