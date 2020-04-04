import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { HorariosRoutingModule } from './horarios.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';
import { HorariosComponent } from './horarios.component';

@NgModule({
    declarations: [HorariosComponent],
    imports: [
        FuseSharedModule,
        MaterialCoreModule,
        HorariosRoutingModule
    ],
    exports: []
})
export class HorariosModule { }
