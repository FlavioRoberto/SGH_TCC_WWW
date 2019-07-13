import { NgModule } from '@angular/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule } from '@fuse/components';

import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { DataBarComponent } from './data-bar.component';
import { ConfirmaDialogModule } from '../dialogs/confirma-dialog/confirma-dialog.module';
import { ApProgressBarModule } from '../ap-progress-bar/ap-progress-bar.module';

@NgModule({
    declarations: [DataBarComponent],
    imports: [
        MaterialCoreModule,
        FuseSharedModule,
        ConfirmaDialogModule,
        FuseProgressBarModule,
        ApProgressBarModule
    ],
    exports: [DataBarComponent]
})
export class DataBarModule {}
