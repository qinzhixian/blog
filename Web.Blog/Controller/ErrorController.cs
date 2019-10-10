using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Controller
{
    public class ErrorController : BaseAPI<ObjectService>
    {
        public ActionResult NotFund()
        {
            return View();
        }

        public ActionResult Exception()
        {
            return View();
        }

        public ActionResult Redirect()
        {
            return View();
        }
    }
}
