import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from '../auth/store/auth/auth.reducer';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<IAuthState>, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.setRole(this.authService.getRole());
  }

}
