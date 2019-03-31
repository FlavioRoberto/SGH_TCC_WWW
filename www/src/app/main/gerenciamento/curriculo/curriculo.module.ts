import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CurriculoComponent } from './curriculo.component';

const routes = [
    {
        path: 'gerenciamento/curriculo',
        component: CurriculoComponent
    }
];

@NgModule({
    declarations: [CurriculoComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [CurriculoComponent]
})
export class CurriculoModule {}
