import { ESemestre } from "app/shared/enums/esemestre.enum";

export class AdicionarAulaBaseDataModel {
    codigoHorario: number;
    titulo: string;
    codigoCurriculo: number;
    codigoCurriculoDisciplina: number;
    codigoTurno: number;
    horariosTurno: string[];
    ano: number;
    semestre: ESemestre;
    periodo: number;
    executarAoSalvar: () => void;
}