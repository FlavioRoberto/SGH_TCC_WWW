import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CursoComponent } from './curso.component';

const routes = [
    {
        path: 'gerenciamento/curso',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [CursoComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [CursoComponent]
})
export class CursoModule {}
