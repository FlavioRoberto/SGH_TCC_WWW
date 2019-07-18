import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { PerfilResolver } from '../resolvers/perfil.resolver';

const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
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