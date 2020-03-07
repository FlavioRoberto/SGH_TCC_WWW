import { Disciplina } from '../../disciplina/cadastro/model/disciplina';

export class ICurriculoDisciplina {
    codigo: number;
    periodo: number;
    disciplina: Disciplina;
    codigoDisciplina: number;
    codigoCurriculo: number;
    aulasSemanaisTeorica: number;
    aulasSemanaisPratica: number;
    credito: number;
    preRequisitos: Disciplina[];
    preRequisitoDescricao: string;

    constructor() {
        this.codigo = 0;
        this.periodo = 0;
        this.disciplina = {
        } as Disciplina;
        this.aulasSemanaisTeorica = 0;
        this.aulasSemanaisPratica = 0;
        this.codigoCurriculo = 0;
        this.preRequisitos = new Array<Disciplina>();
        this.preRequisitoDescricao = '';
    }

}
