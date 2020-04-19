import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { QuadroHorarioAulaComponent } from './quadro-horario-aula.component';


const routes: Routes = [
    {
        path: '',
        component: QuadroHorarioAulaComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuadroHorarioAulasRoutingModule { }