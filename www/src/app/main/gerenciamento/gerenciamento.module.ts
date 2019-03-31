import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    // {
    //     path: 'turno',
    //     //component: SampleComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule]  
})
export class GerenciamentoModule {}
