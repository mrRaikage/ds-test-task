import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { authReducer } from '../auth/store/auth/auth.reducer';
import { AuthEffects } from '../auth/store/auth/auth.effects';
import { TokenInterceptor } from './interceptors/http-token.interceptor';
import { PermissionGuard } from './guards/permission.guard';
import { ChartComponent } from './charts/components/chart/chart.component';



@NgModule({
    declarations: [ChartComponent],
    imports: [
        CommonModule,
        StoreModule.forRoot({ auth: authReducer }),
        EffectsModule.forRoot([AuthEffects]),
        ToastrModule.forRoot(),
    ],
    exports: [
        ChartComponent
    ],
    providers: [
        ApiService,
        PermissionGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class SharedModule { }
