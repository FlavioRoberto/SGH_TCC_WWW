import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { ApInputMaxLength } from './input-max-length.component';


@NgModule({
    declarations: [ApInputMaxLength],
    imports: [
        CommonModule,
        MaterialCoreModule,
        FuseSharedModule,
        TranslateModule
    ],
    exports: [ApInputMaxLength]
})
export class InputMaxLengthModule { }
