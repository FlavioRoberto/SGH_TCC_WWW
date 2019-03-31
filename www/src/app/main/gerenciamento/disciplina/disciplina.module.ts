import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { DisciplinaComponent } from './disciplina.component';

const routes = [
    {
        path: 'gerenciamento/disciplina',
        component: DisciplinaComponent
    }
];

@NgModule({
    declarations: [DisciplinaComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [DisciplinaComponent]
})
export class DisciplinaModule {}
