'use strict';

class Error {
    errorHandlerModule;
    constructor() {
        let context = this;
        window.common.use('ErrorHandler', function (handler) {
            context.Watch(handler.errorHandler.ShowMsg);
        })
    }
}

Error.prototype.Watch = (func) => {
    window.addEventListener('error', (errorEvent) => {
        func(errorEvent.filename, errorEvent.message, errorEvent.lineno, errorEvent.colno);
        errorEvent.preventDefault();
    }, true);
}

export const error = new Error();