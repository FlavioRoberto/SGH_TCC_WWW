import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { InicioModule } from './inicio/inicio.module';
import { HttpClientModule } from '@angular/common/http';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { RequestInterceptor } from '@compartilhado/interceptors/request.interceptor';


@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        FuseSharedModule,
        InicioModule,
        CompartilhadoModule,
        GerenciamentoModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }],
})
export class MainModule { }
