import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'professores',
        loadChildren: () => import('./professores/professores.module').then(m => m.ProfessoresModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'cargo',
        loadChildren: () => import('./cargo/cargo.module').then(m => m.CargoModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CargosRoutingModule { }
