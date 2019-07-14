import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { MaterialCoreModule } from '@compartilhado/material-core/material-core.module';

import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaRoutingModule } from './disciplina.routes.module';
import { TipoResolver } from '../../resolvers/tipo.resolver';


@NgModule({
    declarations: [DisciplinaComponent],
    imports: [
        DisciplinaRoutingModule,
        TranslateModule,
        FuseSharedModule,
        MaterialCoreModule,
        CompartilhadoModule
    ],
    exports: [DisciplinaComponent],
    providers: [
        TipoResolver
    ]
})
export class DisciplinaModule { }
