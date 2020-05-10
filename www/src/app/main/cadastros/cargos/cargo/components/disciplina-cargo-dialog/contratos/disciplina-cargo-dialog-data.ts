import { CargoDisciplinaModel } from '../../../models/cargo-disciplina.model';

export class DisciplinaCargoDialogData {
    onClickSalvar: (dados: CargoDisciplinaModel) => void;
    onClickFechar: () => void;
    codigoCargo: number;
}
