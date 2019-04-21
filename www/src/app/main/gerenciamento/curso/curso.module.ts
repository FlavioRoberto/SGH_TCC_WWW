import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CursoComponent } from './curso.component';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DataBarModule } from 'app/layout/components/app_components/databar/data-bar.module';
import { MatFormFieldModule, MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';

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
        HeaderDescricaoModule,
        DataBarModule,
        InputMaxLengthModule
    ],
    exports: [CursoComponent]
})
export class CursoModule { }
