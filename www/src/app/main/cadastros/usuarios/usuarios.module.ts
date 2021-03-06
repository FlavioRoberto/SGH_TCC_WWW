import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

import { UsuariosRoutingModule } from './usuarios.routes.module';
import { UsuariosComponent } from './usuarios.component';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { PerfilResolver } from '../../../shared/resolvers/perfil.resolver';
import { NgxMaskModule } from 'ngx-mask';
import { CursoResolver } from 'app/shared/resolvers/curso.resolver';

@NgModule({
    declarations: [UsuariosComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        UsuariosRoutingModule,
        DataBarFormModule,
        NgxMaskModule.forChild()
    ],
    providers: [
        PerfilResolver,
        CursoResolver
    ]
})
export class UsuariosModule { }