using FactSet.Protobuf.Stach;
using FactSet.Stach.Generator.ColumnOrganized.Tables;
using FactSet.Stach.Generator.Extensions;

namespace FactSet.Stach.Generator.ColumnOrganized {
    internal abstract class PackageBuilderBase : IPackageBuilder {
        public Package Build() {
            var p = DoBuild();
            p.Decompress();
            p.SetVersion();
            return p;
        }

        protected virtual Package DoBuild() {
            return new Package();
        }

        protected void AddTable(Package package, string mainTableId, ITableBuilder mainTableBuilder, string headersTableId = null, ITableBuilder headersTableBuilder = null) {
            var mainTable = mainTableBuilder.Build();
            if (mainTable != null) {
                package.PrimaryTableIds.Add(mainTableId);
                package.Tables.Add(mainTableId, mainTable);
                if (!string.IsNullOrWhiteSpace(headersTableId) && headersTableBuilder != null) {
                    mainTable.Definition.HeaderTableId = headersTableId;
                    var headersTable = headersTableBuilder.Build();
                    package.Tables.Add(headersTableId, headersTable);
                }
            }
        }

        public override string ToString() {
            return GetType().Name.Replace("PackageBuilder", "");
        }
    }
}
