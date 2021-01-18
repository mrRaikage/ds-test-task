import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as reportsActions from './users.actions';
import { AdminService } from '../services/admin.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private reportsService: AdminService,
    private toastr: ToastrService
  ) {
  }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(reportsActions.loadListOfUsers),
    switchMap(() => {
      return this.reportsService.getListOfUsers().pipe(
        map((reportsData) => {
          return reportsActions.listOfUsersLoaded({ data: reportsData });
        }),
        catchError((error) => {
          this.toastr.error('Oops, list of users loaded failed');
          return of(reportsActions.listOfUsersLoadedFailure());
        }),
      );
    }),
  ));
}
