using FactSet.Protobuf.Stach.V2.Table;
using FactSet.Stach.Generator.DataType;
using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.Extensions {
    internal static class ColumnDataExtensions {
        public static void SetValue(this ColumnData columnData, ColumnDefinition columnDefinition, int index, object value) {
            if (columnData.Values == null) {
                columnData.Values = new ListValue();
            }

            for (var i = columnData.Values.Values.Count; i < index; i++) {
                columnData.Values.Values.Add(Value.ForNull());
            }

            if (value == null) {
                return;
            }

            var jValue = columnData.Values.Values[index];

            var dataType = DataTypes.Get(columnDefinition.Type);
            dataType.Set(value, jValue);
        }
    }
}
