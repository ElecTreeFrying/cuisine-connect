import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store';
import { AuthStateService, SnackbarService, UserPermissionsService } from '../common';

@Injectable()
export class ManageProfileService {

  @Select(AppState.admin) admin$!: Observable<boolean>

  #requestSent!: boolean;

  constructor(
    public authState: AuthStateService,
    private userPermissionsService: UserPermissionsService,
    private snackbar: SnackbarService
  ) { }

  get requestSent(): boolean {
    return this.#requestSent;
  }

  requestAdminAccess(): void {
    this.#requestSent = true;
    this.snackbar.open({ message: 'Request sent!' });
    this.userPermissionsService.updateUserPermissionByUid(this.authState.currentUser.uid, {
      requestTimestamp: Math.floor(new Date().getTime() / 1000)
    });
  }

}
