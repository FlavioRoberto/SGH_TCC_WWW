import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DisciplinaComponent } from './disciplina.component';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

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
        CompartilhadoModule
    ],
    exports: [DisciplinaComponent]
})
export class DisciplinaModule { }
