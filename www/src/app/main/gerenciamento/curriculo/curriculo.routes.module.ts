import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { CurriculoComponent } from './curriculo.component';


const routes: Routes = [
    {
        path: '',
        component: CurriculoComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurriculoRoutingModule { }