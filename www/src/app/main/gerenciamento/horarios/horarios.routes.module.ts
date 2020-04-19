import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HorariosComponent } from './horario/horarios.component';


const routes: Routes = [
    {
        path: '',
        component: HorariosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: ':codigoHorario/quadro-de-horario',
        loadChildren: () => import('./quadro-horario-aula/quadro-horario-aula.module').then(m => m.QuadroHorarioAulaModule),
        canActivate: [AuthGuard]
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorariosRoutingModule { }