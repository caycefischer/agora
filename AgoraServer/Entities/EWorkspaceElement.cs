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
  Element
    {
        [DataMember(Name="workspaceElementID" )]    public int      WorkspaceID         { get; set; }
        [DataMember(Name="workspaceElementUID")]    public string   WorkspaceElementUID { get; set; }
        [DataMember(Name="data"               )]    public string   Data                { get; set; }
    }
}