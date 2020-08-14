# Row Organized

The purpose of the row organized format is to make it as simple as possible to consume tabular data. An SDK is not expected to be used to either deserialize or utilize the schema.

## Usage

An API can be designed to return any STACH message. For instance, if your API handles large tables, sorting, and paging of data, it will probably benefit from creating multiple endpoints that return pieces of tables, such as [](factset.protobuf.stach.RowOrganizedPackage.TableDefinition :ref) and [](factset.protobuf.stach.RowOrganizedPackage.TableData :ref). Although [](factset.protobuf.stach.RowOrganizedPackage :ref) is the top-level message, your API should be designed to be efficient and appropriate for its use cases.

Before moving on to digest the documentation, you should familiarize yourself with an example.

### Figure {f#}: Equities by Region :figure=figure-table

[filename](examples/RowOrganized/EquitiesByRegion/DefaultMaps.json ':include')

### Figure {f#}: Equities by Region Rendered :figure=figure-tableRendered

![Table](images/ColumnOrganized/table_grouped_headers.png)
<!--
<vuep template="#vue-table" class="vuep-inline"></vuep>
<script v-pre type="text/x-template" id="vue-table">
<template>
  <stach-table url="examples/RowOrganized/EquitiesByRegion/GroupsArrays.json" style="min-width: 700px; max-width: 900px;"/>
</template>
</script>
-->

## Package

