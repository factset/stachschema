using System.IO;
using FactSet.Protobuf.Stach.V2;

namespace FactSet.Stach.Generator.RowOrganized {
    internal class RowOrganizedEquitiesByRegionPackageBuilder : RowOrganizedPackageBuilderBase {
        private readonly string m_fileName;

        public RowOrganizedEquitiesByRegionPackageBuilder(string fileName) {
            this.m_fileName = fileName;
        }

        protected override RowOrganizedPackage DoBuild() {
            var path = Path.Combine(Constants.ExamplesPath, "RowOrganized", "EquitiesByRegion", this.m_fileName);
            var json = File.ReadAllText(path);
            var p = RowOrganizedPackage.Parser.ParseJson(json);
            return p;
        }
    }
}
