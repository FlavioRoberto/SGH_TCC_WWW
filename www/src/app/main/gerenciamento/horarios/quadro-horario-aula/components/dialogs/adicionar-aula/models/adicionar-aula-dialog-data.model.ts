import { ESemestre } from 'app/shared/enums/esemestre.enum';

export class AdicionarAulaDialogDataModel {
    codigoHorario: number;
    titulo: string;
    codigoCurriculo: number;
    codigoTurno: number;
    ano: number;
    semestre: ESemestre;
    periodo: number;
}
