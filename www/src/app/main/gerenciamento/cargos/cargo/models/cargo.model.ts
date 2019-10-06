import { CargoDisciplina } from './cargo-disciplina';

export class Cargo {
    numero: number;
    edital: number;
    ano: number;
    semestre: number;
    codigoProfessor: number;
    cargoDisciplinas: CargoDisciplina[];
}

