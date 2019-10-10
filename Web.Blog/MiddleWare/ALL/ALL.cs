using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.MiddleWare.ALL
{
    public static class ALL
    {
        public static IApplicationBuilder UseAllStaticFiles(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ALLHandler>();
        }
    }
}
