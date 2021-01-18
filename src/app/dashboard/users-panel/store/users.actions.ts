import { createAction, props } from '@ngrx/store';
import { IListOfUsers } from '../models/users-data.interface';

export const loadListOfUsers = createAction('[Users] load list of users');
export const listOfUsersLoaded = createAction('[Users] list of users loaded', props<{ data: IListOfUsers }>());
export const listOfUsersLoadedFailure = createAction('[Users] list of users loaded Failure');



