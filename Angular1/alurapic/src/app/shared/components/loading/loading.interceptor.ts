import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({providedIn: 'root'})
export class LoadingInterceptor implements HttpInterceptor {
    constructor(readonly loadingService: LoadingService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercept',req);
        return next.handle(req).pipe(
            tap(event => {
                console.log('tap',event);
                if ( event instanceof HttpResponse ) {
                    this.loadingService.stop();
                } else {
                    this.loadingService.start();
                }
            })
        );
    }
}
