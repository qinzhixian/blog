using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Helper
{
    public static class StaticFilesHelper
    {
        public static string StaticFilesRootPath
        {
            get
            {
                //string exePath = AppDomain.CurrentDomain.BaseDirectory;
                //string staticFilesName = "StaticFiles";
                //#if DEBUG
                //                return $"{ System.IO.Path.GetFullPath("../../../")}/{staticFilesName}";
                //#endif
                //                return $"{exePath}/{staticFilesName}";

                return ConfigHelper.GetValue("StaticFilesPath");

            }
        }
        public static string ViewsRootPath
        {
            get
            {
                return $"{StaticFilesRootPath}/View";
            }
        }
        public static string ScriptsRootPath
        {
            get
            {
                return $"{StaticFilesRootPath}/Script";
            }
        }
        public static string StyleRootPath
        {
            get
            {
                return $"{StaticFilesRootPath}/Style";
            }
        }
        public static string ImageRootPath
        {
            get
            {
                return $"{StaticFilesRootPath}/Image";
            }
        }
    }
}
