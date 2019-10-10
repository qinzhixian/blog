using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.MiddleWare.Style
{
    public static class Style
    {
        public static IApplicationBuilder UseStyleFiles(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<StyleHandler>();
        }
    }
}
