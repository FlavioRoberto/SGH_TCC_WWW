import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoRoutingModule } from './curriculo.routes.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

@NgModule({
    declarations: [],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CurriculoRoutingModule
    ],
    exports: []
})
export class CurriculoModule { }
