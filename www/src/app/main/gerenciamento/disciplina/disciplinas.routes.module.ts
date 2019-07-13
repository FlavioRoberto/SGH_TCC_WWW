import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'cadastro',
        loadChildren: './cadastro/disciplina.module#DisciplinaModule'
    },
    {
        path: 'tipo',
        loadChildren: './tipo/disciplina-tipo.module#DisciplinaTipoModule'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinasRoutingModule { }