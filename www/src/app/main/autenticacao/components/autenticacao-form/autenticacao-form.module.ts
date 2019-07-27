import { NgModule } from '@angular/core';

import { AutenticacaoFormComponent } from './autenticacao-form.component';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    imports: [       
        FuseSharedModule
    ],
    declarations: [AutenticacaoFormComponent],
    exports: [AutenticacaoFormComponent]
})
export class AutenticacaoFormModule {

}
