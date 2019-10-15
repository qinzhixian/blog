using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using Web.Blog.Helper;
using Web.Blog.MiddleWare.Scripts;
using Web.Blog.MiddleWare.Style;
using Web.Blog.MiddleWare.Image;
using Microsoft.Extensions.Configuration.Json;
using System.Threading.Tasks;
using Web.Blog.MiddleWare.ALL;
using Microsoft.AspNetCore.Diagnostics;

namespace Web.Blog
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(config =>
            {
                //config.Filters.Add(new AuthorizationFilter());
                //config.Filters.Add(new ActionFilter());
                //config.Filters.Add(new ExceptionFilter());
            });

            services.AddHtmlFiles();

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider svp)
        {
            //app.UseScriptFiles();
            //app.UseStyleFiles();
            //app.UseImageFiles();
            app.UseAllStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(errorApp =>
                {
                    errorApp.Run(async context =>
                    {
                        var ex = context.Features.Get<IExceptionHandlerFeature>();

                        System.IO.File.AppendAllText("c:/web/error.txt", DateTime.Now + "\r\n" + ex.Error.ToString());

                        context.Response.Redirect("/Home/Error?code=500");

                        await context.Response.WriteAsync(new string(' ', 512)); // IE padding
                        //await context.Response.WriteAsync(ex.Error.ToString()); // IE padding
                    });
                });
            }

            app.UseStatusCodePagesWithRedirects("/Home/Error?code={0}");

            app.UseMvc(s =>
            {
                s.MapRoute("default", "{controller}/{action}/{id?}", new { controller = "Home", action = "Index" });
            });
        }

    }
}
