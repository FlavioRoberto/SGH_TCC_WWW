export enum ESemestre {
    Primeiro = 1,
    Segundo = 2
}

export const ESemestreLabel = new Map<number, string>([
    [ESemestre.Primeiro, 'Primeiro'],
    [ESemestre.Segundo, 'Segundo']
]);
