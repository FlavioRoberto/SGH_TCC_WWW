import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Aplicação',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'gerenciamento',
                title: 'Gerenciamento',
                translate: 'NAV.GERENCIAMENTO.TITULO',
                type: 'collapsable',
                icon: 'library_add',
                children: [
                    {
                        id: 'curso',
                        title: 'Curso',
                        translate: 'NAV.GERENCIAMENTO.CURSO',
                        type: 'item',
                        icon: 'school',
                        url: '/gerenciamento/curso'
                    },
                    {
                        id: 'curriculo',
                        title: 'Currículo',
                        translate: 'NAV.GERENCIAMENTO.CURRICULO',
                        type: 'item',
                        icon: 'list_alt',
                        url: '/gerenciamento/curriculo'
                    },
                    {
                        id: 'disciplina',
                        title: 'Disciplina',
                        translate: 'NAV.GERENCIAMENTO.DISCIPLINA.TITULO',
                        icon: 'collections_bookmark',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'disciplina.cadastrar',
                                title: 'Cadastro',
                                translate: 'NAV.GERENCIAMENTO.DISCIPLINA.CADASTRO',
                                type: 'item',
                                url: '/gerenciamento/disciplina/cadastro',
                            },
                            {
                                id: 'disciplina.tipo',
                                title: 'Tipo',
                                translate: 'NAV.GERENCIAMENTO.DISCIPLINA.TIPO',
                                type: 'item',
                                url: '/gerenciamento/disciplina/tipo',
                            }
                        ]
                    },
                    {
                        id: 'turno',
                        title: 'Turno',
                        translate: 'NAV.GERENCIAMENTO.TURNO',
                        type: 'item',
                        icon: 'access_time',
                        url: '/gerenciamento/turno'
                    }
                ]
            }
        ]
    }
];
