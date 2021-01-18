import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadListOfUsers } from '../../store/users.actions';
import { selectListOfUsers } from '../../store/users.selectors';
import { getCsvSettings } from '../../../../shared/utils/csv-settings';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanelComponent implements OnInit {
  listOfUsers$ = this.store.select(selectListOfUsers);
  fileOptions: any;

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadListOfUsers());

    this.fileOptions = getCsvSettings(
      'List of users',
      ['First name', 'Last name', 'Email', 'Groups'],
      ['first_name', 'last_name', 'email', 'groups' ]
    );
  }
}
