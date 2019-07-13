import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso.routes.module';


@NgModule({
    declarations: [CursoComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
        CursoRoutingModule
    ],
    exports: [CursoComponent]
})
export class CursoModule { }
