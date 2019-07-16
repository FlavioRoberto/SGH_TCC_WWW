import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { UsuariosRoutingModule } from './usuarios.routes.module';
import { UsuariosComponent } from './usuarios.component';
import { DataBarFormModule } from 'app/layout/components/databar-form/databar-form.module';

@NgModule({
    declarations: [UsuariosComponent],
    imports: [
        CompartilhadoModule,
        MaterialCoreModule,
        FuseSharedModule,
        UsuariosRoutingModule,
        DataBarFormModule
    ]
})
export class UsuariosModule { }