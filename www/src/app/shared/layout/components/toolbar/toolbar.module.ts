import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ToolbarComponent } from 'app/shared/layout/components/toolbar/toolbar.component';
import { AlterarSenhaDialogModule } from '../dialogs/redefinir-senha-dialog/alterar-senha-dialog.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

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
