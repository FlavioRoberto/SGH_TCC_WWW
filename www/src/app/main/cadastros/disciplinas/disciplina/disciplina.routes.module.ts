import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina.component';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DisciplinaComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinaRoutingModule { }