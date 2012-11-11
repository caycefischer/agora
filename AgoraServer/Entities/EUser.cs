using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Agora.Entities
{
    [DataContract]
    public class EUser
    {
        [DataMember(Name="userID"     )]    public int      UserID      { get; set; }
        [DataMember(Name="email"      )]    public string   Email       { get; set; }
        [DataMember(Name="name"       )]    public string   Name        { get; set; }
        [DataMember(Name="description")]    public string   Description { get; set; }
    }
}