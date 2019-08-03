import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ToolbarComponent } from 'app/shared/layout/components/toolbar/toolbar.component';
import { AlterarSenhaDialogModule } from '../dialogs/redefinir-senha-dialog/alterar-senha-dialog.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        RouterModule,
        MaterialCoreModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        AlterarSenhaDialogModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
