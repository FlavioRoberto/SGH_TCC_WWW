import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask'
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { CurriculoComponent } from './curriculo.component';
import { CurriculoRoutingModule } from './curriculo.routes.module';
import { TurnoResolver } from '../resolvers/turno.resolver';
import { CursoResolver } from '../resolvers/curso.resolver';
import { DataBarFormModule } from 'app/layout/components/databar-form/databar-form.module';


@NgModule({
    declarations: [CurriculoComponent],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CurriculoRoutingModule,
        CompartilhadoModule,
        DataBarFormModule
    ],
    exports: [CurriculoComponent],
    providers: [
        TurnoResolver,
        CursoResolver
    ]
})
export class CurriculoModule { }
