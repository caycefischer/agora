using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Agora.Entities
{
    [DataContract]
    public class EWorkspace
    {
        [DataMember(Name="workspaceID")]    public int      WorkspaceID { get; set; }
        [DataMember(Name="name"       )]    public string   Name        { get; set; }
        [DataMember(Name="description")]    public string   Description { get; set; }
    }
}