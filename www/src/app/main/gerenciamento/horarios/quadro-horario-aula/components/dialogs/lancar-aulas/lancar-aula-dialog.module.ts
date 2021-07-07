import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { CargoService } from 'app/main/cadastros/cargos/cargo/services/cargo.service';
import { LancarAulaDialogComponent } from './lancar-aula-dialog.component';
import { LancarAulaDialogService } from './lancar-aula-dialog.service';
import { LancarAulaService } from './services/lancar-aulas.service';

@NgModule({
    imports: [
        FuseSharedModule,
        MaterialCoreModule
    ],
    declarations: [LancarAulaDialogComponent],
    providers: [CargoService, LancarAulaDialogService, LancarAulaService]
})
export class LancarAulaDialogModule {
}
