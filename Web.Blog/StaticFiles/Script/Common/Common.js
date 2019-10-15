'use strict';

class Common {

    packagePath = '/Script/packages.js';

}

/**
 * 引入模块  使用Use引入的模块必须使用ES6标准将对象导出，如未将变量使用export导出，那么外部将无法调用其模块内函数与对象，只能由其内部自执行
 * 如被引入的模块中无需外部调用便可省略回调函数，如：common.use('moduleName');
 * 如被引入的模块需要被外部调用或导出的模块中包含多个变量，此时回调函数的参数为模块对象，如：common.use('moduleName',(modules)=>{module1.fn(),module2.fn();});
 * 数组模式异步加载仅为各模块间不耦合，都可单独加载，在加载完成之后自行调用其模块中函数
 * 如需要引入的模块为数组，考虑到模块间直接调用，将同步加载这些模块，如：在a.js的构造函数中使用了Jq对象，而此时Jq模块并未加载完成，将报错
 * @param {String} moduleName 模块名
 * @param {Function} callback  回调函数
 */
Common.prototype.use = async function(moduleName, callback) {

    this.packages ? '' : await import(this.packagePath).then((module) => { this.packages = module.packages; }, this);

    if (!Array.isArray(moduleName)) {
        return await import(this.packages[moduleName]).then((result) => { callback && typeof (callback) ? callback(result) : '' });
    }

    let moduleArray = [];

    let len = moduleName.length;

    //同步加载所有模块
    for (let i = 0; i < len; i++) {
        moduleArray.push(await import(this.packages[moduleName.shift()]));
    }

    let modules = {};
    if (typeof (callback) === 'function') {

        //将所有模块组合到一个对象上
        for (var item in moduleArray)
            for (var module in moduleArray[item])
                modules[module] = moduleArray[item][module];

        callback(modules);
    }
};

const common = new Common();

window.common = common;

export default common;
