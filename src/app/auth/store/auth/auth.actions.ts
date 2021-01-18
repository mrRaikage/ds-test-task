import { createAction, props } from '@ngrx/store';
import { IUserData } from '../../../shared/models/user-data.interface';

export const signIn = createAction('[Auth] Sign In', props<{ username: string, password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success', props<{ user: IUserData }>());
export const signInFailure = createAction('[Auth] Sign In Failure');
