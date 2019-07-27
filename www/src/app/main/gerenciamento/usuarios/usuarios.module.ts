import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { UsuariosRoutingModule } from './usuarios.routes.module';
import { UsuariosComponent } from './usuarios.component';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { PerfilResolver } from '../resolvers/perfil.resolver';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [UsuariosComponent],
    imports: [
        CompartilhadoModule,
        MaterialCoreModule,
        TranslateModule,
        FuseSharedModule,
        UsuariosRoutingModule,
        DataBarFormModule,
        NgxMaskModule.forChild()

    ],
    providers: [
        PerfilResolver
    ]
})
export class UsuariosModule { }