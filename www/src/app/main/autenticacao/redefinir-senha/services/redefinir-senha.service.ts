import { Injectable } from '@angular/core';
import { HttpBaseService } from '@compartilhado/services/http-base.service';
import { routesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';

@Injectable()
export class RedefinirSenhaService extends HttpBaseService<any> {

    rota = new routesApi().getRoutes().usuario;

    redefinirSenha(email: string): Observable<string> {
        return this.post(email, this.rota.redefinirSenha);
    }

}
