import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { QuadroHorarioAulasRoutingModule } from './quadro-horario-aula.routes.module';


@NgModule({
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        QuadroHorarioAulasRoutingModule
    ]
})
export class QuadroHorarioAulaModule { }
