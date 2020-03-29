import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';
import { SalaComponent } from './sala.component';

const routes: Routes = [
    {
        path: '',
        component: SalaComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaRoutingModule {}
