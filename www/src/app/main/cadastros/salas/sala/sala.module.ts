import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { SalaRoutingModule } from './sala.routes.module';
import { SalaComponent } from './sala.component';
import { DataBarFormModule } from '../../../../shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';
import { BlocoResolver } from 'app/shared/resolvers/bloco.resolver';
import { BlocoService } from '../bloco/service/bloco.service';

@NgModule({
    imports: [
        FuseSharedModule,
        DataBarFormModule,
        SalaRoutingModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [SalaComponent],
    providers: [BlocoService, BlocoResolver]
})
export class SalaModule { }
