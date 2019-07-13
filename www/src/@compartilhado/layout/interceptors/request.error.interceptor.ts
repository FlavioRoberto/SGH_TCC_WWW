import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '@compartilhado/layout/dialogs/error-dialog/service/error-dialog.service';

@Injectable()
export class RequestErrorInterceptor implements HttpInterceptor {

    constructor(private dialogService: ErrorDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    return event;
                }),
                catchError((err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        let mensagem = '';

                        if (err.status === 0) {
                            mensagem = "Não foi possível conectar ao servidor! Verifique o proxy e sua conexão com a internet.";
                        }

                        if (err.status >= 400) {
                            console.error(err);

                            if (err.error) {
                                mensagem = err.error.error[0];
                            }

                            if (err.status === 404) {
                                mensagem = "O recurso acessado não está disponível, verifique se existe a rota especificada!";
                            }

                            if (err.status === 401 || err.status === 403) {
                                mensagem = "Você não tem permissão para executar esta ação!";
                            }
                        }

                        this.dialogService.openDialog("Atenção", mensagem);

                        return Observable.throw(err);
                    }
                })
            );
    }
}
