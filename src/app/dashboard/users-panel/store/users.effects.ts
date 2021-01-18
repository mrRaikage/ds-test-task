import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as reportsActions from './users.actions';
import { map, switchMap } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';


@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private reportsService: AdminService,
  ) {
  }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(reportsActions.loadListOfUsers),
    switchMap(() => {
      return this.reportsService.getListOfUsers().pipe(
        map((reportsData) => {
          return reportsActions.listOfUsersLoaded({ data: reportsData });
        })
      );
    }),
  ));
}
