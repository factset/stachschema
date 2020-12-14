using FactSet.Protobuf.Stach.V2;
using FactSet.Stach.Generator.ColumnOrganized.Tables;

namespace FactSet.Stach.Generator.ColumnOrganized {
    internal class EquitiesByRegionPackageBuilder : PackageBuilderBase {
        protected override Package DoBuild() {
            var p = base.DoBuild();
            this.AddTable(p, "main", new EquitiesByRegionBuilder(), "headers", new EquitiesByRegionHeadersBuilder());
            return p;
        }
    }
}
