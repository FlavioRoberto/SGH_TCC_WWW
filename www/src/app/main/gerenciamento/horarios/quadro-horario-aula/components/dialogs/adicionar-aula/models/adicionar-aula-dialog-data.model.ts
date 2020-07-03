import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { ReservaModel } from '../../../../model/reserva.model';

export class AdicionarAulaDialogDataModel {
    codigoHorario: number;
    titulo: string;
    codigoCurriculo: number;
    codigoTurno: number;
    horariosTurno: string[];
    ano: number;
    semestre: ESemestre;
    periodo: number;
    reserva: ReservaModel;
    executarAoSalvar: () => void;
}
