import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, UserPermissions } from 'src/app/store';
import { FirestoreService } from '../../common';

@Injectable()
export class ManageUsersService {

  @Select(AppState.userPermissions) userPermissions$!: Observable<UserPermissions[] | null>

  constructor(
    private store: Store,
    private firestore: FirestoreService
  ) { }

  getUserPermissions(): void {
    this.store.selectSnapshot(AppState.userPermissions)
    || this.store.dispatch(new AppAction.UserPermissionsControl('get'));
  }

  allowAccessToAdminPortal(uid: string): void {
    console.log('@@@ allowAccessToAdminPortal', uid);
    this.firestore.updateUserPermissionByUid(uid, {
      admin: true,
      requestTimestamp: null
    })
  }

}
