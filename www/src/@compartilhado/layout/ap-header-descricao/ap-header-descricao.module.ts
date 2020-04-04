import { NgModule } from '@angular/core';
import { ApHeaderDescricaoComponent } from './ap-header-descricao.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { MaterialCoreModule } from 'app/core/modules/material-core.module';

@NgModule({
    declarations: [ApHeaderDescricaoComponent],
    imports: [MatIconModule, CommonModule, FuseSharedModule, MaterialCoreModule],
    exports: [ApHeaderDescricaoComponent]
})
export class ApHeaderDescricaoModule { }
