import { NgModule } from '@angular/core';
import { DataBarModule } from './databar/data-bar.module';
import { ApHeaderDescricaoModule } from './ap-header-descricao/ap-header-descricao.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaxLengthModule } from './ap-input-max-length/input-max-length.module';
import { ErrorDialogModule } from './dialogs/error-dialog/error-dialog.module';
import { MatInputModule } from '@angular/material';
import { ApContainerModule } from './ap-container/ap-container.module';
import { ApFormAutocompleteModule } from './ap-form-autocomplete/ap-form-autocomplete.module';
import { ApFieldsetModule } from './ap-fieldset/ap-fieldset.module';
import { ExpansivelTableModule } from './expansivel-table/expansivel-table.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        ErrorDialogModule,
        DataBarModule,
        InputMaxLengthModule,
        ApHeaderDescricaoModule,
        ApContainerModule,
        ApFormAutocompleteModule,
        ApFieldsetModule,
        ExpansivelTableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ErrorDialogModule,
        MatInputModule,
        DataBarModule,
        InputMaxLengthModule,
        ApHeaderDescricaoModule,
        ApContainerModule,
        ApContainerModule,
        ApFormAutocompleteModule,
        ApFieldsetModule,
        ExpansivelTableModule
    ]
})
export class AppLayoutModule { }
