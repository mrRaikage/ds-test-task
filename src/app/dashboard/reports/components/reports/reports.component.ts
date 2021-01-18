import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadReport, loadReportGraph } from '../../store/reports.actions';
import { selectUserReports, selectUserReportsGraph } from '../../store/reports.selectors';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  arrayOfReports$ = this.store.select(selectUserReports);
  isSelected = false;

  labelsForGraph$ = this.store.select(selectUserReportsGraph).pipe(filter(data => Boolean(data)), map(({ data }) => Object.keys(data)));
  valuesForGraph$ = this.store.select(selectUserReportsGraph).pipe(filter(data => Boolean(data)), map(({ data }) => Object.values(data)));

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadReport());
  }

  showGraph(id: number): void {
    this.store.dispatch(loadReportGraph({id}));
  }
}
