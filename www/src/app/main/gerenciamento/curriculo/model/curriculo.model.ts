import { ICurriculoDisciplina } from './curriculo-disciplina.model';

export interface Curriculo {
    codigo: number;
    codigoCurso: number;
    descricaoCurso: string;
    ano: number;
    disciplinas: ICurriculoDisciplina[]
}
