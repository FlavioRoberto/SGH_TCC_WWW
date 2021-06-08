import { CurriculoDisciplinaModel } from '../../model/curriculo-disciplina.model';
import { TipoModel } from '../../../disciplinas/tipo/model/iTipo';

export class DisciplinaCurriculoDialoData {
    codigoCurriculo: number;
    titulo: string;
    onClickSalvar: () => void;
    disciplinaEditar: CurriculoDisciplinaModel;
    tiposDisciplina: TipoModel[];
}
