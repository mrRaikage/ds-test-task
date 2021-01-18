import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as authActions from './auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private ngZone: NgZone
  ) {}

  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signIn),
    switchMap(({ username, password }) => {
      return this.authService.login({ username, password }).pipe(
        map((userData) => {
          this.ngZone.run(() => {
            this.authService.setToken(userData.token);
            this.authService.setRole(userData.role);
            this.router.navigate(['/dashboard']);
          });
          return authActions.signInSuccess({ user: userData });
        }),
        catchError((error) => {
          this.toastr.error('Oops, login failed');
          return of(authActions.signInFailure());
        }),
      );
    }),
  ));
}
