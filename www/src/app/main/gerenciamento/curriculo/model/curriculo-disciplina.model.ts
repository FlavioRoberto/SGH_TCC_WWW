export class ICurriculoDisciplina {
    codigo: number;
    codigoDisciplina: number;
    nomeDisciplina: string;
    codigoCurriculo: number;
    cargaHorariaSemanalTeorica: number;
    cargaHorariaSemanalPratica: number;
    cargaHorariaSemanalTotal: number;
    horaAulaTotal: number;
    horaTotal: number;
    credito: number;
    preRequisito: boolean;

    constructor() {
        this.codigo = 0;
        this.codigoDisciplina = 0;
        this.nomeDisciplina = '';
        this.codigoCurriculo = 0;
        this.cargaHorariaSemanalTeorica = 0;
        this.cargaHorariaSemanalPratica = 0;
        this.cargaHorariaSemanalTotal = 0;
        this.horaAulaTotal = 0;
        this.horaTotal = 0;
        this.credito = 0;
        this.preRequisito = false;
    }
}
