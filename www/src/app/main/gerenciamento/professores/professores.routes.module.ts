import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';
import { ProfessoresComponent } from './professores.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessoresComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

