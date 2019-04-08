using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestSilo.Models
{
    public class SiloModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SiloValue { get; set; }
        public int MinValue { get; set; }
        public int MaxValue { get; set; }
    }
}
