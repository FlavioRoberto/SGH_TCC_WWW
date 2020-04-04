import { NgModule } from '@angular/core';
import { DataBarFormComponent } from './databar-form.component';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { DataBarModule } from '@breaking_dev/ic-databar-lib';

@NgModule({
    declarations: [DataBarFormComponent],
    imports: [DataBarModule, CompartilhadoModule, MaterialCoreModule],
    exports: [DataBarFormComponent, CompartilhadoModule, MaterialCoreModule]
})
export class DataBarFormModule {
}
