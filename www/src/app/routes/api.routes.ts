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

    private construirRotaUsuario(): any {
        const rota = this.construirRotaPadrao('usuario');
        rota['autenticar'] = `${this.API}/usuario/autenticar`;
        rota['redefinirSenha'] = `${this.API}/usuario/redefinirSenha`;
        rota['atualizarSenha'] = `${this.API}/usuario/atualizarSenha`;
        return rota;
    }

    private construirRotaDisciplina(): any {
        const rota = this.construirRotaPadrao('disciplina');
        rota['listarPorDescricao'] = `${this.API}/disciplina/listarPorDescricao`;
        return rota;
    }

    getRoutes(): any {
        return {
            turno: this.construirRotaPadrao('turno'),
            curso: this.construirRotaPadrao('curso'),
            disciplina: {
                tipo: this.construirRotaPadrao('disciplinaTipo'),
                disciplina: this.construirRotaDisciplina()
            },
            perfil: this.construirRotaPadrao('perfil'),
            usuario: this.construirRotaUsuario(),
            curriculo: this.construirRotaPadrao('curriculo')
        };

    }
}
