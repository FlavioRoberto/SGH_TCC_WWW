import { environment } from 'environments/environment';


export class routesApi {
    private API: string;

    constructor() {
        this.API = `${environment.url}api`;
    }

    private construitRotaPadrao(rota: string): any {
        return {
            listarPaginacao: this.API + `/${rota}/listarPaginacao`,
            criar: this.API + `/${rota}/criar`,
            editar: this.API + `/${rota}/editar`,
            remover: this.API + `/${rota}/remover?codigo=`,
            listarTodos: this.API + `/${rota}/listarTodos`,
        };
    }

    getRoutes(): any {
        return {
            turno: this.construitRotaPadrao('turno'),
            curso: this.construitRotaPadrao('curso'),
            disciplina: {
                tipo: this.construitRotaPadrao('disciplinaTipo'),
                disciplina: this.construitRotaPadrao('disciplina')
            },
            usuario: this.construitRotaPadrao('usuario')
        };

    }
}
