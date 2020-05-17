import { CargoDisciplinaModel } from '../../../models/cargo-disciplina.model';
import { DisciplinaModel } from 'app/main/cadastros/disciplinas/disciplina/model/disciplina';

export class DisciplinaCargoDialogData {
    onClickSalvar: () => void;
    onClickFechar: () => void;
    codigoCargo: number;
    disciplina?: CargoDisciplinaModel;
}
