import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlocoComponent } from './bloco.component';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BlocoComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlocoRoutingModule { }
