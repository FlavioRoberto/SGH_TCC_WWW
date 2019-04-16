import { NgModule } from '@angular/core';
import { ConfirmaDialogComponent } from './confirma-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ApProgressBarModule } from '../ap-progress-bar/ap-progress-bar.module';


@NgModule({
    declarations: [ConfirmaDialogComponent],
    imports: [
        MatDialogModule,
        CommonModule,
        ApProgressBarModule
    ],
    exports: [ConfirmaDialogComponent],
    entryComponents: [ConfirmaDialogComponent]
})
export class ConfirmaDialogModule { }
