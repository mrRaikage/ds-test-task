import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Angular2CsvModule } from 'angular2-csv';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsComponent } from './reports/components/reports/reports.component';
import { ReportsService } from './reports/services/reports.service';
import { reportReducer } from './reports/store/reports.reducer';
import { ReportsEffects } from './reports/store/reports.effects';
import { AdminPanelComponent } from './users-panel/components/admin-panel/admin-panel.component';
import { UserPanelComponent } from './users-panel/components/user-panel/user-panel.component';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './users-panel/services/admin.service';
import { usersReducer } from './users-panel/store/users.reducer';
import { UsersEffects } from './users-panel/store/users.effects';

@NgModule({
  declarations: [DashboardComponent, ReportsComponent, AdminPanelComponent, UserPanelComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('reportReducer', reportReducer),
    EffectsModule.forFeature([ReportsEffects]),
    SharedModule,
    ChartsModule,
    MatButtonModule,
    StoreModule.forFeature('usersReducer', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    Angular2CsvModule
  ],
  providers: [ReportsService, AdminService]
})
export class DashboardModule { }



