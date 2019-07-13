import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { DisciplinaTipoComponent } from './disciplina-tipo.component';
import { DisciplinaTipoRoutingModule } from './disciplina-tipo.routes.module';


@NgModule({
    declarations: [DisciplinaTipoComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
        DisciplinaTipoRoutingModule
    ],
    exports: [DisciplinaTipoComponent]
})
export class DisciplinaTipoModule { }
