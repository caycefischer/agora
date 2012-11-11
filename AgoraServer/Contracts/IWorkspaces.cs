using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Agora.Entities;
using System.ServiceModel.Web;

namespace Agora.Contracts
{
    [ServiceContract]
    public interface IWorkspaces
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json)]
        EWorkspace Load();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        void Save(EWorkspace user);
    }
}
rationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json)]
        EWorkspace Load();

      Element[] GetElements(int workspaceIDrationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        void Save(EWorkspace userAddElement(EWorkspaceElement workspaceElement);
    }
}
