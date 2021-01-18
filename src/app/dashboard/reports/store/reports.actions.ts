import { createAction, props } from '@ngrx/store';
import { IReportsData, IUserGraph } from '../models/reports-data.interface';

export const loadReport = createAction('[Reports] load reports');
export const userReportLoaded = createAction('[Reports] reports loaded', props<{ data: IReportsData }>());
export const userReportLoadedFailure = createAction('[Reports] reports loaded Failure');

export const loadReportGraph = createAction('[Reports] load report Graph', props<{ id: number }>());
export const reportGraphLoaded = createAction('[Reports] report Graph loaded', props<{ graphData: IUserGraph }>());
export const reportGraphLoadedFailure = createAction('[Reports] report Graph loaded Failure');



