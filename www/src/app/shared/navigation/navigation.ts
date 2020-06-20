import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Aplicação',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'cadastros',
                title: 'Cadastros',
                type: 'collapsable',
                icon: 'library_add',
                children: [
                    {
                        id: 'curso',
                        title: 'Cursos',
                        type: 'item',
                        icon: 'school',
                        url: '/cadastros/curso'
                    },
                    {
                        id: 'turno',
                        title: 'Turnos',
                        type: 'item',
                        icon: 'access_time',
                        url: '/cadastros/turno'
                    },
                    {
                        id: 'disciplinas',
                        title: 'Disciplinas',
                        icon: 'collections_bookmark',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'disciplina.tipo',
                                title: 'Tipo',
                                type: 'item',
                                url: '/cadastros/disciplinas/tipo',
                            },
                            {
                                id: 'disciplina.cadastrar',
                                title: 'Disciplina',
                                type: 'item',
                                url: '/cadastros/disciplinas/disciplina',
                            }
                        ]
                    },
                    {
                        id: 'curriculo',
                        title: 'Currículos',
                        type: 'item',
                        icon: 'list_alt',
                        url: '/cadastros/curriculo'
                    },
                    {
                        id: 'cargos',
                        title: 'Cargos',
                        icon: 'school',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'professor',
                                title: 'Professores',
                                type: 'item',
                                url: '/cadastros/cargos/professores'
                            },
                            {
                                id: 'cargo',
                                title: 'Cargo',
                                type: 'item',
                                url: '/cadastros/cargos/cargo'
                            },
                        ]
                    },
                    {
                        id: 'usuarios',
                        title: 'Usuarios',
                        type: 'item',
                        icon: 'account_box',
                        url: '/cadastros/usuarios'
                    },
                    {
                        id: 'salas',
                        title: 'Salas',
                        icon: 'meeting_room',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'bloco',
                                title: 'Bloco',
                                type: 'item',
                                url: '/cadastros/salas/bloco'
                            },
                            {
                                id: 'sala',
                                title: 'Sala',
                                type: 'item',
                                url: '/cadastros/salas/sala'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'gerenciamento',
                title: 'Gerenciamento',
                type: 'collapsable',
                icon: 'assignment',
                children: [
                    {
                        id: 'horarios_aula',
                        title: 'Horários de aula',
                        type: 'item',
                        icon: 'access_time',
                        url: '/gerenciamento/horarios'
                    },
                    {
                        id: 'relatorios',
                        title: 'Relatórios',
                        type: 'collapsable',
                        icon: 'list_alt',
                        children: [
                            {
                                id: 'relatorio_horario_geral',
                                title: 'Horário geral',
                                type: 'item',
                                url: '/gerenciamento/relatorios/horario-geral'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
