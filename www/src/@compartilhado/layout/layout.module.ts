import { NgModule } from '@angular/core';
import { ApHeaderDescricaoModule } from './ap-header-descricao/ap-header-descricao.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaxLengthModule } from './ap-input-max-length/input-max-length.module';
import { ErrorDialogModule } from './dialogs/error-dialog/error-dialog.module';
import { MatInputModule } from '@angular/material/input';
import { ApContainerModule } from './ap-container/ap-container.module';
import { ApFormAutocompleteModule } from './ap-form-autocomplete/ap-form-autocomplete.module';
import { ExpansivelTableModule } from './expansivel-table/expansivel-table.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        ErrorDialogModule,
        InputMaxLengthModule,
        ApHeaderDescricaoModule,
        ApContainerModule,
        ApFormAutocompleteModule,
        ExpansivelTableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ErrorDialogModule,
        MatInputModule,
        InputMaxLengthModule,
        ApHeaderDescricaoModule,
        ApContainerModule,
        ApContainerModule,
        ApFormAutocompleteModule,
        ExpansivelTableModule
    ]
})
export class AppLayoutModule { }
