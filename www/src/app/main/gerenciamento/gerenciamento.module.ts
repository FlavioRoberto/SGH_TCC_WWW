import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoModule } from './curriculo/curriculo.module';
import { CursoModule } from './curso/curso.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { TurnoModule } from './turno/turno.module';

@NgModule({
    imports: [
        TranslateModule,
        FuseSharedModule,
        CurriculoModule,
        CursoModule,
        DisciplinaModule,
        TurnoModule
    ]
})
export class GerenciamentoModule {}
