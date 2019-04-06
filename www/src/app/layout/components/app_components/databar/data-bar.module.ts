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

@NgModule({
    declarations: [DataBarComponent],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatTooltipModule,
        FuseSharedModule,
        BrowserModule,
        FlexLayoutModule
    ],
    exports: [DataBarComponent]
})
export class DataBarModule {}
