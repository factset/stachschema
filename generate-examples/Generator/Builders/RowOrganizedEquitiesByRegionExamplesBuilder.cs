using FactSet.Stach.Generator.RowOrganized;
using Google.Protobuf;

namespace FactSet.Stach.Generator.Builders {
    internal class RowOrganizedEquitiesByRegionExamplesBuilder : MessageCollectionBuilder, IExamples {
        public string Path { get; }

        public RowOrganizedEquitiesByRegionExamplesBuilder(string path) {
            this.Path = path;
        }

        protected override void DoBuild() {
            this.Add(this.DefaultArrays);
            this.Add(this.GroupsArrays);
            this.Add(this.DefaultMaps);
            this.Add(this.GroupsMaps);
        }

        private IMessage DefaultArrays() {
            return new RowOrganizedEquitiesByRegionPackageBuilder("DefaultArrays.json").Build();
        }

        private IMessage GroupsArrays() {
            return new RowOrganizedEquitiesByRegionPackageBuilder("GroupsArrays.json").Build();
        }

        private IMessage DefaultMaps() {
            return new RowOrganizedEquitiesByRegionPackageBuilder("DefaultMaps.json").Build();
        }

        private IMessage GroupsMaps() {
            return new RowOrganizedEquitiesByRegionPackageBuilder("GroupsMaps.json").Build();
        }
    }
}
