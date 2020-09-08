# Column Organized

The following sections will walk you through the various features of the table schema and how they work.

## Table

[Figure 1](#figure-table) is a simple two-dimensional array of data that you might retrieve from a relational database. It has columns and rows, and all data is denormalized. This is the most basic representation of a table, and is typically what travels through services that process tabular data.

### Figure {f#}: Table :figure=figure-table

![Table](images/ColumnOrganized/table.png)

## Groups

This same table may also be rendered by grouping columns and/or creating a parent/child relationship between columns. By grouping these columns into one column, like in [Figure 2](#figure-grouped), it reduces the visual complexity of repetitive information and makes it easier to consume for a human.

### Figure {f#}: Grouped :figure=figure-grouped

![Table](images/ColumnOrganized/table_grouped.png)

In order to make a group, the [next_sibling_id](factset.protobuf.stach.table.SeriesDefinition :ref :v1) and/or the [parent_id](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property is specified. Using these two properties, a tree of columns can be specified. Columns in the same tree are in the same group.

In order to create a group level, the [parent_id](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property is specified. A parent is at a level one higher than its child. For example, the values in the `region` column are one level higher than the values in the `continent1` column and the `continent2` column. The values in the `continent1` and `continent2` column are at the same level because they both have the same parent column.

> **Note:** Any columns can be grouped, as long as all columns in a group are either a dimension or not a dimension.

### Figure {f#}: Grouped columns with parent/child relationships :figure=figure-groupedWithRelationships

    {
        "definition": {
            "columns": [
                {
                    "id": "c_function",
                    "name": "function",
                    "description": "Function",
                    "type": "STRING",
                    "isDimension": true,
                    "nextSiblingId": "c_region"      // In the same group as c_region, c_continent1, and c_continent2
                },
                {
                    "id": "c_region",
                    "name": "region",
                    "description": "Region",
                    "type": "STRING",
                    "isDimension": true,
                    "nextSiblingId": ""              // In the same group as c_function, c_continent1, and c_continent2
                },
                {
                    "id": "c_continent1",
                    "name": "continent1",
                    "description": "Continent 1",
                    "type": "STRING",
                    "isDimension": true,
                    "parentId": "c_region"           // In the same group as c_function, c_region, and c_continent2
                },
                {
                    "id": "c_continent2",
                    "name": "continent2",
                    "description": "Continent 2",
                    "type": "STRING",
                    "isDimension": true,
                    "parentId": "c_region"           // In the same group as c_function, c_region, and c_continent1
                }
            ]
        }
    }

## Headers

Headers can be added to further describe the columns of data. Headers data is stored in a separate table that is rotated 90 degrees where the rows in the headers table are linked to the columns in the main table by using the [header_id](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property.

### Figure {f#}: Table with headers :figure=figure-tableWithHeaders

![Table](images/ColumnOrganized/table_grouped_headers.png)

### Figure {f#}: Headers table :figure=figure-headersTable

![Table](images/ColumnOrganized/table_headers.png)

### Figure {f#}: Headers mapping :figure=figure-headersMapping

![Table](images/ColumnOrganized/table_header_mapping.png)

## Dimensions

The first four columns, `function`, `region`, `continent1`, and `continent2`, play a special role. These columns are known as dimensions, specified by the [is_dimension](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property, because they describe the data.

Dimensions are not required, however. Simple datasets, like [Figure 1](#figure-table), can also be described using this schema without specifying any dimensions, making it flexible enough to accommodate simpler use cases where dimension information is not specified.

### Figure {f#}: Dimension :figure=figure-dimension

    {
        "definition": {
            "columns": [
                {
                    "id": "c_continent1",
                    "name": "continent1",
                    "description": "Continent 1",
                    "type": "STRING",
                    "isDimension": true,           // A dimenion if true, otherwise not a dimension
                    "parentId": "c_region"
                }
            ]
        }
    }

## Transposing

It is possible to transpose the dimensions in the main table with the headers. [Figure 8](#figure-transposedTable) demonstrates how the table in [Figure 4](#figure-tableWithHeaders) would be transposed. Notice that all information is still grouped in the same way. No information was lost. We do see some new column names though, namely `year`, `category`, and `portfolioType`. The `function`, `region`, `continent1`, and `continent2` dimension columns still exist, but they are now columns in the headers table instead of columns in the main table. If you were to transpose this table once more, you would get [Figure 4](#figure-tableWithHeaders) again.

> **Note:** In order to transpose a table, all non-dimension columns must have the same [](factset.protobuf.stach.table.DataType :ref :v1) in the [type](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property.

### Figure {f#}: Transposed table :figure=figure-transposedTable

![Table](images/ColumnOrganized/table_transposed.png)

### Figure {f#}: Transposed table without headers :figure=figure-transposedTableWithoutHeaders

![Table](images/ColumnOrganized/table_transposed_noheaders.png)

## Compressed Data

When transferring data over the wire, the smaller it is the better, which is why this schema also supports compressing the data. By using the [ranges](factset.protobuf.stach.table.SeriesData :ref :v1) property, each item specifies the uncompressed index (as the `key`) and the length (as the `value`) to repeat the data. 

> **Note:** The index is referring to the **uncompressed index** because it requires less memory to compress and decompress.

[Figure 10](#figure-uncompressedData) and [Figure 11](#figure-compressedData) illustrate the difference between uncompressed and compressed data.

### Figure {f#}: Uncompressed data :figure=figure-uncompressedData

    "c_continent1": {
        "stringArray": {
            "values": [
                "null",                     // All of these "null" values are unnecessarily repeated
                "null",
                "Americas",
                "Asia Pacific",
                "Europe",
                "Middle East and Africa",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null"
            ]
        }
    }

### Figure {f#}: Compressed data :figure=figure-compressedData

    "c_continent1": {
        "ranges": {
            { 0, 2 },
            { 6, 7 }
        },
        "stringArray": {
            "values": [
                "null",                     // All of these "null" values are compressed
                "Americas",
                "Asia Pacific",
                "Europe",
                "Middle East and Africa",
                "null"
            ],
        }
    }

## Format

The [](factset.protobuf.stach.table.SeriesFormat :ref :v1) message is used to facilitate rendering a human readable table. It is intended as a strong suggestion on how to render the data. By storing this information along with the data, applications can immediately render the table intelligently without having knowledge of the data.

### Figure {f#}: Formatted column :figure=figure-formattedColumn

    {
      "definition": {
        "columns": [
          {
            "id": "c_f0",
            "name": "fund0",
            "description": "Fund 0",
            "type": "DOUBLE",
            "format": {
              "format": "{0:0.00}",
              "nullFormat": "--",
              "halign": "RIGHT"
            }
          }
        ]
      }
    }

#### Data Format

The [format](factset.protobuf.stach.table.SeriesFormat :ref :v1) property is used to render a raw value into a human readable string. Refer to [Formatting Types](https://docs.microsoft.com/en-us/dotnet/standard/base-types/formatting-types) for what strings can be used.

#### Null Format

The [null_format](factset.protobuf.stach.table.SeriesFormat :ref :v1) property to is used to render a null value with a special string, like `--` or `@NA`.

#### Null Values

The protobuf schema does not allow null values in a repeated, so in order to denote a null value, a specific value is used. Most values are the max value for that [](factset.protobuf.stach.table.DataType :ref :v1) unless there is a more appropriate value, like `"NaN"` for doubles and floats.

| Type | Null Value |
|:-----|:-----------|
| double    | "NaN" |
| Duration  | "3652500.00:00:00.9999999" |
| float     | "NaN" |
| int32     | 2147483647 |
| int64     | 9223372036854775807 |
| string    | "null" |
| Timestamp | "12/31/9999 11:59:59 PM" |


#### Alignment

Use the [halign](factset.protobuf.stach.table.DataType :ref :v1) and [valign](factset.protobuf.stach.table.DataType :ref :v1) properties to specify how the data in a series should be aligned within the table cell.

## Metadata

In order for tabular data to mean something, often metadata needs to be attributed to the entire table, or to a particular column, row, or cell. This is useful in providing functionality beyond the raw data. For instance, a URL might be attributed to one of the numbers that links to research notes about that number, or settings might be attributed to one of the columns that documents what engine calculated that data and how that column was calculated.

You can also reference data from another table by using the [refValue](factset.protobuf.stach.table.MetadataItem :ref :v1) property, including a whole table, or a specific row or column.

In order to add metadata, you have to
 
1. Add a [](factset.protobuf.stach.table.MetadataItem :ref :v1) to the [items](factset.protobuf.stach.table.MetadataCollection :ref :v1) property
2. Create a reference to that [](factset.protobuf.stach.table.MetadataItem :ref :v1) in the [locations](factset.protobuf.stach.table.MetadataCollection :ref :v1) property

## Table Metadata

Metadata can be attributed to the entire table by referencing a [](factset.protobuf.stach.table.MetadataItem :ref :v1) in the [table](factset.protobuf.stach.table.MetadataLocations :ref :v1) property.

### Figure {f#}: Table level metadata :figure=figure-tableLevelMetadata

    {
        "data": {
            "metadata": {
                "items": {
                    "m_h": {                   // The id of the metadata item
                        "name": "header",
                        "stringValue": "Risk Analysis"
                    }
                },
                "locations": {
                    "table": [                 // The location is the entire table 
                        "m_h"                  // The id of the metadata item
                    ]
                }
            }
        }
    }

## Column and Row Metadata 

Metadata can be attributed to an entire row by referencing a [](factset.protobuf.stach.table.MetadataItem :ref :v1) in the [rows](factset.protobuf.stach.table.MetadataLocations :ref :v1) property.

Metadata can be attributed to an entire column by referencing a [](factset.protobuf.stach.table.MetadataItem :ref :v1) in the [columns](factset.protobuf.stach.table.MetadataLocations :ref :v1) property.

### Figure {f#}: Row level metadata :figure=figure-rowLevelMetadata

    {
        "data": {
            "metadata": {
                "items": {
                    "m_foobar": {              // The id of the metadata item
                        "name": "foobar",
                        "stringValue": "Foo Bar"
                    }
                },
                "locations": {
                    "rows":  {                 // The location is an entire row,
                                               // (or "columns" to target an entire column)
                        "r_0": {               // The id of the row
                                               // (or column)
                            "ids": [
                                "m_foobar"     // The id of the metadata item
                            ]
                        }
                    }
                }
            }
        }
    }

## Cells Metadata 

Metadata can be attributed to the cells in an entire row by referencing a [](factset.protobuf.stach.table.MetadataItem :ref :v1) that references another table's rows or columns in the [rows](factset.protobuf.stach.table.MetadataLocations :ref :v1) property.

Metadata can be attributed to the cells in an entire column by referencing a [](factset.protobuf.stach.table.MetadataItem :ref :v1) that references another table's rows or columns in the [columns](factset.protobuf.stach.table.MetadataLocations :ref :v1) property.

### Figure {f#}: Cell level metadata :figure=figure-cellLevelMetadata

    {
        "data": {
            "metadata": {
                "items": {
                    "m_regionUrl": {
                        "name": "regionUrl",
                        "refValue": {
                            "tableId": "main",
                            "columnId": "c_regionUrl" // If the reference is a column 
                                                      // or row, it indicates cell level metadata
                        }
                    }
                },
                "locations": {
                    "columns":  {
                        "c_region": {
                            "ids": [
                                "m_regionUrl"
                            ]
                        }
                    }
                }
            }
        }
    }

## Reference

The [](factset.protobuf.stach.table.Reference :ref :v1) message allows us to specify a relationship between metadata and data that exists elsewhere, either in this table or another table.

The [table_id](factset.protobuf.stach.table.Reference :ref :v1) should always be specified.

If [column_id](factset.protobuf.stach.table.Reference :ref :v1) is specified, then the data exists in a column, which means that it must match the same number of rows as there are in this table.

If [row_id](factset.protobuf.stach.table.Reference :ref :v1) is specified, then the data exists in a row, which means that it must match the same number of columns as there are in this table.

### Figure {f#}: Reference :figure=figure-reference

    {
        "data": {
            "metadata": {
                "items": {
                    "m_regionUrl": {
                        "name": "regionUrl",
                        "refValue": {                 // This object is a Reference
                            "tableId": "main",        // References a table's id
                            "columnId": "c_regionUrl" // References a column's id
                        }
                    }
                }
            ]
        }
    }

## Hidden

Since a column of data can represent metadata, it it likely the case that that data should not be rendered directly, but rather in an interactive way, like a tooltip, or a hyperlink. In this scenario, you can make a column hidden by setting the [is_hidden](factset.protobuf.stach.table.SeriesDefinition :ref :v1) property to true.

> **Note:** Do not use this property to indicate that a row is expanded or collapsed. Consider adding a metadata column to indicate that.

### Figure {f#}: Hidden column :figure=figure-hiddenColumn

    {
        "definition": {
            "columns": [
                {
                    "id": "c_regionUrl",
                    "name": "regionUrl",
                    "description": "Region Url",
                    "type": "STRING",
                    "isDimension": true,
                    "isHidden": true               // Column will not be rendered because it is hidden
                }
            ]
        }
    }