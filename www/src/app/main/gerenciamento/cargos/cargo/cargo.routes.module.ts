import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';
import { CargoComponent } from './cargo.component';
import { CurriculoResolver } from '../../resolvers/curriculo.resolver';

const routes: Routes = [
    {
        path: '',
        component: CargoComponent,
        canActivate: [AuthGuard],
        resolve: {
            curriculos: CurriculoResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CargoRoutingModule { }
