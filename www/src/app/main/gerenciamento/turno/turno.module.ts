import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TurnoComponent } from './turno.component';
import {
    MatIconModule,
    MatTableModule,
    MatInputModule
} from '@angular/material';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

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
        CompartilhadoModule
    ],
    exports: [TurnoComponent]
})
export class TurnoModule { }
