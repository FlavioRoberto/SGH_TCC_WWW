import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { QuadroHorarioAulasRoutingModule } from './quadro-horario-aula.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { QuadroHorarioAulaComponent } from './quadro-horario-aula.component';
import { QuadroHorarioAulaService } from './services/quadro-horario-aula.service';
import { AdicionarAulaDialogService } from './components/dialogs/adicionar-aula/adicionar-aula-dialog.service';
import { AdicionarAulaDialogModule } from './components/dialogs/adicionar-aula/adicionar-aula-dialog.module';
import { LancarAulaDialogModule } from './components/dialogs/lancar-aulas/lancar-aula-dialog.module';


@NgModule({
    declarations: [QuadroHorarioAulaComponent],
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        QuadroHorarioAulasRoutingModule,
        AdicionarAulaDialogModule,
        LancarAulaDialogModule
    ],
    providers: [
        QuadroHorarioAulaService,
        AdicionarAulaDialogService
    ]
})
export class QuadroHorarioAulaModule { }
