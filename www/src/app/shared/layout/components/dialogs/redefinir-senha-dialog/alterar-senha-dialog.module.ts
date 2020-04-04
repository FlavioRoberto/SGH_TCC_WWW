import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { AlterarSenhaDialogComponent } from './alterar-senha-dialog.component';
import { AlterarSenhaService } from './service/alterar-senha.service';

@NgModule({
    declarations: [AlterarSenhaDialogComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
    ],
    exports: [AlterarSenhaDialogComponent],
    entryComponents: [AlterarSenhaDialogComponent],
    providers: [AlterarSenhaService]
})
export class AlterarSenhaDialogModule { }
