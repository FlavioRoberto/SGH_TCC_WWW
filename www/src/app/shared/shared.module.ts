import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { ConfirmaDialogModule } from '@breaking_dev/ic-databar-lib';
import { ErrorDialogModule } from './components/dialogs/error-dialog/error-dialog.module';

@NgModule({
    imports: [
        LayoutModule,
        ConfirmaDialogModule,
        ErrorDialogModule
    ],
    exports: [
        LayoutModule,
        ConfirmaDialogModule,
        ErrorDialogModule
    ]
})
export class SharedModule { }
