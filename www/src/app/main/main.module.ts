import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { SampleModule } from './sample/sample.module';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';

@NgModule({
    imports: [TranslateModule, FuseSharedModule, SampleModule,GerenciamentoModule]
})
export class MainModule {}
