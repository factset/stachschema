using FactSet.Protobuf.Stach.Table;
using FactSet.Stach.Generator.DataType;
using FactSet.Stach.Generator.Utility;
using Google.Protobuf.WellKnownTypes;

namespace FactSet.Stach.Generator.ColumnOrganized.Tables {
    internal class EquitiesByRegionBuilder : TableBuilderBase {
        protected override Table DoBuild() {
            var colNames = new {
                function = "function",
                region = "region",
                regionUrl = "regionUrl",
                continent1 = "continent1",
                continent2 = "continent2",
                fund0 = "fund0",
                fund0Url = "fund0Url",
                bench0 = "bench0",
                contAbbr = "contAbbr",
                fund1 = "fund1",
                bench1 = "bench1",
                fund2 = "fund2",
                bench2 = "bench2",
            };
            var ids = new {
                columns = new {
                    function = SequentialGuid.NextGuid().ToString(),
                    region = SequentialGuid.NextGuid().ToString(),
                    regionUrl = SequentialGuid.NextGuid().ToString(),
                    continent1 = SequentialGuid.NextGuid().ToString(),
                    continent2 = SequentialGuid.NextGuid().ToString(),
                    fund0 = SequentialGuid.NextGuid().ToString(),
                    fund0Url = SequentialGuid.NextGuid().ToString(),
                    bench0 = SequentialGuid.NextGuid().ToString(),
                    contAbbr = SequentialGuid.NextGuid().ToString(),
                    fund1 = SequentialGuid.NextGuid().ToString(),
                    bench1 = SequentialGuid.NextGuid().ToString(),
                    fund2 = SequentialGuid.NextGuid().ToString(),
                    bench2 = SequentialGuid.NextGuid().ToString(),
                },
                rows = new {
                    row0 = SequentialGuid.NextGuid().ToString(),
                    row1 = SequentialGuid.NextGuid().ToString(),
                    row2 = SequentialGuid.NextGuid().ToString(),
                    row3 = SequentialGuid.NextGuid().ToString(),
                    row4 = SequentialGuid.NextGuid().ToString(),
                    row5 = SequentialGuid.NextGuid().ToString(),
                    row6 = SequentialGuid.NextGuid().ToString(),
                    row7 = SequentialGuid.NextGuid().ToString(),
                    row8 = SequentialGuid.NextGuid().ToString(),
                    row9 = SequentialGuid.NextGuid().ToString(),
                    row10 = SequentialGuid.NextGuid().ToString(),
                    row11 = SequentialGuid.NextGuid().ToString(),
                    row12 = SequentialGuid.NextGuid().ToString(),
                    row13 = SequentialGuid.NextGuid().ToString(),
                    row14 = SequentialGuid.NextGuid().ToString()
                },
                metadata = new {
                    header = "header",
                    riskModel = "riskModel",
                    regionUrl = "regionUrl",
                    fund0Url = "fund0Url"
                }
            };

            var t = new Table {
                Definition = new TableDefinition {
                    Columns = {
                            new ColumnDefinition {
                                Id = ids.columns.function,
                                Name = colNames.function,
                                Description = "Function",
                                Type = String.Instance.Name,
                                IsDimension = true,
                                NextSiblingId = ids.columns.region
                            },
                            new ColumnDefinition {
                                Id = ids.columns.region,
                                Name = colNames.region,
                                Description = "Region",
                                Type = String.Instance.Name,
                                IsDimension = true
                            },
                            new ColumnDefinition {
                                Id = ids.columns.continent1,
                                Name = colNames.continent1,
                                Description = "Continent 1",
                                Type = String.Instance.Name,
                                IsDimension = true,
                                ParentId = ids.columns.region
                            },
                            new ColumnDefinition {
                                Id = ids.columns.continent2,
                                Name = colNames.continent2,
                                Description = "Continent 2",
                                Type = String.Instance.Name,
                                IsDimension = true,
                                ParentId = ids.columns.region
                            },
                            new ColumnDefinition {
                                Id = ids.columns.regionUrl,
                                Name = colNames.regionUrl,
                                Description = "Region Url",
                                Type = String.Instance.Name,
                                IsDimension = true,
                                IsHidden = true
                            },
                            new ColumnDefinition {
                                Id = ids.columns.fund0,
                                Name = colNames.fund0,
                                Description = "Fund 0",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row0,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            },
                            new ColumnDefinition {
                                Id = ids.columns.bench0,
                                Name = colNames.bench0,
                                Description = "Bench 0",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row1,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            },
                            new ColumnDefinition {
                                Id = ids.columns.contAbbr,
                                Name = colNames.contAbbr,
                                Description = "Abbr",
                                Type = String.Instance.Name,
                                IsDimension = true
                            },
                            new ColumnDefinition {
                                Id = ids.columns.fund1,
                                Name = colNames.fund1,
                                Description = "Fund 1",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row2,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            },
                            new ColumnDefinition {
                                Id = ids.columns.bench1,
                                Name = colNames.bench1,
                                Description = "Bench 1",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row3,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            },
                            new ColumnDefinition {
                                Id = ids.columns.fund2,
                                Name = colNames.fund2,
                                Description = "Fund 2",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row4,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            },
                            new ColumnDefinition {
                                Id = ids.columns.fund0Url,
                                Name = colNames.fund0Url,
                                Description = "Fund 0 Url",
                                Type = String.Instance.Name,
                                IsDimension = true,
                                IsHidden = true
                            },
                            new ColumnDefinition {
                                Id = ids.columns.bench2,
                                Name = colNames.bench2,
                                Description = "Bench 2",
                                Type = Real.Instance.Name,
                                HeaderId = EquitiesByRegionHeadersBuilder.Ids.rows.row5,
                                Format = new DataFormat {
                                    Format = "{0:0.00}",
                                    Halign = HorizontalAlignment.Right
                                }
                            }
                        }
                },
                Data = new TableData {
                    Rows = {
                        new RowDefinition {
                            Id = ids.rows.row0
                        },
                        new RowDefinition {
                            Id = ids.rows.row1
                        },
                        new RowDefinition {
                            Id = ids.rows.row2
                        },
                        new RowDefinition {
                            Id = ids.rows.row3
                        },
                        new RowDefinition {
                            Id = ids.rows.row4
                        },
                        new RowDefinition {
                            Id = ids.rows.row5
                        },
                        new RowDefinition {
                            Id = ids.rows.row6
                        },
                        new RowDefinition {
                            Id = ids.rows.row7
                        },
                        new RowDefinition {
                            Id = ids.rows.row8
                        },
                        new RowDefinition {
                            Id = ids.rows.row9
                        },
                        new RowDefinition {
                            Id = ids.rows.row10
                        },
                        new RowDefinition {
                            Id = ids.rows.row11
                        },
                        new RowDefinition {
                            Id = ids.rows.row12
                        },
                        new RowDefinition {
                            Id = ids.rows.row13
                        },
                        new RowDefinition {
                            Id = ids.rows.row14
                        }
                    },
                    Columns = {
                        {
                            ids.columns.function,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create("Max"),
                                        String.Instance.Create("Total"),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null)
                                    }
                                }
                            }
                        },{
                            ids.columns.region,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("Developed Markets"),
                                        String.Instance.Create("Developed Markets"),
                                        String.Instance.Create("Developed Markets"),
                                        String.Instance.Create("Developed Markets"),
                                        String.Instance.Create("Developed Markets"),
                                        String.Instance.Create("Emerging Markets"),
                                        String.Instance.Create("Emerging Markets"),
                                        String.Instance.Create("Emerging Markets"),
                                        String.Instance.Create("Emerging Markets"),
                                        String.Instance.Create("Emerging Markets"),
                                        String.Instance.Create("Frontier Markets"),
                                        String.Instance.Create("Other"),
                                        String.Instance.Create("[Cash]")
                                    }
                                }
                            }
                        }, {
                            ids.columns.continent1,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("Americas"),
                                        String.Instance.Create("Asia Pacific"),
                                        String.Instance.Create("Europe"),
                                        String.Instance.Create("Middle East and Africa"),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null)
                                    }
                                }
                            }
                        }, {
                            ids.columns.continent2,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("Americas"),
                                        String.Instance.Create("Asia Pacific"),
                                        String.Instance.Create("Europe"),
                                        String.Instance.Create("Middle East and Africa"),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null)
                                    }
                                }
                            }
                        }, {
                            ids.columns.regionUrl,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("https://www.google.com/search?q=developed+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=developed+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=developed+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=developed+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=developed+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=emerging+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=emerging+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=emerging+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=emerging+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=emerging+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=frontier+markets"),
                                        String.Instance.Create("https://www.google.com/search?q=other"),
                                        String.Instance.Create("https://www.google.com/search?q=cash")
                                    }
                                }
                            }
                        },{
                            ids.columns.contAbbr,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("AM"),
                                        String.Instance.Create("APac"),
                                        String.Instance.Create("EU"),
                                        String.Instance.Create("MEA"),
                                        String.Instance.Create(null),
                                        String.Instance.Create("AM"),
                                        String.Instance.Create("APac"),
                                        String.Instance.Create("EU"),
                                        String.Instance.Create("MEA"),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create(null)
                                    }
                                }
                            }
                        }, {
                            ids.columns.fund0Url,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        String.Instance.Create(null),
                                        String.Instance.Create(null),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x"),
                                        String.Instance.Create("https://www.google.com/search?q=x")
                                    }
                                }
                            }
                        },{
                            ids.columns.fund0,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(88.3),
                                        Real.Instance.Create(100),
                                        Real.Instance.Create(88.3),
                                        Real.Instance.Create(46.03),
                                        Real.Instance.Create(9.09),
                                        Real.Instance.Create(33.15),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(8.71),
                                        Real.Instance.Create(0.3),
                                        Real.Instance.Create(8.41),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(0.36),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(0.15)
                                    }
                                }
                            }
                        }, {
                            ids.columns.bench0,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(89.62),
                                        Real.Instance.Create(100),
                                        Real.Instance.Create(89.62),
                                        Real.Instance.Create(54.98),
                                        Real.Instance.Create(12.48),
                                        Real.Instance.Create(21.95),
                                        Real.Instance.Create(0.21),
                                        Real.Instance.Create(7.76),
                                        Real.Instance.Create(1.12),
                                        Real.Instance.Create(5.41),
                                        Real.Instance.Create(0.33),
                                        Real.Instance.Create(0.89),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(0.53),
                                        Real.Instance.Create(null)
                                    }
                                }
                            }
                        }, {
                            ids.columns.fund1,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(17.17),
                                        Real.Instance.Create(8.6),
                                        Real.Instance.Create(8.51),
                                        Real.Instance.Create(10.21),
                                        Real.Instance.Create(11.94),
                                        Real.Instance.Create(8.71),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(14.12),
                                        Real.Instance.Create(22.7),
                                        Real.Instance.Create(14.22),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(17.17),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(8.45)
                                    }
                                }
                            }
                        }, {
                            ids.columns.bench1,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(15.67),
                                        Real.Instance.Create(8.38),
                                        Real.Instance.Create(8.39),
                                        Real.Instance.Create(9.63),
                                        Real.Instance.Create(10.06),
                                        Real.Instance.Create(8.28),
                                        Real.Instance.Create(13.58),
                                        Real.Instance.Create(10.65),
                                        Real.Instance.Create(15.44),
                                        Real.Instance.Create(11.02),
                                        Real.Instance.Create(12.78),
                                        Real.Instance.Create(14.92),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(15.67),
                                        Real.Instance.Create(null)
                                    }
                                }
                            }
                        }, {
                            ids.columns.fund2,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(86.07),
                                        Real.Instance.Create(100),
                                        Real.Instance.Create(86.07),
                                        Real.Instance.Create(50.74),
                                        Real.Instance.Create(7.37),
                                        Real.Instance.Create(27.96),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(10.48),
                                        Real.Instance.Create(0.36),
                                        Real.Instance.Create(10.12),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(0.19),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(-0.06)
                                    }
                                }
                            }
                        }, {
                            ids.columns.bench2,
                            new ColumnData {
                                Values = new ListValue {
                                    Values = {
                                        Real.Instance.Create(89.18),
                                        Real.Instance.Create(100),
                                        Real.Instance.Create(89.18),
                                        Real.Instance.Create(61.23),
                                        Real.Instance.Create(9.77),
                                        Real.Instance.Create(17.93),
                                        Real.Instance.Create(0.24),
                                        Real.Instance.Create(8.17),
                                        Real.Instance.Create(1.41),
                                        Real.Instance.Create(5.47),
                                        Real.Instance.Create(0.25),
                                        Real.Instance.Create(1.03),
                                        Real.Instance.Create(null),
                                        Real.Instance.Create(0.59),
                                        Real.Instance.Create(null)
                                    }
                                }
                            }
                        }
                    },
                    Metadata = new MetadataCollection {
                        Locations = new MetadataLocations {
                            Table = {
                                ids.metadata.header
                            },
                            Columns = {
                                {
                                    ids.columns.fund0,
                                    new ListOfMetadata {
                                        Ids = {
                                            ids.metadata.fund0Url
                                        }
                                    }
                                }, {
                                    ids.columns.region,
                                    new ListOfMetadata {
                                        Ids = {
                                            ids.metadata.regionUrl,
                                            ids.metadata.riskModel
                                        }
                                    }
                                }
                            },
                        },
                        Items = {
                            {
                                ids.metadata.header, new MetadataItem {
                                    Value = String.Instance.Create("Risk Analysis")
                                }
                            }, {
                                ids.metadata.fund0Url, new MetadataItem {
                                    Reference = new Reference {
                                        ReferenceType = ReferenceType.Column,
                                        TableId = "main",
                                        ColumnId = ids.columns.fund0Url
                                    }
                                }
                            }, {
                                ids.metadata.regionUrl, new MetadataItem {
                                    Reference = new Reference {
                                        ReferenceType = ReferenceType.Column,
                                        TableId = "main",
                                        ColumnId = ids.columns.regionUrl
                                    }
                                }
                            }, {
                                ids.metadata.riskModel, new MetadataItem {
                                    Reference = new Reference {
                                        ReferenceType = ReferenceType.Table,
                                        TableId = "riskModel"
                                    }
                                }
                            }
                        }
                    }
                }
            };

            return t;
        }
    }
}