The [](factset.protobuf.stach.RowOrganizedPackage :ref) is a top level message that allows for multiple [row organized tables](#tables) to be transferred in one response.

### Figure {f#}: Row Organized Package :figure=figure-package

[filename](figures/RowOrganized/Package.json ':include')

### Version

The version is used to validate which version of the STACH schema is expected. It is of the format "{major}.{minor}".

This property is most useful when data is stored persistently. Upon reading the data, the version can be validated against the SDK used to ensure compatibility. For this reason, when persisting STACH data, it is recommended to store a [](factset.protobuf.stach.RowOrganizedPackage :ref).

## Tables

A table is data that is organized in a tabular pattern of rows and cells. The problem we are solving here is how to describe the complexity of rendered tables, which may include headers with multiple rows, metdata to facilitate creating links, tooltips, or other useful interactive features, as well as formatting to render the table so that it makes sense to a human, but also in a way that retains the fidelity of the data itself. For instance, converting a number to a formatted string would potentially lose the precision of the number as well as make it difficult for alternative uses of the data, like sorting and charting. 

A table is made up of three pieces.

1. A [](factset.protobuf.stach.RowOrganizedPackage.TableDefinition :ref) for the columns that represent the primary table
1. A [](factset.protobuf.stach.RowOrganizedPackage.TableDefinition :ref) for the columns that represent the headers table
1. A [](factset.protobuf.stach.RowOrganizedPackage.TableData :ref) that represents data for the entire table including both header and body rows

### Definition

The [](factset.protobuf.stach.RowOrganizedPackage.TableDefinition :ref) contains an array of [](factset.protobuf.stach.table.ColumnDefinition :ref) that represent columns. This is the same way columns are defined in the [column organized](ColumnOrganized) format. To understand why there is a primary table and headers table, more detail can be found in the [column organized headers section](ColumnOrganized#headers).

The row organized format abstracts away the concept of a primary table and a headers table away as much as possible, however, in order to apply common attributes while rendering the table, like group level, format, and alignment, the columns definitions remain separate from the data. This reduces the overall size of the data by not repeating the same information for every cell in a column.

### Data

The data for a table is made up of an array of [](factset.protobuf.stach.RowOrganizedPackage.Row :ref) messages, which includes both header and body rows. This design makes it simple to consume the data in a simple `for` loop.

### Rows

The [id](factset.protobuf.stach.RowOrganizedPackage.Row :ref) property is used to uniquely refer to a row. It is helpful when a row needs to be referenced.

While iterating over the cells in rows, the corresponding [](factset.protobuf.stach.table.ColumnDefinition :ref) can be referred to for additional properties to further facilitate rendering the cells.

For information on how to retrieve the corresponding [](factset.protobuf.stach.table.ColumnDefinition :ref), refer to the [cell details section](#cell-details).

For information on how to utilize the [](factset.protobuf.stach.table.ColumnDefinition :ref), refer to the [format section](ColumnOrganized#data-format).

#### Figure {f#}: Simple For Loop :figure=figure-single-for-loop

[filename](/scripts/vue/components/stach-table.js ':include :fragment=demo :type=code html/vue')

#### Cell Values: Maps vs Arrays

Every row contains either a map of cell values or an array of cell values. The choice is up to the producer based on their API's design.

##### Maps

When iterating over the [values](factset.protobuf.stach.RowOrganizedPackage.Row :ref) you will encounter a map of cell values per row. When iterating over maps, the key corresponds to the column's id. 

!> Including the column definitions is optional.

###### Figure {f#}: Package with maps of cell values :figure=minimal-maps

[filename](figures/RowOrganized/MinimalMaps.json ':include')

As mentioned previously, an API can return any STACH message as long as the endpoint's response is discrete. The following is an example of a response of the [](factset.protobuf.stach.RowOrganizedPackage.TableData :ref) message.

###### Figure {f#}: Table with maps of cell values :figure=just-maps

[filename](figures/RowOrganized/JustMaps.json ':include')

##### Arrays

When iterating over the [cells](factset.protobuf.stach.RowOrganizedPackage.Row :ref) you will encounter an array of cell values per row. When iterating over arrays, the index correlates to the index of the [columns](factset.protobuf.stach.RowOrganizedPackage.TableDefinition :ref) array of [](factset.protobuf.stach.table.ColumnDefinition :ref) that define the primary table's columns. 

!> Including the column definitions is required.

###### Figure {f#}: Package with arrays of cell values :figure=minimal-arrays

[filename](figures/RowOrganized/MinimalArrays.json ':include')

#### Cell Details

If additional details are included, they are stored in either the [cell_details](factset.protobuf.stach.RowOrganizedPackage.Row :ref) or [header_cell_details](factset.protobuf.stach.RowOrganizedPackage.Row :ref) depending on the [row_type](factset.protobuf.stach.RowOrganizedPackage.Row :ref). These details are used to facilitate rendering the table. The key correlates to the index (as a string) of the [cells](factset.protobuf.stach.RowOrganizedPackage.Row :ref) array or the key of [values](factset.protobuf.stach.RowOrganizedPackage.Row :ref) map depending on which one is utilized to represent cell values.

##### Header Cell Details

The [colspan](factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetails :ref) and [rowspan](factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetails :ref) properties work the same way as they do in HTML except that the undefined value and the value of zero are to be treated as the value of 1. 

> Protobuf does not serialize the value zero because it is the default value for integers, therefore, we take advantage of that specific detail to reduce the serialization size by setting the value to 0 instead of 1.

The [source](factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetails :ref) and [column_index](factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetails :ref) are used to index into the column definitions. Since header cells are derived from either the primary table or the optional headers table, the [source](factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetails :ref) indicates whether to index into the [headers_definition.columns](factset.protobuf.stach.RowOrganizedPackage.Table :ref) array or [definition.columns](factset.protobuf.stach.RowOrganizedPackage.Table :ref) array.

##### Body Cell Details

The [group_level](factset.protobuf.stach.RowOrganizedPackage.CellDetails :ref) property is used to indicate the [group level](ColumnOrganized#group-levels) in a [collapsed column](ColumnOrganized#collapsed-column-tree). It can be used to indent the value.

The [cell_definition](factset.protobuf.stach.RowOrganizedPackage.CellDetails :ref) property is used to override the [](factset.protobuf.stach.table.ColumnDefinition :ref) which allows for columns to have mixed data types and formats.

There is no `source` and `column_index` property for body cell details because the cell details always correlate to the [definition.columns](factset.protobuf.stach.RowOrganizedPackage.Table :ref) array.

## Metadata

Metadata can be applied to a row organized [](factset.protobuf.stach.RowOrganizedPackage.Table :ref) similarly as a column organized [](factset.protobuf.stach.table.Table :ref). The metadata locations include the table level, column level, row level, and cell level. You can refer to the [column organized explanation of metadata](ColumnOrganized#metadata) for more information. When applying metadata to a row organized [](factset.protobuf.stach.RowOrganizedPackage.Table :ref), the only difference is where the metadata is expressed in the schema.

### Metadata Location

The following figures start at the [](factset.protobuf.stach.RowOrganizedPackage.Table :ref) message for brevity.

#### Figure {f#}: Table metadata location :figure=table-metadata-location

[filename](figures/RowOrganized/TableMetadataLocation.json ':include')

#### Figure {f#}: Column metadata location :figure=column-metadata-location

> The [column_metadata](factset.protobuf.stach.RowOrganizedPackage.TableData :ref) key refers to the column id

[filename](figures/RowOrganized/ColumnMetadataLocation.json ':include')

#### Figure {f#}: Row metadata location :figure=row-metadata-location

[filename](figures/RowOrganized/RowMetadataLocation.json ':include')

#### Figure {f#}: Cell metadata location :figure=cell-metadata-location

[filename](figures/RowOrganized/CellMetadataLocation.json ':include')

### Metadata Item

Refer to the column organized [metadata item section](ColumnOrganized#metadata-item) for more information. Metadata items are exactly the same between row organized and column organized formats.