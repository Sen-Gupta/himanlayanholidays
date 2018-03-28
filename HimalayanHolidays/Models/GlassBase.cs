using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;

namespace HimalayanHolidays.Models
{
    [SitecoreType]
    public class GlassBase
    {
        [SitecoreField]
        public virtual Guid Id { get; set; }

        [SitecoreField("Title")]
        public virtual string Title { get; set; }

        [SitecoreField("Image")]
        public virtual Image Image { get; set; }

        [SitecoreField("Link Url")]
        public virtual Link Url { get; set; }


        [SitecoreField("Text")]
        public virtual string Text { get; set; }


    }
}