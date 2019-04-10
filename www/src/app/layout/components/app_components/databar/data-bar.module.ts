import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarComponent } from './data-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmaDialogModule } from '../confirma-dialog/confirma-dialog.module';

@NgModule({
    declarations: [DataBarComponent],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        FuseSharedModule,
        BrowserModule,
        FlexLayoutModule,
        ConfirmaDialogModule
    ],
    exports: [DataBarComponent]
})
export class DataBarModule { }
