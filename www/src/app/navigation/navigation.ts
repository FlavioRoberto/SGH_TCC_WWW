import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'aplicacao',
        title: 'Aplicação',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'gerenciamento',
                title: 'Gerenciamento',
                translate: 'NAV.GERENCIAMENTO.TITULO',
                type: 'collapsable',
                icon: 'library_add',
                children: [
                    {
                        id: 'turno',
                        title: 'Turno',
                        translate: 'NAV.GERENCIAMENTO.TURNO',
                        type: 'item',
                        icon: 'access_time',
                        url: '/gerenciamento/turno'
                    },
                    {
                        id: 'curso',
                        title: 'Curso',
                        translate: 'NAV.GERENCIAMENTO.CURSO',
                        type: 'item',
                        icon: 'school',
                        url: '/gerenciamento/curso'
                    },
                    {
                        id: 'disciplina',
                        title: 'Disciplina',
                        translate: 'NAV.GERENCIAMENTO.DISCIPLINA',
                        type: 'item',
                        icon: 'library_add',
                        url: '/gerenciamento/disciplina'
                    },
                    {
                        id: 'curriculo',
                        title: 'Currículo',
                        translate: 'NAV.GERENCIAMENTO.CURRICULO',
                        type: 'item',
                        icon: 'library_add',
                        url: '/gerenciamento/curriculo'
                    }
                ]
            }
        ]
    }
];
