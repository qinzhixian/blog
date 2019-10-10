using Common.Util;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Web.Blog.Helper;

namespace Web.Blog.MiddleWare
{
    public class ALLHandler
    {
        private readonly RequestDelegate _next;

        public ALLHandler(RequestDelegate next)
        {
            _next = next;
        }

       
        public async Task Invoke(HttpContext context)
        {
            string url = context.Request.Path;

            if (url.IndexOf('.') < 1)
            {
                await _next.Invoke(context);

                return;
            }
            string contentType = HttpContentTypeConst.html;

            if(url.Contains("Script"))
            {
                contentType = HttpContentTypeConst.script;
            }
            else if (url.Contains("Style"))
            {
                contentType = HttpContentTypeConst.style;
            }
            else if (url.Contains("Image"))
            {
                contentType = HttpContentTypeConst.png;
            }
            context.Response.ContentType = contentType;
            try
            {
                await context.Response.SendFileAsync($"{StaticFilesHelper.StaticFilesRootPath}/{url}");
            }
            catch (Exception)
            {
                await context.Response.WriteAsync("Output Script Error");
            }
        }
    }
}

