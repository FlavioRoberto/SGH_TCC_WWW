import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
