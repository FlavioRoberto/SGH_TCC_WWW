import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { ErrorDialogModule } from './components/dialogs/error-dialog/error-dialog.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { ConfirmaDialogModule } from './components/dialogs/confirma-dialog/confirma-dialog.module';
import { FilterModule } from './components/filter/filter.component.module';

@NgModule({
    imports: [
        LayoutModule,
        MaterialCoreModule,
        ConfirmaDialogModule,
        ErrorDialogModule,
        FilterModule
    ],
    exports: [
        LayoutModule,
        MaterialCoreModule,
        ConfirmaDialogModule,
        ErrorDialogModule,
        FilterModule
    ]
})
export class SharedModule { }
