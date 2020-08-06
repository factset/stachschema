using System.Linq;
using FactSet.Protobuf.Stach.Table;

namespace FactSet.Stach.Generator.Extensions {
    internal static class ColumnDataCompressionExtensions {
        public static void Compress(this ColumnData columnData) {
            var list = columnData.Values.Values;
            object prevValue = null;
            var currRangeIndex = -1;
            var currRangeLength = 0;
            for (var i = 0; i < list.Count; i++) {
                var value = list[i];
                if (value.Equals(prevValue)) {
                    if (currRangeIndex < 0) {
                        currRangeIndex = i;
                    }
                    currRangeLength++;
                } else {
                    if (currRangeLength > 1) {
                        columnData.Ranges.Add(currRangeIndex, currRangeLength);
                    }
                    currRangeIndex = i;
                    currRangeLength = 1;
                }

                prevValue = value;
            }
            if (currRangeLength > 2) {
                columnData.Ranges.Add(currRangeIndex, currRangeLength);
            }

            var orderedRanges = columnData.Ranges.Select(kvp => kvp).OrderByDescending(kvp => kvp.Key);
            foreach (var range in orderedRanges) {
                for (var i = 0; i < range.Value - 1; i++) {
                    list.RemoveAt(range.Key);
                }
            }
        }

        public static void Decompress(this ColumnData columnData) {
            var list = columnData.Values.Values;
            foreach (var range in columnData.Ranges) {
                var value = list[range.Key];
                for (var i = 0; i < range.Value - 1; i++) {
                    list.Insert(range.Key, value);
                }
            }
            columnData.Ranges.Clear();
        }
    }
}
