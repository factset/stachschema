using FactSet.Protobuf.Stach;
using FactSet.Stach.Generator.RowOrganized;

namespace FactSet.Stach.Generator.Builders {
    internal static class RowOrganizedEquitiesByRegionMaps {
        public static readonly RowOrganizedPackage Package = new RowOrganizedEquitiesByRegionPackageBuilder("DefaultMaps.json").Build();
        public static RowOrganizedPackage.Types.Table MainTable => Package.Tables["main"];
    }
}
