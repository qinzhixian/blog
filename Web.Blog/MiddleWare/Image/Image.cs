using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.MiddleWare.Image
{
    public static class Image
    {
        public static IApplicationBuilder UseImageFiles(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ImageHandler>();
        }
    }
}
