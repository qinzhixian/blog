using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Controller
{
    public class ArticleController : BaseAPI<ObjectService>
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
