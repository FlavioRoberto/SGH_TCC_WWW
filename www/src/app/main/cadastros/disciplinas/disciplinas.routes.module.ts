import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'disciplina',
        loadChildren: () => import('./disciplina/disciplina.module').then(m => m.DisciplinaModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'tipo',
        loadChildren: () => import('./tipo/disciplina-tipo.module').then(m => m.DisciplinaTipoModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinasRoutingModule { }