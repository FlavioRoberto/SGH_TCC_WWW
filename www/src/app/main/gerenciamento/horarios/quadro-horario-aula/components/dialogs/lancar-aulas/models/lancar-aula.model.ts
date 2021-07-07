import { ReservaModel } from "../../../../model/reserva.model";

export class LancarAulaModel {
    codigoHorario: number;
    codigoDisciplina: number;
    codigoSala: number;
    laboratorio: boolean;
    horarios: [];
    diasDaSemana: [];
    reservas: ReservaModel[];
}
