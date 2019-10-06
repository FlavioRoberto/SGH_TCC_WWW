import { NgModule } from '@angular/core';
import { DataBarFormComponent } from './databar-form.component';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

@NgModule({
    declarations: [DataBarFormComponent],
    imports: [CompartilhadoModule, MaterialCoreModule],
    exports: [DataBarFormComponent, CompartilhadoModule, MaterialCoreModule]
})
export class DataBarFormModule {
}