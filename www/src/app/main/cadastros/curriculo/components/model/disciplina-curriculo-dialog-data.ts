import { CurriculoDisciplinaModel } from '../../model/curriculo-disciplina.model';

export class DisciplinaCurriculoDialoData {
    codigoCurriculo: number;
    titulo: string;
    onClickSalvar: () => void;
    disciplinaEditar: CurriculoDisciplinaModel;
}
