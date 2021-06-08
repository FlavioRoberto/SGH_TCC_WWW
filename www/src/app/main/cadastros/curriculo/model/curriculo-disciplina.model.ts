import { CurriculoDisciplinaPreRequisitoModel } from './curriculo-disciplina-pre-requisito.model';
import { DisciplinaModel } from '../../disciplinas/disciplina/model/disciplina';

export class CurriculoDisciplinaModel {
    codigo: number;
    codigoTipo:number;
    periodo: number;
    disciplina: DisciplinaModel;
    codigoDisciplina: number;
    codigoCurriculo: number;
    aulasSemanaisTeorica: number;
    aulasSemanaisPratica: number;
    preRequisitos: CurriculoDisciplinaPreRequisitoModel[];
    preRequisitoDescricao: string;
    quantidadeAulaTotal: number;

    constructor() {
        this.codigo = 0;
        this.periodo = 0;
        this.disciplina = {
        } as DisciplinaModel;
        this.aulasSemanaisTeorica = 0;
        this.aulasSemanaisPratica = 0;
        this.codigoCurriculo = 0;
        this.preRequisitos = new Array<CurriculoDisciplinaPreRequisitoModel>();
    }
}
