import { NgModule } from '@angular/core';
import { CadastroHorarioDialogComponent } from './cadastro-horario.dialog.component';
import { CadastroHorarioDialogService } from './services/cadastro-horario.dialog.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

@NgModule({
    declarations: [CadastroHorarioDialogComponent],
    imports: [
        MaterialCoreModule,
        FuseSharedModule
    ],
    exports: [CadastroHorarioDialogComponent],
    providers: [CadastroHorarioDialogService],
    entryComponents: [CadastroHorarioDialogComponent]
})
export class CadastroHorarioDialogModule { }
