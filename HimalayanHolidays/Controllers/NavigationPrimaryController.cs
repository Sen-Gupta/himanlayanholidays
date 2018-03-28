using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Data.Items;

namespace HimalayanHolidays.Controllers
{
    public class NavigationPrimaryController : Controller
    {
        // GET: NavigationPrimary
        public ActionResult Index()
        {
            Item homeItem = Sitecore.Context.Database.GetItem(Sitecore.Context.Site.StartPath);
            List<Item> ancestors = Sitecore.Context.Item.Axes.GetAncestors().ToList();
            ancestors.Add(Sitecore.Context.Item);



            //Get list of all the ancestors 

            return View(ancestors);
        }
    }
}