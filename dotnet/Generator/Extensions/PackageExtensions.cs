using System.Reflection;
using FactSet.Protobuf.Stach;

namespace FactSet.Stach.Generator.Extensions {
    internal static class PackageExtensions {
        public static Package SetVersion(this Package package) {
            var assemName = new AssemblyName(typeof(Package).AssemblyQualifiedName.Replace(typeof(Package).FullName + ", ", ""));
            package.Version = assemName.Version.ToString(2);
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
