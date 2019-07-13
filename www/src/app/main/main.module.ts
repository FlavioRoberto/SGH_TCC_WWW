import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { RequestInterceptor } from '@compartilhado/interceptors/request.interceptor';

import { MainRoutingModule } from './main.routes.module';


@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        FuseSharedModule,
        MainRoutingModule,
        CompartilhadoModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }],
})
export class MainModule { }
