import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import {Observable} from 'rxjs';
import {IUserGraph, IReportsData} from '../models/reports-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends ApiService{

  constructor(protected injector: Injector) {
    super(injector);
  }

  userAssessments(): Observable<IReportsData> {
    return super.get<IReportsData>('userassessments');
  }

  userGraph(id: number): Observable<IUserGraph> {
    return super.get<IUserGraph>('userassessment/graph', {params: {id}});
  }
}
