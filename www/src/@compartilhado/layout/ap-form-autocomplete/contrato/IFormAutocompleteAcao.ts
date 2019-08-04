import { Observable } from 'rxjs';

export interface IFormAutocompleteAcao {
    pesquisar(filtro: string): Observable<any>;
    matOptionValueBind(item: any): string;
}
