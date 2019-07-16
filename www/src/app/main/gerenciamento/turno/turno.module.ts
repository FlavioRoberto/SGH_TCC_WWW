import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { TurnoComponent } from './turno.component';
import { TurnoRoutingModule } from './turno.routes.module';
import { DataBarFormModule } from 'app/layout/components/databar-form/databar-form.module';

@NgModule({
    declarations: [TurnoComponent],
    imports: [
        TurnoRoutingModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule,
        DataBarFormModule
    ],
    exports: [TurnoComponent]
})
export class TurnoModule { }
