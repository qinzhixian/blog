'use strict';

class ErrorHandler {
    errorModel;
    constructor() {
        
    }
}

ErrorHandler.prototype.ShowMsg = (msg, url, lineno, colno) => !console.error('发生错误！', { msg, url, lineno, colno });

const errorHandler = new ErrorHandler();

export { errorHandler };