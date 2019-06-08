import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '@compartilhado/layout/dialogs/error-dialog/service/error-dialog.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {


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
                        if (err.status >= 400) {
                            console.log(err);
                            this.dialogService.mensagem = err.error;
                            this.dialogService.titulo = "Atenção";
                            this.dialogService.openDialog();
                        }
                        return Observable.throw(err);
                    }
                })
            );
    }
}
