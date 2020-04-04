import { CargoDisciplina } from '../../../models/cargo-disciplina';
import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';

export interface IDisciplinaCargoDialogData {
    onClickSalvar: (dados: CargoDisciplina) => void;
    onClickFechar: () => void;
    codigoCargo: number;
    curriculos: CurriculoModel[];
    turnos: TurnoModel[];
}
