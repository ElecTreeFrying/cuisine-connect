import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable, filter, map, switchMap, tap } from 'rxjs';

import { AuthStateService, Recipe, RecipeCommentsService } from '../../common';
import { AppState, RecipeComment } from 'src/app/store';
import { getTabIndex } from './recipe-functions';

@Injectable()
export class RecipeService {

  @Select(AppState.userId) userId!: Observable<string>;

  #recipeComments$$ = new BehaviorSubject<RecipeComment[] | null>(null);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authState: AuthStateService,
    private recipeComments: RecipeCommentsService,
  ) { }

  get tabParam(): string {
    return this.route.snapshot.queryParamMap.get('tab') || 'recipe';
  }

  get cuisineParam(): string {
    return this.route.snapshot.queryParamMap.get('cuisine') || 'invalid';
  }

  get tabIndex(): number {
    return getTabIndex(this.tabParam);
  }

  get recipeComments$(): Observable<RecipeComment[]> {
    return this.#recipeComments$$.asObservable().pipe(
      filter(Boolean)
    );
  }

  recipeCommentsObserver(): void {
    this.recipeCommentsStream$.subscribe((recipeComments: RecipeComment[]) => {
      this.#recipeComments$$.next(recipeComments);
    });
  }

  addComment(comment: string): void {
    this.recipeComments.addRecipeComment(this.authState.currentUser, {
      comment, recipe: this.cuisineParam
    });
  }

  removeComment(uid: string): void {
    confirm('Are you sure you want to remove this comment?')
    && this.recipeComments.removeComment(uid);
  }

  private get recipeCommentsStream$(): Observable<RecipeComment[]> {
    return this.route.queryParamMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('cuisine')),
      filter(Boolean),
      switchMap(r => this.recipeComments.getRecipeComments(r))
    );
  }

  setTabQueryParams(index: number, recipe: Recipe): void {
    switch (index) {
      case 0: return this.updateQueryParams({ tab: 'recipe', cuisine: recipe?.uid });
      case 1: return this.updateQueryParams({ tab: 'details', cuisine: recipe?.uid });
      case 2: return this.updateQueryParams({ tab: 'comments', cuisine: recipe?.uid });
    }
  }
  
  updateQueryParams(queryParams: any): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams
    });
  }

}
