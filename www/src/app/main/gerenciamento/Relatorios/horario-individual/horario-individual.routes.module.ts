import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HorarioIndividualComponent } from './horario-individual.component';

const routes: Routes = [
    {
        path: '',
        component: HorarioIndividualComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorarioIndividualRoutingModule { }
