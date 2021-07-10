export const econtratacao = [
    {
        value: 1,
        descricao: "Efetivo",
    },
    {
        value: 2,
        descricao: "Designado",
    },
];

export function getEContratacaoDescricao(contratacao: number): string {
    return contratacao == 1 ? "Efetivo" : "Designado";
}
