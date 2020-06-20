import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HorarioGeralComponent } from './horario-geral.component';

const routes: Routes = [
    {
        path: '',
        component: HorarioGeralComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorarioGeralRoutingModule { }
