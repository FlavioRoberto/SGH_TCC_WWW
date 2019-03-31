import { NgModule } from '@angular/core';
import { HeaderDescricaoComponent } from './header-descricao.component';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    declarations: [HeaderDescricaoComponent],
    imports: [MatIconModule, CommonModule, FuseSharedModule],
    exports: [HeaderDescricaoComponent]
})
export class HeaderDescricaoModule {}
