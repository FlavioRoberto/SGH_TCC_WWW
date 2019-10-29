import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule, FuseWidgetModule } from '@fuse/components';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApContainerComponent } from './ap-container.component';


@NgModule({
    declarations: [ApContainerComponent],
    imports: [
        CommonModule,
        MatExpansionModule,
        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ],
    exports: [ApContainerComponent]
})
export class ApContainerModule { }
