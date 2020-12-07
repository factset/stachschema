using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.DataType {
    internal class String : DataType<string> {
        public static String Instance = new String();
        private String() : base("string") { }
        protected String(string name) : base(name) { }
        public override void SetValue(string value, Value jValue) => jValue.StringValue = value;
        public override string GetValue(Value jValue) => jValue.StringValue;
    }
}
