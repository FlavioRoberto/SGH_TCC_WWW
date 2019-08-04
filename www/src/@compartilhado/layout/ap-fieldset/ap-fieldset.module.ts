import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule, FuseWidgetModule } from '@fuse/components';
import { MatExpansionModule } from '@angular/material';
import { ApFieldsetComponent } from './ap-fieldset.component';


@NgModule({
    declarations: [ApFieldsetComponent],
    imports: [
        CommonModule,
        MatExpansionModule,
        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ],
    exports: [ApFieldsetComponent]
})
export class ApFieldsetModule { }
