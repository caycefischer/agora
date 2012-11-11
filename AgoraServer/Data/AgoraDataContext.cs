using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace Agora.Data
{
    internal class AgoraDataContext : DbContext
    {
        public AgoraDataContext() : base(new Settings().DatabaseConnectionString) { }       // TODO: Use DI

        public DbSet<SUser>      Users      { get; set; }
        public DbSet<SWorkspace> Workspaces { get; set; }
    }
}
