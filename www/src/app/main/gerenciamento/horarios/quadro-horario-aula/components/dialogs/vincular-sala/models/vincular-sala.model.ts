import { AulaModel } from "../../../../model/aula.model";

export class VincularSalaModel {
    constructor(
        public aula: AulaModel,
        public salaVinculada: () => void) {
    }
}