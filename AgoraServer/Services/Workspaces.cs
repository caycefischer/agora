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
            using(AgoraDataContext DB = new AgoraDataContext())
            {
                SWorkspace dbWorkspace = DB.Workspaces.First();
                
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
