using FactSet.Protobuf.Stach.V2.Table;

namespace FactSet.Stach.Generator.ColumnOrganized.Tables {
    internal abstract class TableBuilderBase : ITableBuilder {
        public Table Build() {
            return this.DoBuild();
        }

        protected abstract Table DoBuild();

        public override string ToString() {
            return this.GetType().Name.Replace("Builder", "");
        }
    }
}
