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
    public class Users : IUsers
    {
        //============================================================
        //
        //
        //============================================================
        EUser IUsers.Load()
        {
            using(AgoraDataContext DB = new AgoraDataContext())
            {
                SUser dbUser = DB.Users.Single(o=>o.UserID==3);
                
                EUser oUser = new EUser()
                {   
                    UserID      = dbUser.UserID,
                    Email       = dbUser.Email,
                    Name        = dbUser.Name,
                    Description = dbUser.Description
                };

                return oUser;
             }
        }

        //============================================================
        //
        //
        //============================================================
        void IUsers.Save(EUser user)
        {
            using(AgoraDataContext DB = new AgoraDataContext())
            {
                SUser dbUser = DB.Users.Single(o=>o.UserID==user.UserID);

                dbUser.UpdatedOn   = DateTime.UtcNow;
                dbUser.UpdatedBy   = 0;
                dbUser.Email       = user.Email;
                dbUser.Name        = user.Name;
                dbUser.Description = user.Description;

                DB.SaveChanges();
             }
        }

        //============================================================
        //
        //
        //============================================================
      /*  int IUsers.Exists(int userID)
        {
            throw new NotImplementedException();
        }

        //============================================================
        //
        //
        //============================================================
        int IUsers.LookupByEmail(string email)
        {
            throw new NotImplementedException();
        }

        //============================================================
        //
        //
        //============================================================
        bool IUsers.Authentify(int userID, string password)
        {
            throw new NotImplementedException();
        }*/
    }
}
