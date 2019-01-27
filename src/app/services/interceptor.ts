import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
/** Pass untouched request through to the next request handler. */
@Injectable()

export class RequestInterceptor implements HttpInterceptor {
    constructor(  ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        let newReq = req;

             const header = {
                Accept: 'application/json'
            };
              newReq = req.clone({
                headers: new HttpHeaders(header)
            });
        return next.handle(newReq);
    }
}

/** Http interceptor providers in outside-in order */
export const httpRequestInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
];
