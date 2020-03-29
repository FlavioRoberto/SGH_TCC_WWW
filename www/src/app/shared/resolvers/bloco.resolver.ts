import { ActivatedRouteSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlocoModel } from 'app/main/gerenciamento/salas/bloco/model/bloco.model';
import { BlocoService } from '../../main/gerenciamento/salas/bloco/service/bloco.service';

@Injectable()
export class BlocoResolver implements Resolve<BlocoModel[]> {

    constructor(private blocoService: BlocoService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<BlocoModel[]> {
        return this.blocoService.listarTodos();
    }
}
