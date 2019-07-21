import { HttpBaseService } from '@compartilhado/services/http-base.service';
import { Observable } from 'rxjs';

import { ILogin } from '../models/ilogin';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService extends HttpBaseService<any> {

    rota = new routesApi().getRoutes().usuario;

    autenticar(dados: ILogin): Observable<string> {
        return this.post(dados, this.rota.autenticar);
    }

}
