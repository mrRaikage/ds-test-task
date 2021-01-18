import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UserPanelComponent } from './users-panel/components/user-panel/user-panel.component';
import { AdminPanelComponent } from './users-panel/components/admin-panel/admin-panel.component';
import { PermissionGuard } from '../shared/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: UserPanelComponent,
        canActivate: [PermissionGuard],
        data: {
          role: ['User', 'Admin']
        }
      },
      {
        path: 'dashboard/admin',
        component: AdminPanelComponent,
        canActivate: [PermissionGuard],
        data: {
          role: ['Admin']
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


