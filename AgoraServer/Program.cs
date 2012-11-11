using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Agora
{
    class Program
    {
        static void Main(string[] args)
        {
            Setup.StartServices();
            Console.WriteLine("Ready...");
            Console.ReadKey();
        }
    }
}
