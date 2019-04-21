import { environment } from 'environments/environment';


export class routesApi {
    private API: string;

    constructor() {
        this.API = `${environment.url}api`;
    }

    getRoutes(): any {
        return {
            turno: {
                listarPaginacao: this.API + '/turno/listarPaginacao',
                criar: this.API + '/turno/criar',
                editar: this.API + '/turno/editar',
                remover: this.API + '/turno/remover?codigo='
            },
            curso: {
                listarPaginacao: this.API + '/curso/listarPaginacao',
                criar: this.API + '/curso/criar',
                editar: this.API + '/curso/editar',
                remover: this.API + '/curso/remover?codigo='
            }
        }

    }
}
