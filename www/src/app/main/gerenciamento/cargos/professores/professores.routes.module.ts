import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@compartilhado/core/auth/auth.guard';
import { ProfessoresComponent } from './professores.component';
import { CursoResolver } from '../../../../shared/resolvers/curso.resolver';

const routes: Routes = [
    {
        path: '',
        component: ProfessoresComponent,
        canActivate: [AuthGuard],
        resolve: {
            cursos: CursoResolver
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

