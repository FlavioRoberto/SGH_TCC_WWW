import { NgModule } from '@angular/core';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { HorarioGeralRoutingModule } from './horario-geral.routes.module';
import { HorarioGeralComponent } from './horario-geral.component';
import { NgxMaskModule } from 'ngx-mask';
import { HorarioGeralRelatorioService } from './services/horario-geral.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [HorarioGeralComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        HorarioGeralRoutingModule,
        PdfViewerModule,
        NgxMaskModule.forRoot()
    ],
    exports: [],
    providers: [HorarioGeralRelatorioService]
})
export class HorarioGeralModule { }
