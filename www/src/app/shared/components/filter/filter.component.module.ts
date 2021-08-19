import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from '../../../core/modules/material-core.module';
import { FilterComponent } from './filter.component';

@NgModule({
    imports: [
        FuseSharedModule,
        ReactiveFormsModule,
        MaterialCoreModule
    ],
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }