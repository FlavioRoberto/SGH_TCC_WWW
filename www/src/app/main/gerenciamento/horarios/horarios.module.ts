import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { HorariosRoutingModule } from './horarios.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { HorariosComponent } from './horarios.component';
import { HorarioCardComponent } from './components/horario-card/horario-card.component';
import { CadastroHorarioDialogModule } from './components/dialogs/cadastro-horario/cadastro-horario.module';

@NgModule({
    declarations: [HorariosComponent, HorarioCardComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        HorariosRoutingModule,
        CadastroHorarioDialogModule
    ],
    exports: []
})
export class HorariosModule { }
