import { NgModule } from '@angular/core';
import { ConfirmaDialogComponent } from './confirma-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';


@NgModule({
    declarations: [ConfirmaDialogComponent],
    imports: [
        MatDialogModule,
        CommonModule
    ],
    exports: [ConfirmaDialogComponent],
    entryComponents: [ConfirmaDialogComponent]
})
export class ConfirmaDialogModule { }
