using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.DataType {
    internal interface IDataType {
        string Name { get; }
        void Set(object value, Value jValue);
        object Get(Value jValue);
        Value Create(object value);
    }
}
