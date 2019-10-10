using Common.Util;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Web.Blog.Helper;

namespace Web.Blog.MiddleWare.Style
{
    public class StyleHandler
    {
        private readonly RequestDelegate _next;

        public StyleHandler(RequestDelegate next)
        {
            _next = next;
        }

        private static string extName = ".css";
        public async Task Invoke(HttpContext context)
        {
            string url = context.Request.Path;

            if (url.IndexOf(extName) < 1)
            {
                await _next.Invoke(context);

                return;
            }
            context.Response.ContentType = HttpContentTypeConst.style;
            try
            {
                await context.Response.SendFileAsync($"{StaticFilesHelper.StyleRootPath}/{url}");
            }
            catch (Exception)
            {
                await context.Response.WriteAsync("Output Style Error");
            }
        }
    }
}
