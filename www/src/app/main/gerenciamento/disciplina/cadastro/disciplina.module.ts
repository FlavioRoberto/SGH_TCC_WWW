import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DataBarModule } from 'app/layout/components/app_components/databar/data-bar.module';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';
import { DisciplinaComponent } from './disciplina.component';

const routes = [
    {
        path: 'gerenciamento/disciplina/cadastro',
        component: DisciplinaComponent
    }
];

@NgModule({
    declarations: [DisciplinaComponent],
    imports: [
        MatTabsModule,
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        HeaderDescricaoModule,
        DataBarModule,
        InputMaxLengthModule
    ],
    exports: [DisciplinaComponent]
})
export class DisciplinaModule { }
