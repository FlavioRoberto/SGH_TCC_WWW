import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask'
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { CurriculoComponent } from './curriculo.component';
import { CurriculoRoutingModule } from './curriculo.routes.module';
import { TurnoResolver } from '../resolvers/turno.resolver';
import { CursoResolver } from '../resolvers/curso.resolver';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { AdicionarDisciplinaDialogService } from './components/dialogs/adicionar-disciplina/service/adicionar-disciplina-dialog.service';
import { AdicionarDisciplinaDialogModule } from './components/dialogs/adicionar-disciplina/adicionar-disciplina-dialog.module';


@NgModule({
    declarations: [CurriculoComponent],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CurriculoRoutingModule,
        CompartilhadoModule,
        DataBarFormModule,
        AdicionarDisciplinaDialogModule
    ],
    exports: [CurriculoComponent],
    providers: [
        TurnoResolver,
        CursoResolver,
        AdicionarDisciplinaDialogService
    ]
})
export class CurriculoModule { }
