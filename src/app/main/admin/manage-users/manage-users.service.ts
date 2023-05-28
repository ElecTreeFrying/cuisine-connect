import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppAction, AppState, UserPermissions } from 'src/app/store';
import { UserPermissionsService } from '../../common';

@Injectable()
export class ManageUsersService {

  @Select(AppState.userPermissions) userPermissions$!: Observable<UserPermissions[] | null>

  constructor(
    private store: Store,
    private userPermissionsService: UserPermissionsService
  ) { }

  getUserPermissions(): void {
    this.store.dispatch(new AppAction.UserPermissionsControl('get'));
  }

  allowAccessToAdminPortal(uid: string): void {
    this.userPermissionsService.updateUserPermissionByUid(uid, {
      admin: true,
      requestTimestamp: null
    })
  }

}
