import { NgModule } from '@angular/core';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { ProfessoresRoutingModule } from './professores.routes.module';
import { ProfessoresComponent } from './professores.component';
import { ProfessorService } from './services/professor.service';
import { ProfessorDataBarService } from './services/professor.databar.service';
import { DataBarModule } from '@compartilhado/layout/databar/data-bar.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    declarations: [ProfessoresComponent],
    imports: [
        CompartilhadoModule,
        ProfessoresRoutingModule,
        MaterialCoreModule,
        FuseSharedModule,
        DataBarFormModule,
        NgxMaskModule.forChild()
    ],
    providers: [
        ProfessorService, ProfessorDataBarService
    ]
})
export class ProfessoresModule { }
