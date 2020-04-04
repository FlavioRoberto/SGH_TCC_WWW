import { NgModule } from '@angular/core';

import { CompartilhadoModule } from '@compartilhado/compartilhado.module';
import { DisciplinasRoutingModule } from './disciplinas.routes.module';


@NgModule({
    imports: [
        CompartilhadoModule,
        DisciplinasRoutingModule
    ]
})
export class DisciplinasModule { }
