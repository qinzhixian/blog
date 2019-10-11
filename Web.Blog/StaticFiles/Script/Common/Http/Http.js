'use strict';


class Http {
    constructor() {

    }
}

Http.prototype.get = function (url, data, successCallback) { this.ajax(url, data, 'get', successCallback) };

Http.prototype.post = function (url, data, successCallback) { this.ajax(url, data, 'post', successCallback) };

Http.prototype.ajax = function (url = '', data = {}, method = 'get', successCallback, errorCallBack, completeCallback) {
    
    if (!$) {
        throw new Error('缺少依赖组件Jquery');
    }
    
    let parames = new Object();

    parames.url = this.TypeIs(url, 'string') ? url : '';
    parames.data = this.TypeIs(data, 'object') ? data : {};
    parames.method = this.TypeIs(method, 'string') ? method : 'get';
    parames.success = this.TypeIs(successCallback, 'function') ? successCallback : function () { };
    parames.error = this.TypeIs(errorCallBack, 'function') ? errorCallBack : function () { };
    parames.complate = this.TypeIs(completeCallback, 'function') ? completeCallback : function () { };

    return $.ajax(parames);
};

/**
 * 类型比较 当源对象的类型与要比较的类型一致是返回True，反之False
 * @param {Object} entity  源对象
 * @param {String} typeName  类型名
 */
Http.prototype.TypeIs = (entity, typeName) => typeof entity === typeName;

export const http = new Http();