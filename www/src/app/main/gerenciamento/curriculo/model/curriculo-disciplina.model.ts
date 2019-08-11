import { DisciplinaModule } from '../../disciplina/cadastro/disciplina.module';
import { IDisciplina } from '../../disciplina/cadastro/model/IDisciplina';

export class ICurriculoDisciplina {
    codigo: number;
    disciplina: IDisciplina;
    codigoCurriculo: number;
    cargaHorariaSemanalTeorica: number;
    cargaHorariaSemanalPratica: number;
    cargaHorariaSemanalTotal: number;
    horaAulaTotal: number;
    horaTotal: number;
    credito: number;
    disciplinasPreRequisito: IDisciplina[];
    preRequisito: string;

    constructor() {
        this.codigo = 0;
        this.disciplina = {
        } as IDisciplina;
        this.codigoCurriculo = 0;
        this.cargaHorariaSemanalTeorica = 0;
        this.cargaHorariaSemanalPratica = 0;
        this.cargaHorariaSemanalTotal = 0;
        this.horaAulaTotal = 0;
        this.horaTotal = 0;
        this.credito = 0;
        this.disciplinasPreRequisito = [];
        this.preRequisito = '';
    }

}
