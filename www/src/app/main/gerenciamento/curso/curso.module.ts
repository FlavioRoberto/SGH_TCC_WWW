import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CursoComponent } from './curso.component';
import { MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

const routes = [
    {
        path: 'gerenciamento/curso',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [CursoComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        CompartilhadoModule
    ],
    exports: [CursoComponent]
})
export class CursoModule { }
