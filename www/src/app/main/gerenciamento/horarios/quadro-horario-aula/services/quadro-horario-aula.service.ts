import { Injectable } from '@angular/core';
import { QuadroHorarioModel } from '../model/quadro-horario-model';

@Injectable()
export class QuadroHorarioAulaService {
    listarHorarios(): string[] {
        return ['07:00', '07:50', '08:40', '09:45', '10:35', '11:25'];
    }

    listarDiasSemana(): string[] {
        return ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
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
                horario: '07:50',
                descricaoDesdobramento: 'Turma A'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Cargo 42',
                sala: '311',
                dia: 'Quarta',
                horario: '09:45',
                descricaoDesdobramento: 'Turma B'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Arquitetura de computadores',
                professor: 'Jhonatan Fernando De Oliveira',
                sala: '311',
                dia: 'Quinta',
                horario: '11:25'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Engenharia de software',
                professor: 'Flávio Roberto Teixeira',
                sala: '311',
                dia: 'Quinta',
                horario: '08:40'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Sistemas distribuidos',
                professor: 'Cristina Maria Valadares',
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
                dia: 'Sábado',
                horario: '09:45'
            },
            {
                codigo: 1,
                codigoCargo: 1,
                codigoSala: 1,
                disciplina: 'Arquitetura de computadores',
                professor: 'Elton Ângelo Rabelo',
                sala: '311',
                dia: 'Terça',
                horario: '10:35'
            }
        ] as QuadroHorarioModel[];
    }
}
