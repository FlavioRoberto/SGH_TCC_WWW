import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'curriculo',
        loadChildren: './curriculo/curriculo.module#CurriculoModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'curso',
        loadChildren: './curso/curso.module#CursoModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'disciplina',
        loadChildren: './disciplina/disciplinas.module#DisciplinasModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'turno',
        loadChildren: './turno/turno.module#TurnoModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule',
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }