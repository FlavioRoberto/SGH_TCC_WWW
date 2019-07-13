import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { TurnoComponent } from './turno.component';
import { TurnoRoutingModule } from './turno.routes.module';

@NgModule({
    declarations: [TurnoComponent],
    imports: [
        TurnoRoutingModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule
    ],
    exports: [TurnoComponent]
})
export class TurnoModule { }
