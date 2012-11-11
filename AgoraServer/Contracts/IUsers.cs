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
    public interface IUsers
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json)]
        EUser Load();

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        void Save(EUser user);

      //  [OperationContract]
        //int Exists(int userID);

     //   [OperationContract]
       // int LookupByEmail(string email);

      //  [OperationContract]
      //  bool Authentify(int userID, string password);
    }
}
