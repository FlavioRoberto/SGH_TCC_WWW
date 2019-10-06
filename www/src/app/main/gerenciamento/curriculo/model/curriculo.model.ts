import { ICurriculoDisciplina } from './curriculo-disciplina.model';

export interface ICurriculo {
    codigo: number;
    codigoCurso: number;
    ano: number;
    disciplinas: ICurriculoDisciplina[]
}
