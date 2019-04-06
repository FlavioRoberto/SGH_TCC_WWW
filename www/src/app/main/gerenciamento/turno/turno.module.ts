import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TurnoComponent } from './turno.component';
import {
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatFormFieldControl,
    MatInputModule
} from '@angular/material';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DataBarModule } from 'app/layout/components/databar/data-bar.module';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';

const routes = [
    {
        path: 'gerenciamento/turno',
        component: TurnoComponent
    }
];

@NgModule({
    declarations: [TurnoComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        HeaderDescricaoModule,
        DataBarModule,
        InputMaxLengthModule
    ],
    exports: [TurnoComponent]
})
export class TurnoModule {}
