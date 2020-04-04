import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

import { MainRoutingModule } from './main.routes.module';
import { SharedModule } from 'app/shared/shared.module';
import { RequestInterceptor } from 'app/core/interceptors/request.interceptor';
import { RequestErrorInterceptor } from 'app/core/interceptors/request.error.interceptor';


@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        FuseSharedModule,
        MainRoutingModule,
        CompartilhadoModule,
        SharedModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestErrorInterceptor,
        multi: true
    }],
})
export class MainModule { }
