import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina.component';
import { TipoResolver } from '../../resolvers/tipo.resolver';

const routes: Routes = [
    {
        path: '',
        component: DisciplinaComponent,
        resolve: {
            tipos: TipoResolver
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisciplinaRoutingModule { }