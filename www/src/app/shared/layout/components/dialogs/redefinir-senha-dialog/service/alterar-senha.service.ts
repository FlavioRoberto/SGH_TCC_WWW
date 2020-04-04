import { IAtualizarSenha } from '../models/IAtualizarSenha';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { Observable } from 'rxjs';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable()
export class AlterarSenhaService extends HttpBaseService<any>{

    rota = new routesApi().getRoutes().usuario;

    atualizarSenha(dados: IAtualizarSenha): Observable<string> {
        return this.post<any>(dados, this.rota.atualizarSenha);
    }

}
