
'use strict';

class Common {
    constructor() {

        if (!window.$) {
            return console.error('依赖项Jquery未正确加载！');
        }
    }
}

Common.prototype.get = function (url, data, successCallback) { this.ajax(url, data, 'get', successCallback) };

Common.prototype.post = function (url, data, successCallback) { this.ajax(url, data, 'post', successCallback) };

Common.prototype.ajax = (url = '', data = {}, method = 'get', successCallback = () => { }, errorCallBack = () => { }, completeCallback = () => { }) => {
    let parames = new Object();

    parames.url = typeIs(url, 'string') ? url : '';
    parames.data = typeIs(data, 'object') ? data : {};
    parames.method = typeIs(method, 'string') ? method : 'get';
    parames.success = typeIs(successCallback, 'function') ? successCallback : function () { };
    parames.error = typeIs(errorCallBack, 'function') ? errorCallBack : function () { };
    parames.complate = typeIs(completeCallback, 'function') ? completeCallback : function () { };

    return $.ajax(parames);
}

let typeIs = (entity, type) => typeof entity == type;

const _common = new Common();

//window.common = _common();

export default _common;