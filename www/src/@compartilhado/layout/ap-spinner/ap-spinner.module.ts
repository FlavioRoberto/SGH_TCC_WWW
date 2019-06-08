import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApSpinnerComponent } from './ap-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
    declarations: [ApSpinnerComponent],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    exports: [ApSpinnerComponent],
})
export class ApSpinnerModule { }
