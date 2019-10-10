using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Web.Blog.Helper
{
    public static class ViewHelper
    {
        private static Dictionary<string, string> viewContent = new Dictionary<string, string>();
        public static async void AddHtmlFiles(this IServiceCollection services)
        {

            return; await Task.Run(() =>
              {
                  var directorysPath = System.IO.Directory.GetDirectories(StaticFilesHelper.ViewsRootPath);

                  foreach (var dirPath in directorysPath)
                  {
                      var files = System.IO.Directory.GetFiles(dirPath);

                      string dirName = dirPath.Split(@"\").Last();

                      foreach (var file in files)
                      {
                          string fileName = file.Split(@"\").Last().Split(".")[0];

                          viewContent.Add($"{dirName}/{fileName}", System.IO.File.ReadAllText(file));
                      }
                  }
              });
        }

        public static string GetView(string controllerName, string viewName)
        {
            //string key = $"{Regex.Replace(controllerName, "Controller", "", RegexOptions.IgnoreCase)}/{viewName}";
            //return viewContent.ContainsKey(key) ? viewContent[key] : string.Empty;

            controllerName = Regex.Replace(controllerName, "Controller", "", RegexOptions.IgnoreCase);

            var viewPath = $"{StaticFilesHelper.ViewsRootPath}/{controllerName}/{viewName}.html";

            return System.IO.File.ReadAllText(viewPath);
        }
    }
}
