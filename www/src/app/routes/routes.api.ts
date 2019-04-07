import { environment } from 'environments/environment';


export class routesApi {
    private API: string = environment.url;

    constructor() {
        this.API += "api";
    }

    getRoutes(): any {
        return {
            turno: {
                listarPaginacao: this.API + '/turno/listarPaginacao',
                criar: this.API + '/turno/criar'
            }
        }

    }
}
