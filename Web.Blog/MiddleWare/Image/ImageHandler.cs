using System;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Web.Blog.Helper;
using Common.Util;

namespace Web.Blog.MiddleWare.Image
{
    public class ImageHandler
    {

        private readonly RequestDelegate _next;

        public ImageHandler(RequestDelegate next)
        {
            _next = next;
        }

        private static string extName = ".jpg";
        public async Task Invoke(HttpContext context)
        {
            string url = context.Request.Path;

            if (url.IndexOf(extName) < 1)
            {
                await _next.Invoke(context);

                return;
            }
            context.Response.ContentType = HttpContentTypeConst.png;
            try
            {
                await context.Response.SendFileAsync($"{StaticFilesHelper.ImageRootPath}/{url}");
            }
            catch (Exception)
            {
                await context.Response.WriteAsync("Error in Output Picture");
            }
        }
    }
}
