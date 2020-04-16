import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';

export class HorarioModel {
    codigo: number;
    curriculo: CurriculoModel;
    periodo: number;
    semestre: number;
    ano: number;
    turno: TurnoModel;
}
