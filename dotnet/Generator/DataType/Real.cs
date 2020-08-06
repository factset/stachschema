using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.DataType {
    internal class Real : DataType<double> {
        public static Real Instance = new Real();
        private Real() : base("real") { }
        protected Real(string name) : base(name) { }
        public override void SetValue(double value, Value jValue) => jValue.NumberValue = value;
        public override double GetValue(Value jValue) => jValue.NumberValue;
    }
}
