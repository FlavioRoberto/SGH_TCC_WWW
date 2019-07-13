import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

import { CursoModule } from './curso/curso.module';
import { TurnoModule } from './turno/turno.module';
import { DisciplinaTipoModule } from './disciplina/tipo/disciplina-tipo.module';
import { DisciplinaModule } from './disciplina/cadastro/disciplina.module';
import { GerenciamentoRoutingModule } from './gerenciamento.routes.module';

@NgModule({
    imports: [
        CompartilhadoModule,
        TranslateModule,
        FuseSharedModule,
        GerenciamentoRoutingModule,
        CursoModule,
        DisciplinaModule,
        DisciplinaTipoModule,
        TurnoModule
    ]
})
export class GerenciamentoModule { }
