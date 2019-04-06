import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { SampleModule } from './sample/sample.module';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        TranslateModule,
        FuseSharedModule,
        SampleModule,
        GerenciamentoModule
    ]
})
export class MainModule {}
