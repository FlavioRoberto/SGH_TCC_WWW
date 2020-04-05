import { TurnoModel } from 'app/main/cadastros/turno/model/turno.interface';
import { CursoModel } from 'app/main/cadastros/curso/model/curso.model';

export class HorarioModel {
    codigoCurriculo: number;
    curso: CursoModel;
    periodo: number;
    semestre: number;
    ano: number;
    turno: TurnoModel;
}
