import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log('Ocorreu um erro ', error);
        throw error;
    }

}
