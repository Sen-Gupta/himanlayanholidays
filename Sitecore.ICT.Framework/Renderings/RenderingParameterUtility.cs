using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;

namespace Sitecore.ICT.Framework.Renderings
{
    public static class RenderingParameterUtility
    {
        public static string hideImage(string hide)
        {
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
    }

    
}
