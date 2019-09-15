import { NgModule } from '@angular/core';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { ProfessoresRoutingModule } from './professores.routes.module';
import { ProfessoresComponent } from './professores.component';


@NgModule({
    declarations: [ProfessoresComponent],
    imports: [
        CompartilhadoModule,
        ProfessoresRoutingModule
    ]
})
export class ProfessoresModule { }
