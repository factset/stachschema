using System.Collections.Generic;

namespace FactSet.Protobuf.Stach.Table {
    public partial class TableData {
        internal void Normalize(KeyValuePair<string, Table> kvp) {
            if (this.Metadata == null) {
                this.Metadata = new MetadataCollection();
            }
            foreach (var seriesDefinition in kvp.Value.Definition.Columns) {
                if (!this.Columns.ContainsKey(seriesDefinition.Id)) {
                    var newSeriesData = new SeriesData();
                    this.Columns.Add(seriesDefinition.Id, newSeriesData);
                }
                var seriesData = this.Columns[seriesDefinition.Id];
                seriesData.Normalize(seriesDefinition);
            }
            this.Metadata.Normalize(kvp);
        }
    }
}
