import { ProfessorCurso } from './professor-curso.model';

export class Professor {
    codigo: number;
    matricula: string;
    ativo: boolean;
    nome: string;
    telefone: string;
    email: string;
    cursos: ProfessorCurso[] | number[];
}
