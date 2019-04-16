import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarComponent } from './data-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmaDialogModule } from '../confirma-dialog/confirma-dialog.module';
import { FuseProgressBarModule } from '@fuse/components';
import { ApProgressBarModule } from '../ap-progress-bar/ap-progress-bar.module';

@NgModule({
    declarations: [DataBarComponent],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSnackBarModule,
        FuseSharedModule,
        BrowserModule,
        FlexLayoutModule,
        ConfirmaDialogModule,
        FuseProgressBarModule,
        ApProgressBarModule
    ],
    exports: [DataBarComponent]
})
export class DataBarModule { }
