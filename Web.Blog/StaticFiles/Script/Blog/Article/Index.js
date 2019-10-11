'use strict';

class ContentElemModel {
    constructor() {
        this.title_lable = $('.title_lable');
        this.title_blogName = $('.title_blogName');
        this.lable = $('.lable_box>.lable');
        this.seeCount = $('.see_count>span');
        this.publishTime = $('.publish_time');
        this.blog_textElem = $('.blog_text');
    }
}

class CommentElemModel {
    constructor() {
        this.comment_count = $('.comment_count');
        this.user_name = $('.info_box>.user_info>.user_name');
        this.user_head = $('.comment_box>.user_head_box>.user_head');
        this.comment_time = $('.comment_time');
        this.comment_info = $('.comment_info');
    }
}

class PageElemModel {
    constructor() {

    }
}

class Article {
    constructor() {

        if (!window.$) {
            throw new Error('依赖项Jquery未正确加载！');
        }

        this.ContentElemModel = new ContentElemModel();
        this.CommentElemModel = new CommentElemModel();

        this.Init();
    }

    set BlogContent(data) {
        this.BindContent(this.ContentElemModel, data);
    }

    set BlogComment(data) {
        this.BindComment(this.CommentElemModel, data);
    }
}

Article.prototype.Init = function () {
   
    let blogData = this.GetBlog();

    this.BlogContent = blogData.content;
    this.BlogComment = blogData.comment;
};

Article.prototype.BindContent = (elemModel, data) => {
    elemModel.title_lable.text(data['title_lable']);
    elemModel.title_blogName.text(data['title_blogName']);
    elemModel.lable.text(data['lable']);
    elemModel.seeCount.text(data['seeCount']);
    elemModel.publishTime.text(data['publishTime']);
    elemModel.blog_textElem.html(data['blog_text']);
}

Article.prototype.BindComment = (elemModel, data) => {
    elemModel.comment_count.text(data['comment_count']);
    elemModel.user_name.text(data['user_name']);
    elemModel.user_head.attr('src', data['user_head']);
    elemModel.comment_time.text(data['comment_time']);
    elemModel.comment_info.text(data['comment_info']);
}

Article.prototype.GetBlog = () => {

    let getContent = () => {

        let data = new Object();

        data['title_lable'] = '博文';
        data['title_blogName'] = '学好JS,走哪儿都不怕';
        data['lable'] = 'html';
        data['seeCount'] = '1000';
        data['publishTime'] = '2019/10/08 00:01';
        data['blog_text'] = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 对于想学习JavaScript的读者来说，很可能已经掌握了HTML和Web页面设计的基本知识，希望为网页添加一些更好的互动性或者目前是在使用其他语言进行编辑，想了解一些JavaScript能提供哪些更多功能，JavaScript很适合作为学习编程技术的出发点，在调试过程中所掌握的基本概念大多可用于其他编程语言撒旦发射点士大夫是个大大夫撒旦发生的撒旦发射点撒旦发射点撒旦发射点发士大夫士大夫违法但是士大夫士大夫是士大夫是否为发生的发生的撒旦发射点。';

        return data;
    };

    let getComment = () => {

        let data = new Object();

        data['comment_count'] = '999';
        data['user_name'] = '汪汪汪';
        data['user_head'] = '/Image/head/head.jpg';
        data['comment_time'] = '2019/10/07';
        data['comment_info'] = '适合具备一定的Javascript基础知识的读者阅读，也适合从事程序设计工作想要深入探索Javascript语言的读者阅读。您不需要具备任何的Javascript基础知识及项目经验，通过学习这本书，将会在面试有关Javascript程序设计的职位游刃有余';

        return data;
    }

    return { content: getContent(), comment: getComment() };
}

Article.prototype.RenderPageSelecter = function () {

    let context = this;

}

/*测试自动变化内容*/
Article.prototype.AutoChangeContent = () => {
    console.warn('将在3S后自动变化博文内容！');

    let times = 3;

    let interVal = setInterval(() => {
        console.log(times + 'S后自动变化');
        times--;
        if (times <= 0) {
            console.warn('是不是感觉很神奇，哈哈！')
            return clearInterval(interVal);
        }
    }, 1000);

    setTimeout(() => {
        _article.BlogContent = {
            'title_lable': '博文',
            'title_blogName': '初探.net core',
            'lable': '.net core',
            'seeCount': '1000',
            'publishTime': '2019/10/08 00:01',
            'blog_text': '<div id="cnblogs_post_body" class="blogpost-body "><p>.net core目前已更新到3.0版本了，而我接触它不过一个月，没接触它之前感觉是如此陌生，知道了解甚至用它开发过项目后才明白是如此简单。</p><p>.net core据说比.net framework代码执行效率更高，最主要的是可以跨平台部署！最初在学习之际产生了一个想法，.net core是否真的比.net framework代码执行效率更高呢？</p><p>于是乎有了下列操作：</p><ol><li>代码执行效率比较，结论：同一段代码在.net core中执行确实比在.net framework中效率更高，近乎一倍，具体执行时间自行测试</li></ol><p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img src="https://img2018.cnblogs.com/blog/1801169/201909/1801169-20190921051046285-1751391897.png" alt="" /></p><p>&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2.api响应速度比较(就是5W次请求总耗时)，结论：.net core站点相应速度不如.net framework站点(均部署在IIS上，linux未测试)&nbsp;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img src="https://img2018.cnblogs.com/blog/1801169/201909/1801169-20190921051922527-38335514.png" alt="" /></p><p>&nbsp; &nbsp; &nbsp; &nbsp; .net core与.net framework站点接口代码：</p><p>&nbsp; &nbsp; &nbsp; &nbsp;<img src="https://img2018.cnblogs.com/blog/1801169/201909/1801169-20190921053350847-995244668.png" alt="" /></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; 第一个测试其实挺好理解的，就是500W次随机数，看谁的执行效率高，由于.net core在研发是做了一系列优化，所以比.net framework代码执行速度快这是可以理解的，那第二个测试呢？为什么反而不如.net framework程序呢？于是乎我请教了技术群的群友，换来的却是一顿嘲讽，说并发测试不是这样做的，我反复解释说我不是测试并发，而是测试同样请求次数两个程序的总耗时！有一个群友的回答说是，IIS对.net core程序的支持不好，换到linux试试？当时条件不允许未做linux上的测试(其实是不会linux，哈哈)</p><p>&nbsp;</p><p>这就是我刚开始接触.net core的样子了，有没有很下饭的感觉，哈哈😄</p><p>&nbsp;</p></div >'
        }
    }, 3000);
}

let article = new Article();

export default article;
