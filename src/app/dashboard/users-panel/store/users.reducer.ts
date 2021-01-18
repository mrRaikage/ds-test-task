import {Action, createReducer, on} from '@ngrx/store';
import * as reportsActions from './users.actions';
import { IListOfUsers } from '../models/users-data.interface';

export interface IListOfUsersState {
  userList: IListOfUsers;
}

export const initialState: IListOfUsersState = {
  userList: null,
};

export function usersReducer(state: IListOfUsersState | undefined, action: Action): IListOfUsersState {
  return reducer(state, action);
}

const reducer = createReducer<IListOfUsersState>(
  initialState,

  on(reportsActions.listOfUsersLoaded, (state , { data }) => ({
    ...state,
    userList: data,
  })),
);
