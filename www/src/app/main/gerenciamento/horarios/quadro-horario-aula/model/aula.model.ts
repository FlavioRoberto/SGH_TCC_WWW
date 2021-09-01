import { ReservaModel } from './reserva.model';

export class AulaModel {
    codigo: number;
    codigoCargo: Number;
    codigoSala: number;
    professor: string;
    disciplina: string;
    sala: string;
    reserva: ReservaModel;
    descricaoDesdobramento: string;
    pratica: boolean;
    horarioExtrapolado: boolean;
    disciplinasAuxiliares: number[]
}

export class DisciplinaAuxiliar {
    codigo: number;
}

