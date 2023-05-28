import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { Select, Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, filter, switchMap, tap } from 'rxjs';

import { AppAction, AppState, Language } from '../../store';
import { AuthStateService, CurrentUser, RecipesService, UserPermissionsService } from '../common';

@Injectable()
export class RootService {

  @Select(AppState.language) language$!: Observable<Language>;
  @Select(AppState.authenticated) authenticated$!: Observable<boolean>;
  @Select(AppState.admin) admin$!: Observable<boolean>;
  @Select(AppState.adminPortal) adminPortal$!: Observable<boolean>;

  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store,
    public authState: AuthStateService,
    private userPermissionsService: UserPermissionsService,
    private recipesService: RecipesService,
    private translate: TranslateService
  ) { }

  initializeLanguage(): void {
    this.translate.addLangs([ 'en', 'ru', 'lv' ]);
    this.translate.setDefaultLang('en');
    this.store.selectSnapshot(AppState.language)
    || this.store.dispatch(new AppAction.UpdateLanguageState('en'))
    this.store.select(AppState.language).pipe(filter(Boolean)).subscribe((language: Language) => {
      this.translate.use(language);
    });
    // recipes.forEach((recipe) => {
    //   this.recipesService.addRecipe(recipe).then((e) => {
    //     console.log('@@@ ', e);
    //   });
    // })
  }

  changeLanguage(language: Language) {
    this.translate.setDefaultLang(language);
    this.store.dispatch(new AppAction.UpdateLanguageState(language));
  }

  setUserPermissionDefaults(): void {
    this.authState.$.pipe(
      filter(Boolean),
      tap(currentUser => this.updateUserPermission(currentUser)),
    ).subscribe();
  }

  userPermissionObserver(): void {
    this.authState.currentUser$.pipe(
      filter(Boolean),
      switchMap(currentUser => this.userPermissionsService.getUserPermission(currentUser)),
      filter(permission => {
        return this.store.selectSnapshot(AppState.authenticated)
        && (permission.admin !== this.store.selectSnapshot(AppState.admin))
      }),
      tap(permission => this.dispatch({ authenticated: true, admin: permission.admin })),
    ).subscribe();
  }

  updateUserPermission(currentUser: CurrentUser): void {
    this.userPermissionsService.updateUserPermissionByUid(currentUser.uid, {
      user: currentUser.providerData[0],
      creationTime: currentUser.metadata.creationTime,
      lastSignInTime: currentUser.metadata.lastSignInTime
    })
  }

  logout(): void {
    signOut(this.auth);
    this.dispatch({ authenticated: false });
    this.router.navigateByUrl('/auth');
  }
  
  private dispatch({ authenticated, admin }: { authenticated: boolean, admin?: boolean }) {
    this.store.dispatch(new AppAction.UpdateAuthenticationState({
      authenticated, admin
    }));
  }

}
