﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace Web.Blog
{
    class Program
    {
        static void Main(string[] args)
        {
            var host = CreateWebHost(80);

            host.RunAsync();

            Console.WriteLine("host is started");

            Console.ReadLine();
        }

        static IWebHost CreateWebHost(int port)
        {
            return new WebHostBuilder()
            .UseUrls($"http://127.0.0.1:{port}")
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseStartup<Startup>()
            .Build();
        }
    }
}