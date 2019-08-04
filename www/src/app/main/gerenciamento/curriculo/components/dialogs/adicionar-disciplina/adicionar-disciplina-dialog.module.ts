import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { AdicionarDisciplinaDialogComponent } from './adicionar-disciplina-dialog.component';
import { AdicionarDisciplinaDialogService } from './service/adicionar-disciplina-dialog.service';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { TranslateModule } from '@ngx-translate/core';
import { DisciplinaService } from 'app/main/gerenciamento/disciplina/cadastro/service/disciplina.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [AdicionarDisciplinaDialogComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
        TranslateModule,
        NgxMaskModule.forChild()
    ],
    exports: [AdicionarDisciplinaDialogComponent],
    entryComponents: [AdicionarDisciplinaDialogComponent],
    providers: [AdicionarDisciplinaDialogService, DisciplinaService]
})
export class AdicionarDisciplinaDialogModule { }
