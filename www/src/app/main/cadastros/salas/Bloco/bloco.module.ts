import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { BlocoComponent } from './bloco.component';
import { BlocoRoutingModule } from './bloco.routes.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        FuseSharedModule,
        DataBarFormModule,
        BlocoRoutingModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [BlocoComponent]
})
export class BlocoModule { }
