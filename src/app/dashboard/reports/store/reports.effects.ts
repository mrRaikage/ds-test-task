import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as reportsActions from './reports.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ReportsService } from '../services/reports.service';


@Injectable()
export class ReportsEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private reportsService: ReportsService,
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
  ));
}
