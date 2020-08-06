using System.Reflection;
using FactSet.Protobuf.Stach;

namespace FactSet.Stach.Generator.Extensions {
    internal static class RowOrganizedPackageExtensions {
        public static RowOrganizedPackage SetVersion(this RowOrganizedPackage @this) {
            var assemName = new AssemblyName(typeof(Package).AssemblyQualifiedName.Replace(typeof(Package).FullName + ", ", ""));
            @this.Version = assemName.Version.ToString(2);
            return @this;
        }

    }
}
