import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { GerenciamentoRoutingModule } from './gerenciamento.routes.module';


@NgModule({
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        GerenciamentoRoutingModule
    ]
})
export class GerenciamentoModule { }
