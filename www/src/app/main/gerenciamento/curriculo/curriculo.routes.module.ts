import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculoComponent } from './curriculo.component';

const routes: Routes = [
    {
        path: '',
        component: CurriculoComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurriculoRoutingModule { }