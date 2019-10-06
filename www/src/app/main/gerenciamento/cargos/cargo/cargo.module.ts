import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CargoRoutingModule } from './cargo.routes.module';
import { CargoComponent } from './cargo.component';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { CargoDataBarBindService } from './services/cargo.databar.service';
import { ProfessorService } from '../professores/services/professor.service';
import { CurriculoService } from '../../curriculo/services/curriculo.service';

@NgModule({
    imports: [
        DataBarFormModule,
        FuseSharedModule,
        CargoRoutingModule
    ],
    declarations: [CargoComponent],
    providers: [
        CargoDataBarBindService,
        ProfessorService,
        CurriculoService
    ]
})
export class CargoModule { }
