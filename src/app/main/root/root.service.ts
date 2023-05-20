import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthAction, AuthState } from '../../store';
import { AuthStateService } from '../common';

@Injectable()
export class RootService {

  @Select(AuthState.authenticated) authenticated$!: Observable<boolean>;

  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store,
    authState: AuthStateService
  ) { }

  logout(): void {
    signOut(this.auth);
    this.store.dispatch(new AuthAction.Logout);
    this.router.navigateByUrl('/auth');
  }

}
