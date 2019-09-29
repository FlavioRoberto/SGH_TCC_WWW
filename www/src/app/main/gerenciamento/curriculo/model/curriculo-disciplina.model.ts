import { IDisciplina } from '../../disciplina/cadastro/model/IDisciplina';

export class ICurriculoDisciplina {
    codigo: number;
    periodo: number;
    disciplina: IDisciplina;
    codigoDisciplina: number;
    codigoCurriculo: number;
    aulasSemanaisTeorica: number;
    aulasSemanaisPratica: number;
    credito: number;
    preRequisitos: IDisciplina[];
    preRequisitoDescricao: string;

    constructor() {
        this.codigo = 0;
        this.periodo = 0;
        this.disciplina = {
        } as IDisciplina;
        this.aulasSemanaisTeorica = 0;
        this.aulasSemanaisPratica = 0;
        this.codigoCurriculo = 0;
        this.credito = 0;
        this.preRequisitos = new Array<IDisciplina>();
        this.preRequisitoDescricao = '';
    }

}
