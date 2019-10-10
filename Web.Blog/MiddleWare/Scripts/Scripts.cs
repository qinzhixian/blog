using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.MiddleWare.Scripts
{
    public static class Script
    {
        public static IApplicationBuilder UseScriptFiles(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ScriptHandler>();
        }
    }
}
