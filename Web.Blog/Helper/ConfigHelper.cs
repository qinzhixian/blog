using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Helper
{
  public static  class ConfigHelper
    {
       static IConfiguration configuration;
        static ConfigHelper()
        {
            configuration = new Microsoft.Extensions.Configuration.ConfigurationBuilder().Add(new JsonConfigurationSource { Path = "appsettings.json", ReloadOnChange = true }).Build();
        }
       
        public static string GetValue(string key)
        {
            return configuration?[key];
        }
    }
}
