import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoRoutingModule } from './curriculo.routes.module';

@NgModule({
    declarations: [],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        CurriculoRoutingModule
    ],
    exports: []
})
export class CurriculoModule { }
