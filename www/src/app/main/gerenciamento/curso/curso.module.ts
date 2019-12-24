import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso.routes.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';


@NgModule({
    declarations: [CursoComponent],
    imports: [
        TranslateModule,
        FuseSharedModule,
        CursoRoutingModule,
        DataBarFormModule
    ],
    exports: [CursoComponent]
})
export class CursoModule { }
