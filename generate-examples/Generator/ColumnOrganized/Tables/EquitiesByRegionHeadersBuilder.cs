using FactSet.Protobuf.Stach.V2.Table;
using FactSet.Stach.Generator.DataType;
using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.ColumnOrganized.Tables {
    internal class EquitiesByRegionHeadersBuilder : TableBuilderBase {
        public static dynamic Ids = new {
            columns = new {
                year = "c_year",
                category = "c_category",
                portType = "c_portType"
            },
            rows = new {
                row0 = "c_f0",
                row1 = "c_b0",
                row2 = "c_f1",
                row3 = "c_b1",
                row4 = "c_f2",
                row5 = "c_b2"
            }
        };

        protected override Table DoBuild() {
            var colNames = new {
                year = "year",
                category = "category",
                portType = "portType"
            };
            return new Table {
                Definition = new TableDefinition {
                    Columns = {
                        new ColumnDefinition {
                            Id = Ids.columns.year,
                            Name = colNames.year,
                            Description = "Year",
                            Type = Int32.Instance.Name,
                            IsDimension = true
                        },
                        new ColumnDefinition {
                            Id = Ids.columns.category,
                            Name = colNames.category,
                            Description = "Category",
                            Type = String.Instance.Name,
                            IsDimension = true,
                            ParentId = Ids.columns.year
                        },
                        new ColumnDefinition {
                            Id = Ids.columns.portType,
                            Name = colNames.portType,
                            Description = "Portfolio Type",
                            Type = String.Instance.Name,
                            IsDimension = true,
                            ParentId = Ids.columns.category
                        }
                    }
                },
                Data = new TableData {
                    Rows = {
                        new RowDefinition {
                            Id = Ids.rows.row0
                        },
                        new RowDefinition {
                            Id = Ids.rows.row1
                        },
                        new RowDefinition {
                            Id = Ids.rows.row2
                        },
                        new RowDefinition {
                            Id = Ids.rows.row3
                        },
                        new RowDefinition {
                            Id = Ids.rows.row4
                        },
                        new RowDefinition {
                            Id = Ids.rows.row5
                        },
                    },
                    Columns = {
                        {
                            Ids.columns.year,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Int32.Instance.Create(2017),
                                        Int32.Instance.Create(2017),
                                        Int32.Instance.Create(2017),
                                        Int32.Instance.Create(2017),
                                        Int32.Instance.Create(2017),
                                        Int32.Instance.Create(2017)
                                    }
                                }
                            }
                        }, {
                            Ids.columns.category,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create("Exposure"),
                                        String.Instance.Create("Exposure"),
                                        String.Instance.Create("Total Risk"),
                                        String.Instance.Create("Total Risk"),
                                        String.Instance.Create("Contribution to Risk"),
                                        String.Instance.Create("Contribution to Risk")
                                    }
                                }
                            }
                        }, {
                            Ids.columns.portType,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create("Fund"),
                                        String.Instance.Create("Bench"),
                                        String.Instance.Create("Fund"),
                                        String.Instance.Create("Bench"),
                                        String.Instance.Create("Fund"),
                                        String.Instance.Create("Bench")
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
    }
}
