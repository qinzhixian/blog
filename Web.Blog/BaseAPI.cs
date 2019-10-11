using Common.Util;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using Web.Blog.Helper;

namespace Web.Blog
{
    public class BaseAPI<T> : ControllerBase where T : class, IDisposable, new()
    {
        //可在构造函数中创建
        protected static T Service = new T();


        #region 输出数据

        /// <summary>
        /// 返回表格数据
        /// </summary>
        /// <param name="data"></param>
        /// <param name="page"></param>
        /// <param name="limit"></param>
        /// <param name="dataCount"></param>
        /// <returns></returns>
        protected ActionResult TableResult(object data, int page, int limit, int dataCount)
        {
            return OutPut.JsonContent(new { page, total = CoumputPageCount(limit, dataCount), records = dataCount, rows = data });
        }

        /// <summary>
        /// 返回JSON格式数据
        /// </summary>
        /// <param name="data"></param>
        /// <param name="status"></param>
        /// <param name="msg"></param>
        /// <returns></returns>
        protected ActionResult JsonResult(object data = null, bool status = true, string msg = "", int dataCount = 0)
        {
            return OutPut.JsonContent(new { data, code = status ? 0 : 500, msg, dataCount });
        }

        /// <summary>
        /// 客户端弹窗
        /// </summary>
        /// <param name="msg"></param>
        /// <param name="location"></param>
        /// <returns></returns>
        protected ActionResult MessageBox(string msg, string location = "")
        {
            return OutPut.MessageBox(msg, location);
        }

        /// <summary>
        /// JavaScript脚本
        /// </summary>
        /// <param name="script"></param>
        /// <returns></returns>
        protected ActionResult JavascriptTag(string script)
        {
            return OutPut.JavascriptTag(script);
        }

        /// <summary>
        /// 计算页数
        /// </summary>
        /// <param name="limit"></param>
        /// <param name="dataCount"></param>
        /// <returns></returns>
        private int CoumputPageCount(int limit, int dataCount)
        {
            decimal res = (dataCount + limit - 1) / limit;
            return (int)Math.Ceiling(res);
        }

        /// <summary>
        /// 返回视图
        /// </summary>
        /// <returns></returns>
        protected ActionResult View()
        {
            StackTrace trace = new StackTrace();

            string controllerName = trace.GetFrame(1).GetMethod().DeclaringType.Name;

            string viewName = trace.GetFrame(1).GetMethod().Name;

            return View(controllerName, viewName);
        }

        /// <summary>
        /// 返回视图
        /// </summary>
        /// <param name="controllerName"></param>
        /// <param name="viewName"></param>
        /// <returns></returns>
        protected ActionResult View(string controllerName, string viewName)
        {
            var html = ViewHelper.GetView(controllerName, viewName);

            HttpContext.Response.Headers.Add("Cache-Control", "max-age=315360000");
            HttpContext.Response.Headers.Add("Expires", DateTime.MaxValue.ToString());

            return Content(html, HttpContentTypeConst.html);
        }

        #endregion


        public static void Dispose()
        {
            if (Service != null)
            {
                Service.Dispose();
            }
        }
    }
}
