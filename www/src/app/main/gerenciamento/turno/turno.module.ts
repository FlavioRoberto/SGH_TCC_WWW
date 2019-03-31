import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TurnoComponent } from './turno.component';
import { MatIconModule } from '@angular/material';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';

const routes = [
    {
        path: 'gerenciamento/turno',
        component: TurnoComponent
    }
];

@NgModule({
    declarations: [TurnoComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatIconModule,
        HeaderDescricaoModule
    ],
    exports: [TurnoComponent]
})
export class TurnoModule {}
