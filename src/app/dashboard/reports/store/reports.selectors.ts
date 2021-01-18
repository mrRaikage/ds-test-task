import { createSelector } from '@ngrx/store';

export const selectReportState = (state) => state;

export const selectUserReports = createSelector(
  selectReportState,
  state => state.reportReducer.userReports
);

export const selectUserReportsGraph = createSelector(
  selectReportState,
  state => state.reportReducer.graphData
);

