import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
    { path: 'gerenciamento', loadChildren: './gerenciamento/gerenciamento.module#GerenciamentoModule' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }