import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DisciplinaTipoComponent } from './disciplina-tipo.component';
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

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
        CompartilhadoModule
    ],
    exports: [DisciplinaTipoComponent]
})
export class DisciplinaTipoModule { }
