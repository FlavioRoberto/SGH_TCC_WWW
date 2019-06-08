import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoComponent } from './curriculo.component';
import { MatIconModule, MatTableModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatButtonModule, MatTooltipModule, MatCheckboxModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask'
import { CompartilhadoModule } from '@compartilhado/compartilhado.module';

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
        CompartilhadoModule
    ],
    exports: [CurriculoComponent]
})
export class CurriculoModule { }
