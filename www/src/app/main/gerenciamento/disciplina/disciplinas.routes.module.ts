import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'cadastro',
        loadChildren: './cadastro/disciplina.module#DisciplinaModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'tipo',
        loadChildren: './tipo/disciplina-tipo.module#DisciplinaTipoModule',
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinasRoutingModule { }