import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { DisciplinaTipoComponent } from './disciplina-tipo.component';
import { DisciplinaTipoRoutingModule } from './disciplina-tipo.routes.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';


@NgModule({
    declarations: [DisciplinaTipoComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
        DisciplinaTipoRoutingModule,
        DataBarFormModule
    ],
    exports: [DisciplinaTipoComponent]
})
export class DisciplinaTipoModule { }
