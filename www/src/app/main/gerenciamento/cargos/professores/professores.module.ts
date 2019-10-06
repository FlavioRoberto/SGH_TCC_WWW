import { NgModule } from '@angular/core';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { ProfessoresRoutingModule } from './professores.routes.module';
import { ProfessoresComponent } from './professores.component';
import { ProfessorService } from './services/professor.service';
import { ProfessorDataBarService } from './services/professor.databar.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';
import { CursoResolver } from '../../resolvers/curso.resolver';


@NgModule({
    declarations: [ProfessoresComponent],
    imports: [
        DataBarFormModule,
        FuseSharedModule,
        NgxMaskModule.forChild(),
        ProfessoresRoutingModule
    ],
    providers: [
        ProfessorService, ProfessorDataBarService,
        CursoResolver,
    ]
})
export class ProfessoresModule { }
