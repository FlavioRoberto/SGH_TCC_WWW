import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'curriculo',
        loadChildren: () => import('./curriculo/curriculo.module').then(m => m.CurriculoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'curso',
        loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'disciplina',
        loadChildren: () => import('./disciplina/disciplinas.module').then(m => m.DisciplinasModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'turno',
        loadChildren: () => import('./turno/turno.module').then(m => m.TurnoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'cargos',
        loadChildren: () => import('./cargos/cargos.module').then(m => m.CargoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'salas',
        loadChildren: () => import('./salas/salas.module').then(m => m.SalasModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }