import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from 'stacktrace-js'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector ) {

    }

    handleError(error: any): void {

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message ? error.message : error.toString();
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
 
                
            });
        throw error;
    }

}
