import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { DataBarFormModule } from 'app/shared/layout/components/databar-form/databar-form.module';
import { BlocoComponent } from './bloco.component';

@NgModule({
    imports: [
        FuseSharedModule,
        DataBarFormModule
    ],
    declarations: [BlocoComponent],
    exports: [BlocoComponent]
})
export class BlocoModule { }
