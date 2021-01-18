import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../auth/store/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/store/auth/auth.effects';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
