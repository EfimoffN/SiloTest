using System;
using System.Collections.Generic;

namespace TestSilo
{
    public partial class Silo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SiloValue { get; set; }
        public int MinValue { get; set; }
        public int MaxValue { get; set; }
    }
}
