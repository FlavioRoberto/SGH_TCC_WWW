import { ReservaModel } from '../../../../model/reserva.model';
import { AdicionarAulaBaseDataModel } from '../../base/adicionar-aula-data-base.model';

export class AdicionarAulaDialogDataModel extends AdicionarAulaBaseDataModel {
    reserva: ReservaModel;
}
