import { NgModule } from '@angular/core';
import { ApHeaderDescricaoModule } from './ap-header-descricao/ap-header-descricao.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaxLengthModule } from './ap-input-max-length/input-max-length.module';
import { MatInputModule } from '@angular/material/input';
import { ApContainerModule } from './ap-container/ap-container.module';
import { ApFormAutocompleteModule } from './ap-form-autocomplete/ap-form-autocomplete.module';
import { ExpansivelTableModule } from './expansivel-table/expansivel-table.module';
import { ErrorDialogModule } from '@breaking_dev/ic-databar-lib/lib/components/dialogs/error-dialog/error-dialog.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        InputMaxLengthModule,
        ApHeaderDescricaoModule,
        ApContainerModule,
        ApFormAutocompleteModule,
        ExpansivelTableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
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
