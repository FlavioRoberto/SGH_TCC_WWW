declare type Cor = 'primary' | 'accent' | 'warn';
declare type Posicao = 'below' | 'above' | 'left' | 'right';

export class AcoesDatatable {
    icone?: string = undefined;
    executaMetodo?: (data?: any) => void = undefined;
    texto?: string = undefined;
    cor?: Cor = 'accent';
    toolTip?: string = undefined;
    toolTipPosicao?: Posicao = 'above';

    constructor(init?: Partial<AcoesDatatable>) {
        Object.assign(this, init);
    }
}
