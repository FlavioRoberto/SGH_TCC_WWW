import { NgModule } from '@angular/core';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { AutenticacaoRoutesModule } from './autenticacao.routes.module';

@NgModule({
    imports: [
        CompartilhadoModule,
        AutenticacaoRoutesModule
    ],
})
export class AutenticacaoModule {

}
