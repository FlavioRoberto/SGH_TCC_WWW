import { environment } from 'environments/environment';


export class routesApi {
    private API: string;

    constructor() {
        this.API = `${environment.url}api`;
    }

    private construitRotaPadrao(rota: string): any {
        return {
            listarPaginacao: this.API + '/turno/listarPaginacao',
            criar: this.API + '/turno/criar',
            editar: this.API + '/turno/editar',
            remover: this.API + '/turno/remover?codigo='
        };
    }

    getRoutes(): any {
        return {
            turno: this.construitRotaPadrao('turno'),
            curso: this.construitRotaPadrao('curso'),
            disciplina: {
                tipo: this.construitRotaPadrao('tipo')
            }
        };

    }
}
