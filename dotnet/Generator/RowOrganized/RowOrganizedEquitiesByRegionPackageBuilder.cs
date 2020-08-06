using System;
using System.IO;
using System.Reflection;
using FactSet.Protobuf.Stach;

namespace FactSet.Stach.Generator.RowOrganized {
    internal class RowOrganizedEquitiesByRegionPackageBuilder : RowOrganizedPackageBuilderBase {
        private static readonly string Cwd = Path.GetDirectoryName(new Uri(Assembly.GetExecutingAssembly().CodeBase).LocalPath);
        private static readonly string RepoRootPath = Path.GetFullPath(Path.Combine(Cwd, "../../../../../"));
        private static readonly string DocsPath = Path.Combine(RepoRootPath, "docs");
        private static readonly string ExamplesPath = Path.Combine(DocsPath, "examples");
        private readonly string m_fileName;

        public RowOrganizedEquitiesByRegionPackageBuilder(string fileName) {
            this.m_fileName = fileName;
        }

        protected override RowOrganizedPackage DoBuild() {
            var path = Path.Combine(ExamplesPath, "RowOrganized", "EquitiesByRegion", this.m_fileName);
            var json = File.ReadAllText(path);
            var p = RowOrganizedPackage.Parser.ParseJson(json);
            return p;
        }
    }
}
