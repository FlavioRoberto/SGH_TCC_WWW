import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina.routes.module';


@NgModule({
    declarations: [DisciplinaComponent],
    imports: [
        DisciplinaRoutingModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule
    ],
    exports: [DisciplinaComponent]
})
export class DisciplinaModule { }
