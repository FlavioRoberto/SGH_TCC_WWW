import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DataBarModule } from 'app/layout/components/app_components/databar/data-bar.module';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';
import { DisciplinaTipoComponent } from './disciplina-tipo.component';

const routes = [
    {
        path: 'gerenciamento/disciplina/tipo',
        component: DisciplinaTipoComponent
    }
];

@NgModule({
    declarations: [DisciplinaTipoComponent],
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
    exports: [DisciplinaTipoComponent]
})
export class DisciplinaTipoModule { }
