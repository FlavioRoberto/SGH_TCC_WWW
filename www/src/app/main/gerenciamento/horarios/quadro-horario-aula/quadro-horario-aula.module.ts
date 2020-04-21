import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { QuadroHorarioAulasRoutingModule } from './quadro-horario-aula.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { QuadroHorarioAulaComponent } from './quadro-horario-aula.component';


@NgModule({
    declarations: [QuadroHorarioAulaComponent],
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        QuadroHorarioAulasRoutingModule
    ]
})
export class QuadroHorarioAulaModule { }
