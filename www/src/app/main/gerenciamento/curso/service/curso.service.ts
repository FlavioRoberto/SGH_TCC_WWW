import { Injectable } from '@angular/core';
import { HttpBaseService } from 'app/compartilhado/services/http-base.service';
import { ICurso } from '../model/curso.model';
import { CursoPaginado } from '../model/curso.paginacao';
import { Observable } from 'rxjs';
import { routesApi } from 'app/routes/routes.api';

@Injectable({
    providedIn: 'root'
})
export class CursoService extends HttpBaseService<ICurso> {

    private rotaCurso = this.rota.curso;

    listarPaginacao(curso: CursoPaginado): Observable<CursoPaginado> {
        console.log(curso);
        return this.postPaginacao(curso, this.rotaCurso.listarPaginacao);
    }

    criarcurso(curso: ICurso): Observable<ICurso> {
        if (curso.codigo == null) {
            curso.codigo = 0;
        }
        return this.post(curso, this.rotaCurso.criar);
    }

    editarcurso(curso: ICurso): Observable<ICurso> {
        return this.put(curso, this.rotaCurso.editar);
    }

    removercurso(codigo: number): Observable<any> {
        return this.delete(this.rotaCurso.remover + codigo);
    }
}