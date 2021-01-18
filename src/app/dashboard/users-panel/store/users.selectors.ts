import { createSelector } from '@ngrx/store';

export const selectUsersState = (state) => state;

export const selectListOfUsers = createSelector(
  selectUsersState,
  state => state.usersReducer.userList
);


