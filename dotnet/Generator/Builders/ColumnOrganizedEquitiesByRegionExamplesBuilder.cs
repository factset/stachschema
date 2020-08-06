using FactSet.Stach.Generator.Extensions;
using Google.Protobuf;

namespace FactSet.Stach.Generator.Builders {
    internal interface IExamples : IMessageCollectionBuilder {
        string Path { get; }
    }

    internal class ColumnOrganizedEquitiesByRegionExamplesBuilder : MessageCollectionBuilder, IExamples {
        public string Path { get; }

        public ColumnOrganizedEquitiesByRegionExamplesBuilder(string path) {
            this.Path = path;
        }

        protected override void DoBuild() {
            this.Add(this.Default);
            this.Add(this.Compressed);
        }

        private IMessage Default() {
            return ColumnOrganizedEquitiesByRegion.Package.Clone();
        }

        private IMessage Compressed() {
            var package = ColumnOrganizedEquitiesByRegion.Package.Clone();
            package.Compress();
            return package;
        }
    }
}