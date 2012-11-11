using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;

namespace Agora
{
	class Settings
	{
		//==================================================
		//
		//
		//==================================================
		public string DatabaseConnectionString { get { return ConfigurationManager.ConnectionStrings["AgoraDB"].ConnectionString; } }
	}
}
