import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DisciplinaTipoComponent } from './tabs/tipo/disciplina-tipo.component';
import { DisciplinaMenuComponent } from './disciplina-menu.component';
import { DataBarModule } from 'app/layout/components/app_components/databar/data-bar.module';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';

const routes = [
    {
        path: 'gerenciamento/disciplina',
        component: DisciplinaMenuComponent
    }
];

@NgModule({
    declarations: [DisciplinaMenuComponent, DisciplinaTipoComponent],
    imports: [
        MatTabsModule,
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
    exports: [DisciplinaMenuComponent]
})
export class DisciplinaModule { }
