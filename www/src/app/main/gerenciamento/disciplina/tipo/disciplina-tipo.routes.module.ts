import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaTipoComponent } from './disciplina-tipo.component';

const routes: Routes = [
    {
        path: '',
        component: DisciplinaTipoComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinaTipoRoutingModule { }