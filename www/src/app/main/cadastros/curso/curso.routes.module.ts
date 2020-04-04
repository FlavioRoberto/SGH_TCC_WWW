import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso.component';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: CursoComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursoRoutingModule { }