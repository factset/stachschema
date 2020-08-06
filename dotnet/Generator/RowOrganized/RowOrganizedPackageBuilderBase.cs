using FactSet.Protobuf.Stach;
using FactSet.Stach.Generator.Extensions;

namespace FactSet.Stach.Generator.RowOrganized {
    internal abstract class RowOrganizedPackageBuilderBase : IRowOrganizedPackageBuilder {
        public RowOrganizedPackage Build() {
            var p = DoBuild();
            p.SetVersion();
            return p;
        }

        protected virtual RowOrganizedPackage DoBuild() {
            return new RowOrganizedPackage();
        }

        public override string ToString() {
            return GetType().Name.Replace("PackageBuilder", "");
        }
    }
}
