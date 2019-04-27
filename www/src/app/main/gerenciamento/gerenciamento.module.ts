import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoModule } from './curriculo/curriculo.module';
import { CursoModule } from './curso/curso.module';
import { TurnoModule } from './turno/turno.module';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DisciplinaTipoModule } from './disciplina/tipo/disciplina-tipo.module';
import { DisciplinaModule } from './disciplina/cadastro/disciplina.module';

@NgModule({
    imports: [
        HeaderDescricaoModule,
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
