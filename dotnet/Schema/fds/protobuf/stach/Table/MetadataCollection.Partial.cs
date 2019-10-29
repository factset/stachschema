using System.Collections.Generic;

namespace FactSet.Protobuf.Stach.Table {
    public partial class MetadataCollection {
        internal void Normalize(KeyValuePair<string, Table> kvp) {
            if (this.Locations == null) {
                this.Locations = new MetadataLocations();
            }
            foreach (var item in this.Items) {
                item.Value.Normalize(kvp);
            }
        }
    }
}
