import { ICurriculoDisciplina } from './curriculo-disciplina.model';

export interface ICurriculo {
    codigo: number;
    codigoCurso: number;
    descricaoCurso: string;
    ano: number;
    disciplinas: ICurriculoDisciplina[]
}
