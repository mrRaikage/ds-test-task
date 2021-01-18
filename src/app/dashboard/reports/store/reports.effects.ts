import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as reportsActions from './reports.actions';
import { ReportsService } from '../services/reports.service';
import * as authActions from '../../../auth/store/auth/auth.actions';

@Injectable()
export class ReportsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private reportsService: ReportsService,
    private toastr: ToastrService,
  ) {
  }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(reportsActions.loadReport),
    switchMap(() => {
      return this.reportsService.userAssessments().pipe(
        map((reportsData) => {
          return reportsActions.userReportLoaded({ data: reportsData });
        })
      );
    }),
    catchError((error) => {
      this.toastr.error('Oops, report loaded failed');
      return of(reportsActions.userReportLoadedFailure());
    }),
  ));

  loadGraph$ = createEffect(() => this.actions$.pipe(
    ofType(reportsActions.loadReportGraph),
    switchMap(({ id }) => {
      return this.reportsService.userGraph(id).pipe(
        map((graphData) => {
          return reportsActions.reportGraphLoaded({ graphData });
        })
      );
    }),
    catchError((error) => {
      this.toastr.error('Oops, graph loaded failed');
      return of(reportsActions.reportGraphLoadedFailure());
    }),
  ));
}
