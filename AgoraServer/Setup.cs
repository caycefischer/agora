using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.ServiceModel.Configuration;
using System.ServiceModel;
using System.ServiceModel.Dispatcher;
using System.ServiceModel.Description;

namespace Agora
{
    class Setup
    {
        private static SortedList<string, ServiceHost> gServiceHosts = new SortedList<string, ServiceHost>();

        //============================================================
        //
        //
        //============================================================
        public static void StartServices()
        {
            Configuration            oConfiguration = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            ServiceModelSectionGroup oServiceModel  = ServiceModelSectionGroup.GetSectionGroup(oConfiguration);

            if(oServiceModel==null)
                throw new Exception("App.config <system.serviceModel> section not found");

            foreach(ServiceElement oServiceElement in oServiceModel.Services.Services)
            {
                if(string.IsNullOrEmpty(oServiceElement.Name))
                    throw new Exception("No service name supplied");

                Type oServiceType = Type.GetType(oServiceElement.Name, false);

                if(oServiceType==null)
                    throw new Exception("Service type cannont be resolved: " + oServiceElement.Name);

                Console.WriteLine("Starting service: "+oServiceElement.Name);

                KronosServiceHosts oServiceHost = new KronosServiceHosts(oServiceType);

                foreach(var oContract in oServiceHost.Contracts)
                    Console.WriteLine(" - service contract: "+oContract.ContractType);

                gServiceHosts[oServiceElement.Name] = oServiceHost;

                oServiceHost.Open();

                foreach(ChannelDispatcher oChannelDispatcher in oServiceHost.ChannelDispatchers)
                    Console.WriteLine(" - service endpoint: "+oChannelDispatcher.Listener.Uri);
            }
        }

        //============================================================
        //
        //
        //============================================================
        private static void StopServices()
        {
            foreach(ServiceHost oServiceHost in gServiceHosts.Values)
            {
                if(oServiceHost.State == CommunicationState.Opened)
                    oServiceHost.Close();
            }
        }

        private class KronosServiceHosts : ServiceHost
        {
            public KronosServiceHosts(Type serviceType) : base(serviceType)
            {
            }

            public ContractDescription[] Contracts
            {
                get { return ImplementedContracts.Values.ToArray(); }
            }
        }
    }
}
