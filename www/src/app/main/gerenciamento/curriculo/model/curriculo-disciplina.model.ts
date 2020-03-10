import { Disciplina } from '../../disciplina/cadastro/model/disciplina';
import { CurriculoDisciplinaPreRequisitoModel } from './curriculo-disciplina-pre-requisito.model';

export class ICurriculoDisciplina {
    codigo: number;
    periodo: number;
    disciplina: Disciplina;
    codigoDisciplina: number;
    codigoCurriculo: number;
    aulasSemanaisTeorica: number;
    aulasSemanaisPratica: number;
    credito: number;
    preRequisitos: CurriculoDisciplinaPreRequisitoModel[];
    preRequisitoDescricao: string;

    constructor() {
        this.codigo = 0;
        this.periodo = 0;
        this.disciplina = {
        } as Disciplina;
        this.aulasSemanaisTeorica = 0;
        this.aulasSemanaisPratica = 0;
        this.codigoCurriculo = 0;
        this.preRequisitos = new Array<CurriculoDisciplinaPreRequisitoModel>();
    }

}
