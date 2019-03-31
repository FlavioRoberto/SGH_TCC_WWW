import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        MatMomentDateModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class MaterialModule {}
