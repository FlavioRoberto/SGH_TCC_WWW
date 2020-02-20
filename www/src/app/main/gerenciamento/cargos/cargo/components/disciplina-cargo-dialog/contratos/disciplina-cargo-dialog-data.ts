import { CargoDisciplina } from '../../../models/cargo-disciplina';
import { Curriculo } from 'app/main/gerenciamento/curriculo/model/curriculo.model';

export interface IDisciplinaCargoDialogData {
    onClickSalvar: (dados: CargoDisciplina) => void;
    onClickFechar: () => void;
    codigoCargo: number;
    curriculos: Curriculo[];
}
