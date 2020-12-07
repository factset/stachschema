using System;
using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.DataType {
    internal class Int32 : DataType<int> {
        public static Int32 Instance = new Int32();
        private Int32() : base("int32") { }
        protected Int32(string name) : base(name) { }
        public override void SetValue(int value, Value jValue) => jValue.NumberValue = value;
        public override int GetValue(Value jValue) => Convert.ToInt32(jValue.NumberValue);
    }
}
