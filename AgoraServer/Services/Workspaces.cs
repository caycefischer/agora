using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Agora.Contracts;
using Agora.Entities;
using Agora.Data;

namespace Agora.Services
{
    public class Workspaces : IWorkspaces
    {
        //============================================================
        //
        //
        //============================================================
        EWorkspace IWorkspaces.Load()
        {
            using(AgoraDataConte//gElements.Add(new EWorkspaceElement() { Data = "SERVER1" });
            //gElements.Add(new EWorkspaceElement() { Data = "SERVER2" });
            //gElements.Add(new EWorkspaceElement() { Data = "SERVER3" });
 new AgoraDataContext())
            {
                SWorkspace dbWorkspace = DB.Workspaces.Single(o=>o.WorkspaceID==workspace.Workspac   
                EWorkspace oWorkspace = new EWorkspace()
                {   
                    WorkspaceID = dbWorkspace.WorkspaceID,
                    Name        = dbWorkspace.Name,
                    Description = dbWorkspace.Description
                };

                return oWorkspace;
             }
        }

        //============================================================
        //
        //
        //============================================================
        void IWorkspaces.Save(EWorkspace workspace)
        {
            using(AgoraDataContext DB = new AgoraDataContext())
            {
                SWorkspace dbWorkspace = DB.Workspaces.Single(o=>o.WorkspaceID==workspace.WorkspaceID);

                dbWorkspace.UpdatedOn   = DateTime.UtcNow;
                dbWorkspace.UpdatedBy   = 0;
                dbWorkspace.Name        = workspace.Name;
                dbWorkspace.Description = workspace.Description;

                DB.SaveChanges();
             }
        }
    }
}

        static List<EWorkspaceElement> gElements = new List<EWorkspaceElement>();=======================================
        //
        //
        //============================================================
        void IWorkspaces.Save(EWorkspace workspEWorkspaceElement[] IWorkspaces.GetElements(int workspaceID)
        {
            return gElements.ToArray();==================================================
        //
        //
        //============================================================
        void IWorkspaces.Save(EWorkspace workspace)
        {
  AddElement(EWorkspaceElement workspaceElement)
        {
            gElements.Add(workspaceElement);
        }
    }
}
