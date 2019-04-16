import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorDialogService } from 'app/layout/components/app_components/error-dialog/service/error-dialog.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {


    constructor(private dialogService: ErrorDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request)
            .map((event: HttpEvent<any>) => {
                return event;
            })
            .catch((err: any, caught) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status >= 400) {
                        this.dialogService.mensagem = err.error;
                        console.log(err);
                        this.dialogService.titulo = "Atenção";
                        this.dialogService.openDialog();
                    }
                    return Observable.throw(err);
                }
            });

    }
}
