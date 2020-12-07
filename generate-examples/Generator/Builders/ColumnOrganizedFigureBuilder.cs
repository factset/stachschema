using System;
using System.Linq;
using FactSet.Protobuf.Stach;
using FactSet.Protobuf.Stach.Table;
using FactSet.Stach.Generator.Extensions;
using FactSet.Stach.Generator.Utility;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using String = FactSet.Stach.Generator.DataType.String;

namespace FactSet.Stach.Generator.Builders {
    internal class ColumnOrganizedFigureBuilder : MessageCollectionBuilder {
        protected override void DoBuild() {
            this.Add(this.CellMetadataItemSparsePattern);
            this.Add(this.CellMetadataLocationSparsePattern);
            this.Add(this.ColumnMetadataItem);
            this.Add(this.ColumnMetadataLocation);
            this.Add(this.ColumnOrientedCellMetadataLocationDensePattern);
            this.Add(this.CompressedData);
            this.Add(this.DimensionColumn);
            this.Add(this.FormattedColumn);
            this.Add(this.GroupedColumnsWithSiblingAndParentChildRelationships);
            this.Add(this.HiddenColumn);
            this.Add(this.MixedDataTypes);
            this.Add(this.TableMetadataItem);
            this.Add(this.RowMetadataItem);
            this.Add(this.RowOrientedCellMetadataLocationDensePattern);
            this.Add(this.RowMetadataLocation);
            this.Add(this.TableMetadataLocation);
            this.Add(this.UncompressedData);
            this.Add(this.ValueMetadataItem);
        }

        private IMessage DimensionColumn() {
            return new TableDefinition {
                Columns = {
                    ColumnOrganizedEquitiesByRegion.Continent1Column
                }
            };
        }
        
        private IMessage GroupedColumnsWithSiblingAndParentChildRelationships() {
            return new TableDefinition {
                Columns = { ColumnOrganizedEquitiesByRegion.MainTable.Definition.Columns.Where(cd => cd.IsDimension) }
            };
        }
        
        private IMessage UncompressedData() {
            return ColumnOrganizedEquitiesByRegion.MainTable.Data.Columns[ColumnOrganizedEquitiesByRegion.Continent1Column.Id];
        }
        
        private IMessage CompressedData() {
            var data = ColumnOrganizedEquitiesByRegion.MainTable.Data.Columns[ColumnOrganizedEquitiesByRegion.Continent1Column.Id].Clone();
            data.Compress();
            return data;
        }
        
        private IMessage FormattedColumn() {
            return ColumnOrganizedEquitiesByRegion.Fund0Column;
        }
        
