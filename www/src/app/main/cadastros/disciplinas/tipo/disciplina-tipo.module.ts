import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DisciplinaTipoComponent } from './disciplina-tipo.component';
import { DisciplinaTipoRoutingModule } from './disciplina-tipo.routes.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    declarations: [DisciplinaTipoComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        DisciplinaTipoRoutingModule,
        DataBarFormModule,
        NgxMaskModule.forRoot()
    ],
    exports: [DisciplinaTipoComponent]
})
export class DisciplinaTipoModule { }
