import { CargoDisciplina } from './cargo-disciplina';

export class Cargo {
    codigo: number;
    numero: number;
    edital: number;
    ano: number;
    semestre: number;
    codigoProfessor: number;
    cargoDisciplinas: CargoDisciplina[];
}

