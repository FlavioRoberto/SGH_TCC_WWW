import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HorariosComponent } from './horarios.component';


const routes: Routes = [
    {
        path: '',
        component: HorariosComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorariosRoutingModule { }