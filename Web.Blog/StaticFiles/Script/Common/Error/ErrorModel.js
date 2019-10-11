'use strict';

class ErrorModel {
    Msg;
    Url;
    lineNo;
    ColNo;
    constructor(errorEvent) {
        this.Msg = errorEvent.msg;
        this.Url = errorEvent.url;
        this.lineNo = errorEvent.lineno;
        this.ColNo = errorEvent.colno;
    }
}
