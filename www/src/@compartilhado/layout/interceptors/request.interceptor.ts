import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '@compartilhado/core/token/token-storage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<
        | HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>
    > {
        if (this.tokenStorageService.temToken()) {
            const token = this.tokenStorageService.getToken();
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(token)}`
                }
            });
        }
        return next.handle(req);
    }
}
