import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { InicioModule } from './inicio/inicio.module';
import { HttpClientModule } from '@angular/common/http';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';
import { RequestInterceptor } from 'app/compartilhado/Interceptors/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorDialogModule } from 'app/layout/components/app_components/dialogs/error-dialog/error-dialog.module';


@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule,
        HttpClientModule,
        FuseSharedModule,
        InicioModule,
        ErrorDialogModule,
        GerenciamentoModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }],
})
export class MainModule { }
