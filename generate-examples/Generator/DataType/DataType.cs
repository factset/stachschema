using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.DataType {
    internal abstract class DataType<T> : IDataType {
        public string Name { get; }

        protected DataType(string name) {
            this.Name = name;
        }

        public abstract void SetValue(T value, Value jValue);
        public abstract T GetValue(Value jValue);

        public Value Create(T value) {
            if (value == null) return Value.ForNull();
            var jValue = new Value();
            this.SetValue(value, jValue);
            return jValue;
        }

        public void Set(object value, Value jValue) {
            this.SetValue((T) value, jValue);
        }

        public Value Create(object value) {
            if (value == null) return Value.ForNull();
            return this.Create((T) value);
        }

        public object Get(Value jValue) {
            return this.GetValue(jValue);
        }

        public override string ToString() {
            return this.Name;
        }
    }
}
