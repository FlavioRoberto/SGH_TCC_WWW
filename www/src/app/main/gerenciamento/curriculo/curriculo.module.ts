import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoComponent } from './curriculo.component';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';

const routes = [
    {
        path: 'gerenciamento/curriculo',
        component: CurriculoComponent
    }
];

@NgModule({
    declarations: [CurriculoComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        HeaderDescricaoModule
    ],
    exports: [CurriculoComponent]
})
export class CurriculoModule {}
