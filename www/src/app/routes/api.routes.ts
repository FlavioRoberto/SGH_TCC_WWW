import { environment } from 'environments/environment';


export class RoutesApi {
    private API: string;

    constructor() {
        this.API = `${environment.url}api`;
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
            curriculo: this.construirRotaPadrao('curriculo'),
            professor: this.construirRotaProfessor(),
            cargo: this.construirRotaCargo(),
            bloco: this.construirRotaPadrao('bloco'),
            sala: this.construirRotaPadrao('sala'),
            horario: {
                base: `${this.API}/horario-aula`,
                criar: `${this.API}/horario-aula/criar`,
                listar: `${this.API}/horario-aula/listar`,
                remover: `${this.API}/horario-aula/remover`,
                editar: `${this.API}/horario-aula/editar`,
            },
            aula: {
                criar: `${this.API}/aula/criar`,
                lancar: `${this.API}/aula/lancar`,
                remover: `${this.API}/aula`,
                definirSala: `${this.API}/aula/definir-sala`
            },
            relatorios: {
                horarioGeral: `${this.API}/relatorios/horario-geral`,
                horarioIndividual: `${this.API}/relatorios/horario-individual`
            }
        };

    }


    private construirRotaPadrao(rota: string): any {
        return {
            base: this.API + `/${rota}`,
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

    private construirRotaProfessor(): any {
        const rota = this.construirRotaPadrao('professor');
        rota['listarAtivos'] = `${this.API}/professor/listarAtivos`;
        return rota;
    }

    private construirRotaCargo(): any {
        const rota = this.construirRotaPadrao('cargo');
        rota['disciplinas'] = {
            listarPorCurriculo: `${this.API}/cargo/disciplinas/listar-por-curriculo`
        };
        return rota;
    }

}
