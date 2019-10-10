using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Blog.Controller
{
   public class AccountController : BaseAPI<ObjectService>
    {
        public ActionResult Login()
        {
            return View();
        }
    }
}
