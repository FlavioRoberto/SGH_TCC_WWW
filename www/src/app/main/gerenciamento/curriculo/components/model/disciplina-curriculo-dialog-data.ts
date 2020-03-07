import { ICurriculoDisciplina } from '../../model/curriculo-disciplina.model';

export class DisciplinaCurriculoDialoData {
    codigoCurriculo: number;
    titulo: string;
    onClickSalvar: () => void;
    disciplinaEditar: ICurriculoDisciplina;
}
