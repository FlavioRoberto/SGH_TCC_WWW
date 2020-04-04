import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: 'bloco',
        loadChildren: () => import('./bloco/bloco.module').then(m => m.BlocoModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'sala',
        loadChildren: () => import('./sala/sala.module').then(m => m.SalaModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalasRoutingModule { }
