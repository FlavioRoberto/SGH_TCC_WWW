import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CursoComponent } from './curso.component';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';

const routes = [
    {
        path: 'gerenciamento/curso',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [CursoComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        HeaderDescricaoModule
    ],
    exports: [CursoComponent]
})
export class CursoModule {}
