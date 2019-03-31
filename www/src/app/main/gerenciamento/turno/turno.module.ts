import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { TurnoComponent } from './turno.component';

const routes = [
    {
        path: 'gerenciamento/turno',
        component: TurnoComponent
    }
];

@NgModule({
    declarations: [TurnoComponent],
    imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
    exports: [TurnoComponent]
})
export class TurnoModule {}
