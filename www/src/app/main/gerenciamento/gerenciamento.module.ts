import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoModule } from './curriculo/curriculo.module';
import { CursoModule } from './curso/curso.module';
import { TurnoModule } from './turno/turno.module';
import { DisciplinaTipoModule } from './disciplina/tipo/disciplina-tipo.module';
import { DisciplinaModule } from './disciplina/cadastro/disciplina.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

@NgModule({
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        CurriculoModule,
        CursoModule,
        DisciplinaModule,
        DisciplinaTipoModule,
        TurnoModule
    ]
})
export class GerenciamentoModule { }
