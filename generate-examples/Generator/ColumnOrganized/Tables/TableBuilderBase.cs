namespace FactSet.Stach.Generator.ColumnOrganized.Tables {
    internal abstract class TableBuilderBase : ITableBuilder {
        public Protobuf.Stach.Table.Table Build() {
            return this.DoBuild();
        }

        protected abstract Protobuf.Stach.Table.Table DoBuild();

        public override string ToString() {
            return this.GetType().Name.Replace("Builder", "");
        }
    }
}
