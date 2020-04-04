import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'autenticacao', loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule) },
    {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'cadastros',
        loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }