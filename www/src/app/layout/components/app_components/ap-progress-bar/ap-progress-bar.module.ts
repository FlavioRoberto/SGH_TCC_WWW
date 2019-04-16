import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';
import { ApProgressBarComponent } from './ap-progress-bar.component';


@NgModule({
    declarations: [ApProgressBarComponent],
    imports: [
        CommonModule,
        MatProgressBarModule
    ],
    exports: [ApProgressBarComponent],
})
export class ApProgressBarModule { }
