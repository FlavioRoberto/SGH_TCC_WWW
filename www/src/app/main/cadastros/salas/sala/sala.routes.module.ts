import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { SalaComponent } from './sala.component';
import { BlocoResolver } from '../../../../shared/resolvers/bloco.resolver';

const routes: Routes = [
    {
        path: '',
        component: SalaComponent,
        canActivate: [AuthGuard],
        resolve: {
            blocos: BlocoResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaRoutingModule { }
