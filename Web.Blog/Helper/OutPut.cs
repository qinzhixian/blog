using Common.Util;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Helper
{
    public class OutPut
    {
        public static object responseData { get; set; } = new object();

        /// <summary>
        /// 序列化
        /// </summary>
        public static string JsonSerialize(object data)
        {
            return Common.Util.JsonUtil.Serialize(data);
        }

        /// <summary>
        /// 脚本
        /// </summary>
        public static ActionResult JavascriptTag(string scriptString)
        {
            return ResponseInfo($"<script>{scriptString}</script>", HttpContentTypeConst.html);
        }

        /// <summary>
        /// 返回错误
        /// </summary>
        public static ActionResult JsonError(string msg)
        {
            return JsonResult(status: false, msg: msg);
        }

        /// <summary>
        /// Json结果集
        /// </summary>
        public static ActionResult JsonResult(object data = null, bool status = true, string msg = "", int count = 0)
        {
            return JsonContent(new { data, code = status ? 0 : 404, msg, count });
        }

        /// <summary>
        /// Json结果集
        /// </summary>
        public static ActionResult JsonResult(object data = null, int code = 0, string msg = "", int count = 0)
        {
            return JsonContent(new { data, code, msg, count });
        }

        /// <summary>
        /// Json数据
        /// </summary>
        public static ActionResult JsonContent(object data)
        {
            return ResponseInfo(JsonSerialize(data));
        }

        /// <summary>
        /// 弹窗
        /// </summary>
        public static ActionResult MessageBox(string msg, string location = "", bool self = true)
        {
            if (string.IsNullOrEmpty(location))
            {
                return JavascriptTag("layer.alert('" + msg + "');");
            }
            if (self)
            {
                return JavascriptTag($"layer.alert('{msg}');location='{location}';");
            }
            return JavascriptTag($"layer.alert('{msg}');window.parent.location='{location}';");

        }

        /// <summary>
        /// 跳转
        /// </summary>
        public static ActionResult Redirect(string location)
        {
            return JavascriptTag($"window.location='{ location}';");
        }

        /// <summary>
        /// 输出内容(返回数据所有接口统一执行)
        /// </summary>
        public static ActionResult ResponseInfo(string res = "", string contentType = HttpContentTypeConst.json)
        {
            //记录返回数据
            responseData = res;

            return new ContentResult()
            {
                Content = res,
                ContentType = contentType
            };
        }

        /// <summary>
        /// 跳转错误页面
        /// </summary>
        /// <param name="errorCode"></param>
        public static void RedirectErrorPage(int errorCode = 500)
        {
            string pageName;
            if (errorCode == 404)
            {
                pageName = "NotFund";
            }
            else if (errorCode == 500)
            {
                pageName = "Exception";
            }
            else
            {
                pageName = "Redirect";
            }
            Redirect($"/Error/{pageName}");
        }

        public static ActionResult ResponseErrorPage(int errorCode = 500)
        {
            string pageName;
            if (errorCode == 404)
            {
                pageName = "NotFund";
            }
            else if (errorCode == 500)
            {
                pageName = "Exception";
            }
            else
            {
                pageName = "Redirect";
            }
            return Redirect($"/Error/{pageName}");
        }
    }
}
