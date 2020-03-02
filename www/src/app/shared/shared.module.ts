import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { ErrorDialogModule } from './components/dialogs/error-dialog/error-dialog.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { ConfirmaDialogModule } from './components/dialogs/confirma-dialog/confirma-dialog.module';

@NgModule({
    imports: [
        LayoutModule,
        MaterialCoreModule,
        ConfirmaDialogModule,
        ErrorDialogModule
    ],
    exports: [
        LayoutModule,
        MaterialCoreModule,
        ConfirmaDialogModule,
        ErrorDialogModule
    ]
})
export class SharedModule { }
