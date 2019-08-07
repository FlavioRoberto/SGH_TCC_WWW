import { IDisciplina } from 'app/main/gerenciamento/disciplina/cadastro/model/IDisciplina';

export interface IDisciplinaCurriculo {
    disciplina: IDisciplina;
    codigoCurriculo: number;
    cargaHorariaSemanalTeorica: number;
    cargaHorariaSemanalPratica: number;
    horaAulaTotal: number;
    horaTotal: number;
    credito: number;
    preRequisito: boolean;
}

