import { IDisciplina } from '../../disciplina/cadastro/model/IDisciplina';

export class CurriculoDisciplinaPreRequisito {

    constructor(
        public codigoCurriculoDisciplina: number = 0,
        public codigoDisciplina: number = 0,
        public disciplina: IDisciplina = {} as IDisciplina
    ) { }
}
