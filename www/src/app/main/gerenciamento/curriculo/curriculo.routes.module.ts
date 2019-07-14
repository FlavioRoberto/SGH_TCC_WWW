import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculoComponent } from './curriculo.component';
import { TurnoResolver } from '../resolvers/turno.resolver';
import { CursoResolver } from '../resolvers/curso.resolver';

const routes: Routes = [
    {
        path: '',
        component: CurriculoComponent,
        resolve: {
            turnos: TurnoResolver,
            cursos: CursoResolver
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