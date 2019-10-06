import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'professores',
        loadChildren: './professores/professores.module#ProfessoresModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'cargo',
        loadChildren: './cargo/cargo.module#CargoModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CargosRoutingModule { }
