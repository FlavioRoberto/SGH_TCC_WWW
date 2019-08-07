import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuseSharedModule } from '@fuse/shared.module';

import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { ExpansivelTableComponent } from './expansivel-table.component';


@NgModule({
    imports: [
        CommonModule,

        // Material
        MaterialCoreModule,

        // Fuse
        FuseSharedModule
    ],
    declarations: [ExpansivelTableComponent],
    exports: [ExpansivelTableComponent]
})
export class ExpansivelTableModule { }
