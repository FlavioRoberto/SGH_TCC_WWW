import { environment } from 'environments/environment';


export class routesApi {
    private API: string;

    constructor() {
        this.API = `${environment.url}api`;
    }

    private construirRotaPadrao(rota: string): any {
        return {
            listarPaginacao: this.API + `/${rota}/listarPaginacao`,
            criar: this.API + `/${rota}/criar`,
            editar: this.API + `/${rota}/editar`,
            remover: this.API + `/${rota}/remover?codigo=`,
            listarTodos: this.API + `/${rota}/listarTodos`,
        };
    }

    private construirRotaUsuario(rota: string): any {
        rota = this.construirRotaPadrao(rota);
        rota['autenticar'] = this.API + `/usuario/autenticar`;
        return rota;
    }

    getRoutes(): any {
        return {
            turno: this.construirRotaPadrao('turno'),
            curso: this.construirRotaPadrao('curso'),
            disciplina: {
                tipo: this.construirRotaPadrao('disciplinaTipo'),
                disciplina: this.construirRotaPadrao('disciplina')
            },
            perfil: this.construirRotaPadrao('perfil'),
            usuario: this.construirRotaUsuario('usuario'),
        };

    }
}
