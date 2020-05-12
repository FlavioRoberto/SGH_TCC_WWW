import { CurriculoModel } from 'app/main/cadastros/curriculo/model/curriculo.model';
import { HorarioModel } from 'app/main/gerenciamento/horarios/horario/model/horario.model';
import { ESemestre } from 'app/shared/enums/esemestre.enum';

export class CadastroHorarioDataModel {
    curriculos: CurriculoModel[];
    periodos: any[];
    semestres: ESemestre[];
    titulo: string;
    horarioFiltrado: HorarioModel;
    mensagem: string;
    salvar: (horarioSalvo: HorarioModel) => void;
}

