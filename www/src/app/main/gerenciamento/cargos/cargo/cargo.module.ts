import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { IcExpansivelTableModule } from '@breaking_dev/ic-expansivel-table';
import { CargoRoutingModule } from './cargo.routes.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { CargoDataBarBindService } from './services/cargo.databar.service';
import { ProfessorService } from '../professores/services/professor.service';
import { CurriculoService } from '../../curriculo/services/curriculo.service';
import { CargoService } from './services/cargo.service';
import { CargoComponent } from './cargo.component';
import { CargoExpansivelTableService } from './services/cargo.table.service';
import { DisciplinaCargoDialogModule } from './components/disciplina-cargo-dialog/disciplina-cargo-dialog.module';
import { CurriculoResolver } from '../../resolvers/curriculo.resolver';

@NgModule({
    imports: [
        DataBarFormModule,
        FuseSharedModule,
        CargoRoutingModule,
        IcExpansivelTableModule,
        DisciplinaCargoDialogModule
    ],
    declarations: [CargoComponent],
    providers: [
        CargoDataBarBindService,
        ProfessorService,
        CurriculoService,
        CargoService,
        CargoExpansivelTableService,
        CurriculoResolver
    ]
})
export class CargoModule { }
