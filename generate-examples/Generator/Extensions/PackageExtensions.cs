using FactSet.Protobuf.Stach.V2;

namespace FactSet.Stach.Generator.Extensions {
    internal static class PackageExtensions {
        public static Package SetVersion(this Package package) {
            package.Version = "2.0";
            return package;
        }

        public static void Compress(this Package package) {
            foreach (var t in package.Tables.Values)
            foreach (var columnDefinition in t.Definition.Columns) {
                var columnData = t.Data.Columns[columnDefinition.Id];
                columnData.Compress();
            }
        }

        public static void Decompress(this Package package) {
            foreach (var t in package.Tables.Values)
            foreach (var columnDefinition in t.Definition.Columns) {
                var columnData = t.Data.Columns[columnDefinition.Id];
                columnData.Decompress();
            }
        }
    }
}
