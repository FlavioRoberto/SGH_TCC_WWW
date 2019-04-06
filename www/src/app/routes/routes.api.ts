import { environment } from 'environments/environment';


export class routesApi {
    private API: string = environment.url;

    constructor() {
        this.API += "api";
    }

    getRoutes(): any {
        return {
            turno: {
                listarTodos: this.API + '/turno',
                criar: this.API + '/turno'
            }
        }

    }
}
