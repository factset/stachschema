using System;

namespace FactSet.Protobuf.Stach.Table {
    public partial class SeriesData {
        public void Normalize(SeriesDefinition seriesDefinition) {
            switch (seriesDefinition.Type) {
                case DataType.Bool:
                    this.BoolArray = this.BoolArray ?? new BoolArray();
                    break;
                case DataType.Double:
                    this.DoubleArray = this.DoubleArray ?? new DoubleArray();
                    break;
                case DataType.Duration:
                    this.DurationArray = this.DurationArray ?? new DurationArray();
                    break;
                case DataType.Float:
                    this.FloatArray = this.FloatArray ?? new FloatArray();
                    break;
                case DataType.Int32:
                    this.Int32Array = this.Int32Array ?? new Int32Array();
                    break;
                case DataType.Int64:
                    this.Int64Array = this.Int64Array ?? new Int64Array();
                    break;
                case DataType.String:
                    this.StringArray = this.StringArray ?? new StringArray();
                    break;
                case DataType.Timestamp:
                    this.TimestampArray = this.TimestampArray ?? new TimestampArray();
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}
