using FactSet.Protobuf.Stach.V2.Table;

namespace FactSet.Stach.Generator.ColumnOrganized.Tables {
    internal interface ITableBuilder {
        Table Build();
    }
}
