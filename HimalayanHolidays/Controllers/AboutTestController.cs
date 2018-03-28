using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Data.Items;
using HimalayanHolidays.Models;

namespace HimalayanHolidays.Controllers
{
    public class AboutTestController : Controller
    {
        // GET: AboutTest
        public ActionResult Index()
        {
            GlassBase glassbase = new GlassBase();
            var context = new SitecoreContext();
            glassbase = context.GetCurrentItem<GlassBase>();

            return View(glassbase);
        }
    }
}