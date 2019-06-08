import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { ApProgressBarComponent } from './ap-progress-bar.component';


@NgModule({
    declarations: [ApProgressBarComponent],
    imports: [
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    exports: [ApProgressBarComponent],
})
export class ApProgressBarModule { }
