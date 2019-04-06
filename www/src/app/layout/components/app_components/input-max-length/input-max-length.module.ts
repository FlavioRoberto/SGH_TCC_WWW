import { NgModule } from '@angular/core';
import { InputMaxLength } from './input-max-length.component';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
    declarations: [InputMaxLength],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        TranslateModule
    ],
    exports: [InputMaxLength]
})
export class InputMaxLengthModule { }
