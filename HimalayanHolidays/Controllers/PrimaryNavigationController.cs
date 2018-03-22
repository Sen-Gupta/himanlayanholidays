using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Data.Items;



namespace HimalayanHolidays.Controllers
{
    public class PrimaryNavigationController : Controller
    {
        // GET: PrimaryNavigation
        public ActionResult Index()
        {
            
            Item homeItem = Sitecore.Context.Database.GetItem(Sitecore.Context.Site.StartPath);
            List<Item> ancestors = Sitecore.Context.Item.Axes.GetAncestors().ToList();
            ancestors.Add(Sitecore.Context.Item);

            ancestors.RemoveRange(0, ancestors.FindIndex(x => x.ID == homeItem.ID));

             ancestors = ancestors.FindAll(x=>x["include in Navigation"] == "1").ToList();
           
            //Get list of all the ancestors 
            
            return View(ancestors);
        }
        
    }
}