'use strict';

class ElemModel {
    constructor() {

        this.bodyElem = $('body');
        this.headElem = $('.info>.head_img');
        this.body_background_img_url = 'url(/Image/background/background.jpg)';
        this.head_img_url = 'url(/Image/head/head.jpg)';
        this.menuItem = $('.body>.left>.info>.site_remake>.item,.body>.left>.menu>.item');
        this.searchElem = $('.body>.right>.search_box>input');
        this.pageContentElem = $('.page_content');
        this.defaultPageElem = $('.default_page').first();
    }
}

class ImageUrlModel {
    constructor() {

        this.body_background_img_url = 'url(/Image/background/background.jpg)';
        this.head_img_url = 'url(/Image/head/head.jpg)';

        this.selected_this_css = 'selected_this';
    }
}

class StyleModel {
    constructor() {

        this.selected_this_css = 'selected_this';
    }
}

class Blog {
    constructor() {
        if (!window.$) {
            return console.error('依赖项Jquery未正确加载！');
        }
       
        this.elemModel = new ElemModel();
        this.imageModel = new ImageUrlModel();
        this.styleModel = new StyleModel();
    }
}

Blog.prototype.Init = function () {

    let context = this;

    context.InitBackground = function () {
        context.elemModel.bodyElem.css('background-image', context.imageModel.body_background_img_url);
        context.elemModel.headElem.css('background-image', context.imageModel.head_img_url);
    }();

    context.InitMenuEvent = function () {

        function setMenuSelected(elem) {
            context.elemModel.menuItem.removeClass(context.styleModel.selected_this_css);
            elem ? elem.addClass(context.styleModel.selected_this_css) : '';
            context.elemModel.clickElem.addClass(context.styleModel.selected_this_css)
        }

        context.elemModel.menuItem.hover(function () {
            setMenuSelected($(this));
        }, function () {
            setMenuSelected();
        });

        context.elemModel.menuItem.click(function () {
            context.elemModel.clickElem = $(this);
            setMenuSelected($(this));

            context.ChangePage($(this).data('href'));

            return false;
        });
    }();

    context.InitSearchInput = function () {
        context.elemModel.searchElem.focus(function () {
            let elem = $(this);
            elem.val() == elem.data('value') ? elem.val('') : '';
        })
        context.elemModel.searchElem.blur(function () {
            let elem = $(this);
            !elem.val() ? elem.val(elem.data('value')) : '';
        })
    }();

    context.InitDefaultPage = function () {
        context.elemModel.defaultPageElem.click();
    }();

}

Blog.prototype.ChangePage = function (url) {
    this.elemModel.pageContentElem.children().attr('src', url);
};

window.onresize = function (ev) {
    //console.log(ev);
}

let blog = new Blog();

export { blog };
