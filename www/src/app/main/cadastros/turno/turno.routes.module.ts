import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnoComponent } from './turno.component';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: TurnoComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurnoRoutingModule { }