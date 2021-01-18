export interface IUserReportData {
  id: number;
  name: string;
  active: boolean;
  image_url: string;
}

export interface IReportsData {
  userReport: IUserReportData[];
}

export interface IUserGraph {
  data: IAssessmentGraphData;
  type: string;
}

export interface IAssessmentGraphData {
  Agreeableness: number;
  Drive: number;
  Luck: number;
  Openess: number;
}
