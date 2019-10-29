using System.Collections.Generic;

namespace FactSet.Protobuf.Stach {
    public partial class MetadataItem {
        internal void Normalize(KeyValuePair<string, Table.Table> kvp) {
            if (this.DataCase == DataOneofCase.RefValue && string.IsNullOrWhiteSpace(this.RefValue.TableId)) {
                this.RefValue.TableId = kvp.Key;
            }
        }
    }
}
