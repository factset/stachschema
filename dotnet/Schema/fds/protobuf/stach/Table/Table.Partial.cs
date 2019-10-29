using System.Collections.Generic;

namespace FactSet.Protobuf.Stach.Table {
    public partial class Table {
        internal void Normalize(KeyValuePair<string, Table> kvp) {
            if (this.Definition == null) {
                this.Definition = new TableDefinition();
            }
            if (this.Data == null) {
                this.Data = new TableData();
            }
            this.Data.Normalize(kvp);
        }
    }
}
