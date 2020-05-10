import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/core/services/http-base.service';
import { RoutesApi } from 'app/routes/api.routes';
import { Observable } from 'rxjs';

@Injectable()
export class RedefinirSenhaService extends HttpBaseService<any> {

    rota = new RoutesApi().getRoutes().usuario;

    redefinirSenha(email: string): Observable<string> {
        return this.post(email, this.rota.redefinirSenha);
    }

}