        private IMessage MixedDataTypes() {
            var columnId = 0.ToString();
            return new Table {
                Definition = new TableDefinition {
                    Columns = {
                        new ColumnDefinition {
                            Id = columnId,
                            Name = "columnWithMixedDataTypes",
                            Type = String.Instance.Name
                        }
                    }
                },
                Data = new TableData {
                    Columns = {
                        {
                            columnId,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = { 
                                        String.Instance.Create("foo"),
                                        DataType.Real.Instance.Create(1),
                                        String.Instance.Create("bar"),
                                        DataType.Real.Instance.Create(0.89)
                                    }
                                },
                                Definitions = {
                                    new CellDefinition {
                                        Type = String.Instance.Name
                                    },
                                    new CellDefinition {
                                        Type = DataType.Real.Instance.Name,
                                        Format = new DataFormat {
                                            Format = "{0:0.00}"
                                        }
                                    },
                                    new CellDefinition {
                                        Type = String.Instance.Name
                                    },
                                    new CellDefinition {
                                        Type = DataType.Real.Instance.Name,
                                        Format = new DataFormat {
                                            Format = "{0:0.00}"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
        
        private IMessage TableMetadataLocation() {
            var metadataItemId = "tableMetadataLocationItem";
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Value = Value.ForString("Table metadata location")
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Table = {
                        metadataItemId
                    }
                }
            };
        }
        
        private IMessage ColumnMetadataLocation() {
            var metadataItemId = "columnMetadataLocationItem";
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Value = Value.ForString("Column (Continent 1) metadata location")
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Columns = {
                        {
                            ColumnOrganizedEquitiesByRegion.Continent1Column.Id,
                            new ListOfMetadata {
                                Ids = {
                                    metadataItemId
                                }
                            } 
                        }
                    }
                }
            };
        }
        
        private IMessage RowMetadataLocation() {
            var metadataItemId = "rowMetadataLocationItem";
            var rowId = 0.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Value = Value.ForString("Row (Row 0) metadata location")
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Rows = {
                        {
                            rowId,
                            new ListOfMetadata {
                                Ids = {
                                    metadataItemId
                                }
                            } 
                        }
                    }
                }
            };
        }

        private IMessage CellMetadataLocationSparsePattern() {
            var metadataItemId = "cellMetadataLocationSparsePatternItem";
            var columnId = 0.ToString();
            var rowId = 1.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Value = Value.ForString("Cell (Continent 1, Row 0) metadata location")
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Cells = new MetadataLocations.Types.CellsColumnMap {
                        Columns = {
                            {
                                columnId,
                                new MetadataLocations.Types.CellsRowMap {
                                    Rows = {
                                        {
                                            rowId,
                                            new ListOfMetadata {
                                                Ids = {
                                                    metadataItemId
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

        private IMessage ColumnOrientedCellMetadataLocationDensePattern() {
            var metadataItemId = "columnOrientedCellMetadataLocationDensePatternItem";
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Cell,
                                TableId = "main",
                                ColumnId = ColumnOrganizedEquitiesByRegion.Continent1Column.Id
                            }
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Columns = {
                        {
                            ColumnOrganizedEquitiesByRegion.Continent1Column.Id,
                            new ListOfMetadata {
                                Ids = {
                                    metadataItemId
                                }
                            }
                        }
                    }
                }
            };
        }

        private IMessage RowOrientedCellMetadataLocationDensePattern() {
            var metadataItemId = "rowOrientedCellMetadataLocationDensePatternItem";
            var row0Id = 0.ToString();
            var row1Id = 1.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        metadataItemId,
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Cell,
                                TableId = "main",
                                RowId = row1Id
                            }
                        }
                    }
                },
                Locations = new MetadataLocations {
                    Rows = {
                        {
                            row0Id,
                            new ListOfMetadata {
                                Ids = {
                                    metadataItemId
                                }
                            }
                        }
                    }
                }
            };
        }

        private IMessage ValueMetadataItem() {
            return new MetadataCollection {
                Items = {
                    {
                        "valueMetadataItem",
                        new MetadataItem {
                            Value = Value.ForString("fooBar")
                        }
                    }
                },
                Locations = new MetadataLocations()
            };
        }

        private IMessage TableMetadataItem() {
            return new MetadataCollection {
                Items = {
                    {
                        "referenceMetadataItem",
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Table,
                                TableId = "metadataTable"
                            }
                        }
                    }
                },
                Locations = new MetadataLocations()
            };
        }

        private IMessage ColumnMetadataItem() {
            var columnId = 0.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        "columnMetadataItem",
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Column,
                                TableId = "metadataTable",
                                ColumnId = columnId
                            }
                        }
                    }
                },
                Locations = new MetadataLocations()
            };
        }

        private IMessage RowMetadataItem() {
            var columnId = 0.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        "rowMetadataItem",
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Row,
                                TableId = "metadataTable",
                                ColumnId = columnId
                            }
                        }
                    }
                },
                Locations = new MetadataLocations()
            };
        }

        private IMessage CellMetadataItemSparsePattern() {
            var columnId = 0.ToString();
            var rowId = 1.ToString();
            return new MetadataCollection {
                Items = {
                    {
                        "cellMetadataDateItemSparsePattern",
                        new MetadataItem {
                            Reference = new Reference {
                                ReferenceType = ReferenceType.Cell,
                                TableId = "metadataTable",
                                ColumnId = columnId,
                                RowId = rowId
                            }
                        }
                    }
                },
                Locations = new MetadataLocations()
            };
        }

        private IMessage HiddenColumn() {
            return ColumnOrganizedEquitiesByRegion.RegionUrlColumn;
        }
    }
}
