using FactSet.Protobuf.Stach.V2;

namespace FactSet.Stach.Generator.Extensions {
    internal static class RowOrganizedPackageExtensions {
        public static RowOrganizedPackage SetVersion(this RowOrganizedPackage @this) {
            @this.Version = "2.0";
            return @this;
        }

    }
}
