import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoComponent } from './curriculo.component';
import { HeaderDescricaoModule } from 'app/layout/components/header-descricao/header-descricao.module';
import { DataBarModule } from 'app/layout/components/app_components/databar/data-bar.module';
import { MatIconModule, MatTableModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatButtonModule, MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { InputMaxLengthModule } from 'app/layout/components/app_components/input-max-length/input-max-length.module';
import { NgxMaskModule } from 'ngx-mask'

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
        NgxMaskModule.forRoot(),
        TranslateModule,
        FuseSharedModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatCheckboxModule,
        HeaderDescricaoModule,
        DataBarModule,
        InputMaxLengthModule
    ],
    exports: [CurriculoComponent]
})
export class CurriculoModule { }
