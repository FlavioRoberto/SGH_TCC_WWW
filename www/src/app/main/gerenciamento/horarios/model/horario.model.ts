import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';

export class HorarioModel {
    codigo: number;
    codigoCurriculo: number;
    periodo: number;
    semestre: number;
    ano: number;
    turno: TurnoModel;
}
