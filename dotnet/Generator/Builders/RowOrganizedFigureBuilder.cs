using System.Linq;
using FactSet.Protobuf.Stach;
using FactSet.Protobuf.Stach.Table;
using FactSet.Stach.Generator.Extensions;
using FactSet.Stach.Generator.Utility;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.Builders {
    internal class RowOrganizedFigureBuilder : MessageCollectionBuilder {
        protected override void DoBuild() {
            this.Add(this.Package);
            this.Add(this.MinimalArrays);
            this.Add(this.MinimalMaps);
            this.Add(this.JustMaps);
            this.Add(this.TableMetadataLocation);
            this.Add(this.ColumnMetadataLocation);
            this.Add(this.RowMetadataLocation);
            this.Add(this.CellMetadataLocation);
        }

        private IMessage Package() {
            var tableId = "exampleTable";
            var p = new RowOrganizedPackage {
                Tables = {
                    {tableId, new RowOrganizedPackage.Types.Table()}
                }
            };

            return p.SetVersion();
        }

        private IMessage MinimalArrays() {
            var p = RowOrganizedEquitiesByRegionArrays.Package.Clone();
            var t = p.Tables.First().Value;

            for (var i = t.Data.Rows.Count - 1; i >= 0; i--) {
                if (t.Data.Rows[i].RowType == RowOrganizedPackage.Types.Row.Types.RowType.Header) {
                    t.Data.Rows.RemoveAt(i);
                }
            }
            return p;
        }

        private IMessage MinimalMaps() {
            var p = RowOrganizedEquitiesByRegionMaps.Package.Clone();
            var t = p.Tables.First().Value;

            for (var i = t.Data.Rows.Count - 1; i >= 0; i--) {
                if (t.Data.Rows[i].RowType == RowOrganizedPackage.Types.Row.Types.RowType.Header) {
                    t.Data.Rows.RemoveAt(i);
                }
            }

            t.Definition = null;
            t.HeadersDefinition = null;

            return p;
        }

        private IMessage JustMaps() {
            var p = RowOrganizedEquitiesByRegionMaps.Package.Clone();
            var t = p.Tables.First().Value;

            for (var i = t.Data.Rows.Count - 1; i >= 0; i--) {
                if (t.Data.Rows[i].RowType == RowOrganizedPackage.Types.Row.Types.RowType.Header) {
                    t.Data.Rows.RemoveAt(i);
                }
            }

            return t.Data;
        }

        private IMessage TableMetadataLocation() {
            return new RowOrganizedPackage.Types.Table {
                Data = new RowOrganizedPackage.Types.TableData {
                    TableMetadata = {
                        {
                            "tableMetadataLocationItem",
                            new MetadataItem {
                                Value = Value.ForString("Table metadata location")
                            }
                        }
                    }
                }
            };
        }

        private IMessage ColumnMetadataLocation() {
            var columnId = 0.ToString();
            return new RowOrganizedPackage.Types.Table {
                Data = new RowOrganizedPackage.Types.TableData {
                    ColumnMetadata = {
                        {
                            columnId,
                            new RowOrganizedPackage.Types.MapOfMetadata {
                                Items = {
                                    {
                                        "columnMetadataLocationItem",
                                        new MetadataItem {
                                            Value = Value.ForString("Column metadata location")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }

        private IMessage RowMetadataLocation() {
            return new RowOrganizedPackage.Types.Table {
                Data = new RowOrganizedPackage.Types.TableData {
                    Rows = {
                        new RowOrganizedPackage.Types.Row {
                            RowMetadata = {
                                {
                                    "rowMetadataLocationItem",
                                    new MetadataItem {
                                        Value = Value.ForString("Row metadata location")
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }

        private IMessage CellMetadataLocation() {
            return new RowOrganizedPackage.Types.Table {
                Data = new RowOrganizedPackage.Types.TableData {
                    Rows = {
                        new RowOrganizedPackage.Types.Row {
                            CellDetails = {
                                {
                                    "0",
                                    new RowOrganizedPackage.Types.CellDetail {
                                        CellMetadata = {
                                            {
                                                "cellMetadataLocationItem",
                                                new MetadataItem {
                                                    Value = Value.ForString("Cell metadata location")
                                                }
                                            }
                                        }
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
