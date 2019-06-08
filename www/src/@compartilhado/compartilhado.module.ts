import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLayoutModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLayoutModule
    ]
})
export class CompartilhadoModule {
}
