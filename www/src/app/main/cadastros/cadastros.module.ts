import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

import { CadastrosRoutingModule } from './cadastros.routes.module';

@NgModule({
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        CadastrosRoutingModule
    ]
})
export class CadastrosModule { }
