import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina.routes.module';
import { TipoResolver } from '../../../../shared/resolvers/tipo.resolver';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    declarations: [DisciplinaComponent],
    imports: [
        DisciplinaRoutingModule,
        TranslateModule,
        FuseSharedModule,
        DataBarFormModule,
        NgxMaskModule.forRoot()
    ],
    exports: [DisciplinaComponent],
    providers: [
        TipoResolver
    ]
})
export class DisciplinaModule { }
