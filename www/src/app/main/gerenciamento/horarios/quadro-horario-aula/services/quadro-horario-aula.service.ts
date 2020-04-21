import { Injectable } from '@angular/core';
import { QuadroHorarioModel } from '../model/quadro-horario-model';

@Injectable()
export class QuadroHorarioAulaService {
    listarHorarios(): string[] {
        return ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];
    }

    listarDiasSemana(): string[] {
        return ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    }

    listarAulas(): QuadroHorarioModel[] {
        return [
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Segunda',
                horario: '07:00'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Terça',
                horario: '07:00'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Quarta',
                horario: '07:00'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Quinta',
                horario: '07:00'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Sexta',
                horario: '07:00'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Sábado',
                horario: '07:00'
            }
        ] as QuadroHorarioModel[];
    }
}
