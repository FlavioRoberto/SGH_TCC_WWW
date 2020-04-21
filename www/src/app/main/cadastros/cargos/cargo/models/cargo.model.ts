import { ESemestre } from 'app/shared/enums/esemestre.enum';
import { Professor } from '../../professores/models/professor.model';

export class CargoModel {
    codigo: number;
    numero: number;
    edital: number;
    ano: number;
    semestre: ESemestre;
    codigoProfessor: number;
    professor: Professor;
}

