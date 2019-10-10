using Common.Util;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;
using Web.Blog.Helper;

namespace Web.Blog.MiddleWare.Scripts
{
    public class ScriptHandler
    {
        private readonly RequestDelegate _next;

        public ScriptHandler(RequestDelegate next)
        {
            _next = next;
        }

        private static string extName = ".js";
        public async Task Invoke(HttpContext context)
        {
            string url = context.Request.Path;

            if (url.IndexOf(extName) < 1)
            {
                await _next.Invoke(context);

                return;
            }
            context.Response.ContentType = HttpContentTypeConst.script;
            try
            {
                await context.Response.SendFileAsync($"{StaticFilesHelper.ScriptsRootPath}/{url}");
            }
            catch (Exception)
            {
                await context.Response.WriteAsync("Output Script Error");
            }
        }
    }
}
