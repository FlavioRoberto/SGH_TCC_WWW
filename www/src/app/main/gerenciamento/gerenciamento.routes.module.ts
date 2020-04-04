import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'horarios',
        loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }