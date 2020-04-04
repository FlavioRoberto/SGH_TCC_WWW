import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { PerfilResolver } from '../../../shared/resolvers/perfil.resolver';
import { AuthGuard } from 'app/core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
        canActivate: [AuthGuard],
        resolve: {
            perfis: PerfilResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }