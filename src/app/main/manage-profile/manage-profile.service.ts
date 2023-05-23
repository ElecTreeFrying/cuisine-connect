import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store';
import { AuthStateService } from '../common';

@Injectable()
export class ManageProfileService {

  @Select(AppState.admin) admin$!: Observable<boolean>

  constructor(
    public authState: AuthStateService
  ) { }

}
