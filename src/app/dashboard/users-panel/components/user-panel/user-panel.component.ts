import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  isUserAnAdmin = false;

  constructor(public router: Router, public authServise: AuthService) { }

  ngOnInit(): void {
    if (this.authServise.getRole() === 'Admin') {
      this.isUserAnAdmin = true;
    }
  }

  toAdminPanel(): void {
    this.router.navigate(['dashboard/admin']);
  }
}
