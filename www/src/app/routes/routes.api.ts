import { environment } from 'environments/environment';


export class routesApi {
    private API: string = environment.url;

    constructor() {
        this.API += "api";
    }

    getRoutes(): any {
        return {
            turno: {
                listarPor: this.API + '/turno/listarPor'
            }
        }

    }
}
