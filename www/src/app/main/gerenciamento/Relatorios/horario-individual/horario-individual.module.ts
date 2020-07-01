import { NgModule } from '@angular/core';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HorarioIndividualRelatorioService } from './services/horario-individual.service';
import { HorarioIndividualRoutingModule } from './horario-individual.routes.module';
import { HorarioIndividualComponent } from './horario-individual.component';
import { ProfessorService } from '../../../cadastros/cargos/professores/services/professor.service';

@NgModule({
    declarations: [HorarioIndividualComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        HorarioIndividualRoutingModule,
        PdfViewerModule,
        NgxMaskModule.forRoot()
    ],
    exports: [],
    providers: [HorarioIndividualRelatorioService, ProfessorService]
})
export class HorarioIndividualModule { }
