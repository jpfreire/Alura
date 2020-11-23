import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from 'stacktrace-js';
import { ServerLogService } from './ServerLogService';
import { environment } from '../../../environments/environment';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector ) {

    }

    handleError(error: any): void {

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message ? error.message : error.toString();
        
        if ( environment.production ) {
            router.navigate(['/error']);
        }

        StackTrace
            .fromError(error)
            .then((stackFrames) => {
                const stackAsStrings = stackFrames
                .map( sf => sf.toString())
                .join('\n');

                console.log('Ocorreu um erro: ' + message);
                console.log(stackAsStrings);
                console.log('o que será enviado para o servidor')
                console.log({ message, url, userName: userService.getUserName(), stack: stackAsStrings});
                
                serverLogService.log({
                    message,
                    url,
                    userName: userService.getUserName(),
                    stack: stackAsStrings}
                ).subscribe(
                    () => console.log('Error logged on server'),
                    err => {
                        console.log(err);
                        console.log('Fail to send error log to server');
                    }
                )
            });
        throw error;
    }

}
