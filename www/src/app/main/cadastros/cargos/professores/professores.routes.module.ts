import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { CursoResolver } from 'app/shared/resolvers/curso.resolver';
import { ProfessoresComponent } from './professores.component';

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

