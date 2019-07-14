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


@NgModule({
    declarations: [CurriculoComponent],
    imports: [
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CurriculoRoutingModule,
        CompartilhadoModule
    ],
    exports: [CurriculoComponent],
    providers: [
        TurnoResolver,
        CursoResolver
    ]
})
export class CurriculoModule { }
