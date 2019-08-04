import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { ApFormAutocompleteComponent } from './ap-form-autocomplete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialCoreModule,
        FuseSharedModule
    ],
    declarations: [ApFormAutocompleteComponent],
    exports: [ApFormAutocompleteComponent]
})
export class ApFormAutocompleteModule { }
