import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Aplicação',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'gerenciamento',
                title: 'Gerenciamento',
                type: 'collapsable',
                icon: 'library_add',
                children: [
                    {
                        id: 'curso',
                        title: 'Cursos',
                        type: 'item',
                        icon: 'school',
                        url: '/gerenciamento/curso'
                    },
                    {
                        id: 'turno',
                        title: 'Turnos',
                        type: 'item',
                        icon: 'access_time',
                        url: '/gerenciamento/turno'
                    },
                    {
                        id: 'disciplina',
                        title: 'Disciplinas',
                        icon: 'collections_bookmark',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'disciplina.tipo',
                                title: 'Tipo',
                                type: 'item',
                                url: '/gerenciamento/disciplina/tipo',
                            },
                            {
                                id: 'disciplina.cadastrar',
                                title: 'Cadastro',
                                type: 'item',
                                url: '/gerenciamento/disciplina/cadastro',
                            }
                        ]
                    },
                    {
                        id: 'curriculo',
                        title: 'Currículos',
                        type: 'item',
                        icon: 'list_alt',
                        url: '/gerenciamento/curriculo'
                    },
                    {
                        id: 'professor',
                        title: 'Professores',
                        type: 'item',
                        icon: 'person',
                        url: '/gerenciamento/professores'
                    },
                    {
                        id: 'usuarios',
                        title: 'Usuarios',
                        type: 'item',
                        icon: 'account_box',
                        url: '/gerenciamento/usuarios'
                    }
                ]
            }
        ]
    }
];
