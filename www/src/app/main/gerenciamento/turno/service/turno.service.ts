import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITurno } from '../model/turno.interface';
import { BaseService } from 'app/compartilhado/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class TurnoService extends BaseService {

    listarPeloCodigo(codigo: number): Observable<ITurno[]> {
        return this.http.get<ITurno[]>(
            this.rota.listarPor + '/' + codigo
        );
    }
}
