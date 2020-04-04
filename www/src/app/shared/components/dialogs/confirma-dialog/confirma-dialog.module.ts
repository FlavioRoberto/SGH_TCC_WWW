import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { ConfirmaDialogComponent } from './confirma-dialog.component';

@NgModule({
    declarations: [ConfirmaDialogComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule],
    exports: [ConfirmaDialogComponent]
})
export class ConfirmaDialogModule { }
