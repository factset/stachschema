using System.Linq;
using FactSet.Protobuf.Stach;
using FactSet.Protobuf.Stach.Table;
using FactSet.Stach.Generator.ColumnOrganized;

namespace FactSet.Stach.Generator.Builders {
    internal static class ColumnOrganizedEquitiesByRegion {
        public static readonly Package Package = new EquitiesByRegionPackageBuilder().Build();
        public static Table MainTable => Package.Tables["main"];
        public static ColumnDefinition RegionUrlColumn => MainTable.Definition.Columns.First(cd => string.Equals(cd.Name, "regionUrl"));
        public static ColumnDefinition Continent1Column => MainTable.Definition.Columns.First(cd => string.Equals(cd.Name, "continent1"));
        public static ColumnDefinition Fund0Column => MainTable.Definition.Columns.First(cd => string.Equals(cd.Name, "fund0")); 
    }
}
