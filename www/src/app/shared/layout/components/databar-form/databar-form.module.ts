import { NgModule } from '@angular/core';
import { DataBarFormComponent } from './databar-form.component';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { DataBarModule, ConfirmaDialogComponent } from '@breaking_dev/ic-databar-lib';

@NgModule({
    declarations: [DataBarFormComponent],
    imports: [DataBarModule, CompartilhadoModule, MaterialCoreModule],
    exports: [DataBarFormComponent, DataBarModule, CompartilhadoModule, MaterialCoreModule]
})
export class DataBarFormModule {
}
