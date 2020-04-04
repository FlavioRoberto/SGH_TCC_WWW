import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

import { RedefinirSenhaComponent } from './redefinir-senha.component';
import { RedefinirSenhaRoutingModule } from './redefinir-senha.routes.module';
import { AutenticacaoFormModule } from '../components/autenticacao-form/autenticacao-form.module';
import { TranslateModule } from '@ngx-translate/core';
import { RedefinirSenhaService } from './services/redefinir-senha.service';

@NgModule({
    declarations: [RedefinirSenhaComponent],
    imports: [
        CompartilhadoModule,
        MaterialCoreModule,
        FuseSharedModule,
        RedefinirSenhaRoutingModule,
        AutenticacaoFormModule
    ],
    providers: [RedefinirSenhaService]
})
export class RedefinirSenhaModule {

}
