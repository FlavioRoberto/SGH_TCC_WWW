import { Observable } from 'rxjs';

import { ILogin } from '../models/ilogin';
import { routesApi } from 'app/routes/api.routes';
import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';

@Injectable()
export class LoginService extends HttpBaseService<any> {

    rota = new routesApi().getRoutes().usuario;

    autenticar(dados: ILogin): Observable<string> {
        return this.post<any>(dados, this.rota.autenticar);
    }

}
