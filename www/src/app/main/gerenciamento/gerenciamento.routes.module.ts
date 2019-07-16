import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'curriculo',
        loadChildren: './curriculo/curriculo.module#CurriculoModule'
    },
    {
        path: 'curso',
        loadChildren: './curso/curso.module#CursoModule'
    },
    {
        path: 'disciplina',
        loadChildren: './disciplina/disciplinas.module#DisciplinasModule'
    },
    {
        path: 'turno',
        loadChildren: './turno/turno.module#TurnoModule'
    },
    {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }