import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculoComponent } from './curriculo.component';
import { TurnoResolver } from '../../../shared/resolvers/turno.resolver';
import { CursoResolver } from '../../../shared/resolvers/curso.resolver';
import { LoginGuard } from 'app/core/auth/login.guard';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { TipoResolver } from 'app/shared/resolvers/tipo.resolver';

const routes: Routes = [
    {
        path: '',
        component: CurriculoComponent,
        canActivate: [AuthGuard],
        resolve: {
            turnos: TurnoResolver,
            cursos: CursoResolver,
            tipos: TipoResolver
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        TurnoResolver
    ]
})
export class CurriculoRoutingModule { }