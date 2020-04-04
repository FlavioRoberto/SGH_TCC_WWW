import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TurnoComponent } from './turno.component';
import { TurnoRoutingModule } from './turno.routes.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [TurnoComponent],
    imports: [
        TurnoRoutingModule,
        TranslateModule,
        FuseSharedModule,
        DataBarFormModule,
        NgxMaskModule.forRoot()
    ],
    exports: [TurnoComponent]
})
export class TurnoModule { }
