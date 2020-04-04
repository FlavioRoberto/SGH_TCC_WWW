import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { HorariosRoutingModule } from './horarios.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

@NgModule({
    declarations: [],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        HorariosRoutingModule
    ],
    exports: []
})
export class HorariosModule { }
