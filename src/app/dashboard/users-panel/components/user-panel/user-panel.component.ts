import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPanelComponent implements OnInit {
  isAdmin$ = this.authServise.isAdmin$;

  constructor(public router: Router, public authServise: AuthService) { }

  ngOnInit(): void {
    this.isAdmin$.subscribe(value => console.log(value));
  }

}
