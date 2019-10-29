import { NgModule } from '@angular/core';
import { ConfirmaDialogComponent } from './confirma-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ApProgressBarModule } from '../../ap-progress-bar/ap-progress-bar.module';
import { ApSpinnerModule } from '../../ap-spinner/ap-spinner.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [ConfirmaDialogComponent],
    imports: [
        MatDialogModule,
        CommonModule,
        FlexLayoutModule,
        ApSpinnerModule
    ],
    exports: [ConfirmaDialogComponent],
    entryComponents: [ConfirmaDialogComponent]
})
export class ConfirmaDialogModule { }
