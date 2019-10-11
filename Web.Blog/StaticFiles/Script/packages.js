'use strict';

class Package {

    constructor(basePath) {
        this.BasePath = basePath;

        this.Jq = this.BasePath + 'jq/jquery-3.4.1/jquery-3.4.1.min.js';

        this.Blog = this.BasePath + 'Blog/blog.js';
        this.Article = this.BasePath + 'Blog/Article/Index.js';


        this.Error = this.BasePath + 'Common/Error/Error.js';
        this.ErrorHandler = this.BasePath + 'Common/Error/ErrorHandler.js';
        this.ErrorModel = this.BasePath + 'Common/Error/ErrorModel.js';

        this.Http = this.BasePath + 'Common/Http/Http.js';
    }

}

const packages = new Package('../../../Script/');

export { packages };