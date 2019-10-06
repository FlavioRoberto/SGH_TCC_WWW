import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';
import { CargoRoutingModule } from './cargo.routes.module';
import { CargoComponent } from './cargo.component';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { CargoDataBarBindService } from './services/cargo.databar.service';

@NgModule({
    imports: [
        DataBarFormModule,
        FuseSharedModule,
        CargoRoutingModule
    ],
    declarations: [CargoComponent],
    providers: [CargoDataBarBindService]
})
export class CargoModule { }