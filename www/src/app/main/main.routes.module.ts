import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'autenticacao', loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule' },
    {
        path: 'inicio',
        loadChildren: './inicio/inicio.module#InicioModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'gerenciamento',
        loadChildren: './gerenciamento/gerenciamento.module#GerenciamentoModule',
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }