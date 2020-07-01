import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'horario-geral',
        loadChildren: () => import('./horario-geral/horario-geral.module').then(m => m.HorarioGeralModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'horario-individual',
        loadChildren: () => import('./horario-individual/horario-individual.module').then(m => m.HorarioIndividualModule),
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
