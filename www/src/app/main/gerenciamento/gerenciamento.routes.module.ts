import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'horarios',
        loadChildren: () => import('./horarios/horario/horarios.module').then(m => m.HorariosModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'relatorios',
        loadChildren: () => import('./Relatorios/relatorios.module').then(m => m.RelatoriosModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }