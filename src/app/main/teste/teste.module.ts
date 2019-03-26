import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TesteComponent } from './teste.component';

const routes = [
    {
        path: 'teste',
        component: TesteComponent
    }
];

@NgModule({
    declarations: [TesteComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [TesteComponent]
})
export class TesteModule {}
