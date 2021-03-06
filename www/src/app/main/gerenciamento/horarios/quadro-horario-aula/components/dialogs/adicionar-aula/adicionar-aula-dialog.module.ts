import { NgModule } from "@angular/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { MaterialCoreModule } from "app/core/modules/material-core.module";
import { AdicionarAulaDialogComponent } from "./adicionar-aula.dialog.component";
import { CargoService } from "app/main/cadastros/cargos/cargo/services/cargo.service";
import { AdicionarAulaService } from "./services/adicionar-aula.service";
import { AdicionarAulaBaseService } from "../base/adicionar-aula-base.service";

@NgModule({
    imports: [FuseSharedModule, MaterialCoreModule],
    declarations: [AdicionarAulaDialogComponent],
    providers: [CargoService, AdicionarAulaService, AdicionarAulaBaseService],
})
export class AdicionarAulaDialogModule {}
