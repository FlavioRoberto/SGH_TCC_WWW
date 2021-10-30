import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { CargoService } from 'app/main/cadastros/cargos/cargo/services/cargo.service';
import { VincularSalaService } from './services/vincular-sala.service';
import { VincularSalaDialogService } from './vincular-sala-dialog.service';
import { VincularSalaDialogComponent } from './vincular-sala.component';

@NgModule({
    imports: [
        FuseSharedModule,
        MaterialCoreModule
    ],
    declarations: [VincularSalaDialogComponent],
    providers: [CargoService, VincularSalaDialogService, VincularSalaService]
})
export class VincularSalaDialogModule {
}
