import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnoComponent } from './turno.component';

const routes: Routes = [
    {
        path: '',
        component: TurnoComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurnoRoutingModule { }