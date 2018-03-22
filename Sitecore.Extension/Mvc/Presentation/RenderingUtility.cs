using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Mvc.Presentation;
using Sitecore.Data.Items;
using Sitecore.Data.Fields;

namespace Sitecore.Extension.Mvc.Presentation
{
    public static class RenderingUtility
    {
        public static string HideImage(this Rendering theRendering)
        {
            //Rendering Field is hard coded to  "hideImage"
            //read value of HideImage Rendering paramter
            string hide = theRendering.Parameters["hideImage"];

            if(hide == "1")
            {
                Item theSetting = Sitecore.Context.Database.GetItem("{A5585EFC-DF8D-409C-A1ED-0D86FE26EE96}");
                Sitecore.Diagnostics.Assert.ArgumentNotNull(theSetting, "item");
                return theSetting["Setting Name"];
            }
            else
            {
                return string.Empty;
            }
            
        }
        public static string BackgroundColor(this Rendering theRendering)
        {
            //Rendering Field is hard coded to  "hideImage"
            //read value of HideImage Rendering paramter
            string theSelectedColor = theRendering.Parameters["backgroundColor"];
            if(!String.IsNullOrEmpty(theSelectedColor))
            {
                Item theBackgroundColor = Sitecore.Context.Database.GetItem(theRendering.Parameters["backgroundColor"]);
                Sitecore.Diagnostics.Assert.ArgumentNotNull(theBackgroundColor, "item");
                return theBackgroundColor["Setting Name"];

            }
            else
            {
                return string.Empty;
            }

           
            
          
            

        }
    }
}
