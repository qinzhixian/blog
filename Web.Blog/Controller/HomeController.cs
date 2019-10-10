using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using Web.Blog.Helper;

namespace Web.Blog.API
{
    public class HomeController : BaseAPI<ObjectService>
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult test()
        {
            return JsonResult(new {name="qzx" });
        }
        public ActionResult Error(int code = 500)
        {
            string pageName;
            if (code == 404)
            {
                pageName = "NotFund";
            }
            else if (code == 500)
            {
                pageName = "Exception";
            }
            else
            {
                pageName = "Redirect";
            }

            return View("Error", pageName);
            //return OutPut.ResponseErrorPage(code);
        }

    }
}
