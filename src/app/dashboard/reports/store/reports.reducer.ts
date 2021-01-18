import { IReportsData, IUserGraph } from '../models/reports-data.interface';
import { Action, createReducer, on } from '@ngrx/store';
import * as reportsActions from './reports.actions';

export interface IUserReportsState {
  userReports: IReportsData;
  graphData: IUserGraph;
}

export const initialState: IUserReportsState = {
  userReports: null,
  graphData: null,
};

export function reportReducer(state: IUserReportsState | undefined, action: Action): IUserReportsState {
  return reducer(state, action);
}

const reducer = createReducer<IUserReportsState>(
  initialState,

  on(reportsActions.userReportLoaded, (state, { data }) => ({
    ...state,
    userReports: data,
  })),

  on(reportsActions.reportGraphLoaded, (state, { graphData }) => ({
    ...state,
    graphData,
  })),
);
