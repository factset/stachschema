# Reference



<a name="fds/protobuf/stach/v2/Package.proto"></a>

## fds/protobuf/stach/v2/Package.proto



<a name="factset.protobuf.stach.v2.Package"></a>

### Package :ref=factset.protobuf.stach.v2.Package
A column organized package of tables


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | The version of the STACH schema. Formatted {major}.{minor} |
| primary_table_ids | [string](#string) | repeated | The array of primary table ids |
| tables | [Package.TablesEntry](#factset.protobuf.stach.v2.Package.TablesEntry) | repeated | The map (key: table id) of all tables |






<a name="factset.protobuf.stach.v2.Package.TablesEntry"></a>

### Package.TablesEntry :ref=factset.protobuf.stach.v2.Package.TablesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.Table](#factset.protobuf.stach.v2.table.Table) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/RowOrganized.proto"></a>

## fds/protobuf/stach/v2/RowOrganized.proto



<a name="factset.protobuf.stach.v2.RowOrganizedPackage"></a>

### RowOrganizedPackage :ref=factset.protobuf.stach.v2.RowOrganizedPackage
A row organized package of tables


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | The version of the STACH schema. Formatted {major}.{minor} |
| tables | [RowOrganizedPackage.TablesEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.TablesEntry) | repeated | The map (key: table id) of all tables |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail"></a>

### RowOrganizedPackage.CellDetail :ref=factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail
A body row cell detail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group_level | [int32](#int32) |  | The group level |
| cell_definition | [table.CellDefinition](#factset.protobuf.stach.v2.table.CellDefinition) |  | The definition of the cell; overrides the column definition |
| cell_metadata | [RowOrganizedPackage.CellDetail.CellMetadataEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail.CellMetadataEntry) | repeated | The map (key: metadataitem id) of metadata at the cell location |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail.CellMetadataEntry"></a>

### RowOrganizedPackage.CellDetail.CellMetadataEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail.CellMetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail"></a>

### RowOrganizedPackage.HeaderCellDetail :ref=factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail
A header row cell detail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| colspan | [int32](#int32) |  | The column span |
| rowspan | [int32](#int32) |  | The row span |
| source | [RowOrganizedPackage.HeaderCellDetail.TableSource](#factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.TableSource) |  | The table where the row is sourced from |
| column_index | [int32](#int32) |  | The column index; used to index into the `headers_definition.columns` array |
| cell_definition | [table.CellDefinition](#factset.protobuf.stach.v2.table.CellDefinition) |  | The definition of the cell; overrides the column definition |
| cell_metadata | [RowOrganizedPackage.HeaderCellDetail.CellMetadataEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.CellMetadataEntry) | repeated | The map (key: metadataitem id) of metadata at the cell location |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.CellMetadataEntry"></a>

### RowOrganizedPackage.HeaderCellDetail.CellMetadataEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.CellMetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata"></a>

### RowOrganizedPackage.MapOfMetadata :ref=factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata
A wrapper for a map of metadata items


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| items | [RowOrganizedPackage.MapOfMetadata.ItemsEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata.ItemsEntry) | repeated | The map (key: metadataitem id) metadata |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata.ItemsEntry"></a>

### RowOrganizedPackage.MapOfMetadata.ItemsEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata.ItemsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Row"></a>

### RowOrganizedPackage.Row :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Row
A row


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The row id |
| row_type | [RowOrganizedPackage.Row.RowType](#factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowType) |  | The row type |
| cells | [google.protobuf.ListValue](#google.protobuf.ListValue) |  | The list of cell values |
| values | [google.protobuf.Struct](#google.protobuf.Struct) |  | The map of cell values |
| cell_details | [RowOrganizedPackage.Row.CellDetailsEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.Row.CellDetailsEntry) | repeated | The details for a body row cell |
| header_cell_details | [RowOrganizedPackage.Row.HeaderCellDetailsEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.Row.HeaderCellDetailsEntry) | repeated | The details for a header row cell |
| row_metadata | [RowOrganizedPackage.Row.RowMetadataEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowMetadataEntry) | repeated | The map (key: metadataitem id) of metadata at the row location |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Row.CellDetailsEntry"></a>

### RowOrganizedPackage.Row.CellDetailsEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Row.CellDetailsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [RowOrganizedPackage.CellDetail](#factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Row.HeaderCellDetailsEntry"></a>

### RowOrganizedPackage.Row.HeaderCellDetailsEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Row.HeaderCellDetailsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [RowOrganizedPackage.HeaderCellDetail](#factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowMetadataEntry"></a>

### RowOrganizedPackage.Row.RowMetadataEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowMetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Table"></a>

### RowOrganizedPackage.Table :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Table
A row organized table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| definition | [RowOrganizedPackage.TableDefinition](#factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition) |  | The definition |
| headers_definition | [RowOrganizedPackage.TableDefinition](#factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition) |  | The headers definition |
| data | [RowOrganizedPackage.TableData](#factset.protobuf.stach.v2.RowOrganizedPackage.TableData) |  | The data |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.TableData"></a>

### RowOrganizedPackage.TableData :ref=factset.protobuf.stach.v2.RowOrganizedPackage.TableData
A table data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rows | [RowOrganizedPackage.Row](#factset.protobuf.stach.v2.RowOrganizedPackage.Row) | repeated | The rows |
| table_metadata | [RowOrganizedPackage.TableData.TableMetadataEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.TableData.TableMetadataEntry) | repeated | The map (key: metadataitem id) of metadata at the table location |
| column_metadata | [RowOrganizedPackage.TableData.ColumnMetadataEntry](#factset.protobuf.stach.v2.RowOrganizedPackage.TableData.ColumnMetadataEntry) | repeated | The map (key: column id) of metadata at the column location |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.TableData.ColumnMetadataEntry"></a>

### RowOrganizedPackage.TableData.ColumnMetadataEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.TableData.ColumnMetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [RowOrganizedPackage.MapOfMetadata](#factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.TableData.TableMetadataEntry"></a>

### RowOrganizedPackage.TableData.TableMetadataEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.TableData.TableMetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition"></a>

### RowOrganizedPackage.TableDefinition :ref=factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition
A table definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| columns | [table.ColumnDefinition](#factset.protobuf.stach.v2.table.ColumnDefinition) | repeated | The column definitions |






<a name="factset.protobuf.stach.v2.RowOrganizedPackage.TablesEntry"></a>

### RowOrganizedPackage.TablesEntry :ref=factset.protobuf.stach.v2.RowOrganizedPackage.TablesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [RowOrganizedPackage.Table](#factset.protobuf.stach.v2.RowOrganizedPackage.Table) |  |  |





 <!-- end messages -->


<a name="factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.TableSource"></a>

### RowOrganizedPackage.HeaderCellDetail.TableSource :ref=factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.TableSource
A table where a row is sourced from

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| NONE | 1 |  |
| PRIMARY | 2 |  |
| HEADERS | 3 |  |



<a name="factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowType"></a>

### RowOrganizedPackage.Row.RowType :ref=factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowType
A type of row

| Name | Number | Description |
| ---- | ------ | ----------- |
| Body | 0 | A body row |
| Header | 1 | A header row |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/CellDefinition.proto"></a>

## fds/protobuf/stach/v2/table/CellDefinition.proto



<a name="factset.protobuf.stach.v2.table.CellDefinition"></a>

### CellDefinition :ref=factset.protobuf.stach.v2.table.CellDefinition
A cell definition

Overrides the column and row definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  | The data type; correlates with the chosen property for `ColumnData.data`; overrides the `ColumnDefinition.type` |
| format | [DataFormat](#factset.protobuf.stach.v2.table.DataFormat) |  | The data format; overrides the `RowDefinition.format` and the `ColumnDefinition.format` |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/ColumnData.proto"></a>

## fds/protobuf/stach/v2/table/ColumnData.proto



<a name="factset.protobuf.stach.v2.table.ColumnData"></a>

### ColumnData :ref=factset.protobuf.stach.v2.table.ColumnData
An array of column data

The type chosen correlates to the data type of the `ColumnDefinition.type`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ranges | [ColumnData.RangesEntry](#factset.protobuf.stach.v2.table.ColumnData.RangesEntry) | repeated | The map (key: uncompressed index, value: length to repeat the value) used during compression |
| values | [google.protobuf.ListValue](#google.protobuf.ListValue) |  | The values |
| definitions | [CellDefinition](#factset.protobuf.stach.v2.table.CellDefinition) | repeated | The cell definitions |






<a name="factset.protobuf.stach.v2.table.ColumnData.RangesEntry"></a>

### ColumnData.RangesEntry :ref=factset.protobuf.stach.v2.table.ColumnData.RangesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int32](#int32) |  |  |
| value | [int32](#int32) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/ColumnDefinition.proto"></a>

## fds/protobuf/stach/v2/table/ColumnDefinition.proto



<a name="factset.protobuf.stach.v2.table.ColumnDefinition"></a>

### ColumnDefinition :ref=factset.protobuf.stach.v2.table.ColumnDefinition
A definition of a column


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The id; used for referring to a column internal to a package |
| name | [string](#string) |  | The name; used for referring to a column external to a package |
| description | [string](#string) |  | The description; used for rendering human readable headers |
| type | [string](#string) |  | The data type; correlates with the chosen property for `ColumnData.data` |
| is_dimension | [bool](#bool) |  | Whether this column is a dimension or not |
| is_hidden | [bool](#bool) |  | Whether this column is hidden or not |
| next_sibling_id | [string](#string) |  | The next sibling column in the collapsed column tree |
| parent_id | [string](#string) |  | The parent column in the collapsed column tree |
| header_id | [string](#string) |  | The header id |
| format | [DataFormat](#factset.protobuf.stach.v2.table.DataFormat) |  | The data format |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/DataFormat.proto"></a>

## fds/protobuf/stach/v2/table/DataFormat.proto



<a name="factset.protobuf.stach.v2.table.DataFormat"></a>

### DataFormat :ref=factset.protobuf.stach.v2.table.DataFormat
A data format


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| format | [string](#string) |  | The format |
| null_format | [string](#string) |  | The null format |
| halign | [HorizontalAlignment](#factset.protobuf.stach.v2.table.HorizontalAlignment) |  | The horizontal alignment |
| valign | [VerticalAlignment](#factset.protobuf.stach.v2.table.VerticalAlignment) |  | The vertical alignment |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/HorizontalAlignment.proto"></a>

## fds/protobuf/stach/v2/table/HorizontalAlignment.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.v2.table.HorizontalAlignment"></a>

### HorizontalAlignment :ref=factset.protobuf.stach.v2.table.HorizontalAlignment
A horizontal alignment

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_HALIGN | 0 | This value should never be used, but exists to ensure that a value is specified |
| LEFT | 1 | Value is horizontally aligned to the left of the cell |
| CENTER | 2 | Value is horizontally aligned in the center of the cell |
| RIGHT | 3 | Value is horizontally aligned to the right of the cell |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/ListOfMetadata.proto"></a>

## fds/protobuf/stach/v2/table/ListOfMetadata.proto



<a name="factset.protobuf.stach.v2.table.ListOfMetadata"></a>

### ListOfMetadata :ref=factset.protobuf.stach.v2.table.ListOfMetadata
A list of metadata ids


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated | The list of metadata ids |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/MetadataCollection.proto"></a>

## fds/protobuf/stach/v2/table/MetadataCollection.proto



<a name="factset.protobuf.stach.v2.table.MetadataCollection"></a>

### MetadataCollection :ref=factset.protobuf.stach.v2.table.MetadataCollection
A collection of metadata for a table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| items | [MetadataCollection.ItemsEntry](#factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry) | repeated | The metadata items associated with a table |
| locations | [MetadataLocations](#factset.protobuf.stach.v2.table.MetadataLocations) |  | The locations where metadata items are associated |






<a name="factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry"></a>

### MetadataCollection.ItemsEntry :ref=factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [MetadataItem](#factset.protobuf.stach.v2.table.MetadataItem) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/MetadataItem.proto"></a>

## fds/protobuf/stach/v2/table/MetadataItem.proto



<a name="factset.protobuf.stach.v2.table.MetadataItem"></a>

### MetadataItem :ref=factset.protobuf.stach.v2.table.MetadataItem
A metadata item

Represents data to describe the table or parts of the table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [google.protobuf.Value](#google.protobuf.Value) |  | The value |
| reference | [Reference](#factset.protobuf.stach.v2.table.Reference) |  | The table reference |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/MetadataLocations.proto"></a>

## fds/protobuf/stach/v2/table/MetadataLocations.proto



<a name="factset.protobuf.stach.v2.table.MetadataLocations"></a>

### MetadataLocations :ref=factset.protobuf.stach.v2.table.MetadataLocations
The metadata locations for a table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| table | [string](#string) | repeated | The array (metadata item id) of metadata items associated with the whole table |
| columns | [MetadataLocations.ColumnsEntry](#factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry) | repeated | The map (key: column id) of all metadata items associated with a column |
| rows | [MetadataLocations.RowsEntry](#factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry) | repeated | The map (key: row id) of all metadata items associated with a row |
| cells | [MetadataLocations.CellsColumnMap](#factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap) |  | The metadata items associated with specific cells |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap"></a>

### MetadataLocations.CellsColumnMap :ref=factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap
A message wrapper for a map of columns to `CellsRowMap`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| columns | [MetadataLocations.CellsColumnMap.ColumnsEntry](#factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry) | repeated | The map (key: column id) of columns to `CellsRowMap` |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry"></a>

### MetadataLocations.CellsColumnMap.ColumnsEntry :ref=factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [MetadataLocations.CellsRowMap](#factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap) |  |  |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap"></a>

### MetadataLocations.CellsRowMap :ref=factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap
A message wrapper for a map of rows to a list of metadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rows | [MetadataLocations.CellsRowMap.RowsEntry](#factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry) | repeated | The map (key: row id) of rows to a list of metadata |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry"></a>

### MetadataLocations.CellsRowMap.RowsEntry :ref=factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ListOfMetadata](#factset.protobuf.stach.v2.table.ListOfMetadata) |  |  |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry"></a>

### MetadataLocations.ColumnsEntry :ref=factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ListOfMetadata](#factset.protobuf.stach.v2.table.ListOfMetadata) |  |  |






<a name="factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry"></a>

### MetadataLocations.RowsEntry :ref=factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ListOfMetadata](#factset.protobuf.stach.v2.table.ListOfMetadata) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/Reference.proto"></a>

## fds/protobuf/stach/v2/table/Reference.proto



<a name="factset.protobuf.stach.v2.table.Reference"></a>

### Reference :ref=factset.protobuf.stach.v2.table.Reference
A reference to a table or a piece of a table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reference_type | [ReferenceType](#factset.protobuf.stach.v2.table.ReferenceType) |  | The type of the reference |
| table_id | [string](#string) |  | The table id |
| column_id | [string](#string) |  | The column id |
| row_id | [string](#string) |  | The row id |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/ReferenceType.proto"></a>

## fds/protobuf/stach/v2/table/ReferenceType.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.v2.table.ReferenceType"></a>

### ReferenceType :ref=factset.protobuf.stach.v2.table.ReferenceType
The type of table reference

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_REFERENCE_TYPE | 0 | This value should never be used, but exists to ensure that a value is specified |
| TABLE | 1 | The table reference |
| COLUMN | 2 | The column reference |
| ROW | 3 | The row reference |
| CELL | 4 | The cell reference |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/RowDefinition.proto"></a>

## fds/protobuf/stach/v2/table/RowDefinition.proto



<a name="factset.protobuf.stach.v2.table.RowDefinition"></a>

### RowDefinition :ref=factset.protobuf.stach.v2.table.RowDefinition
A definition of a row

Overrides the column definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The id; used for referring to a row internal to a package |
| format | [DataFormat](#factset.protobuf.stach.v2.table.DataFormat) |  | The data format; overrides the `ColumnDefinition.format` |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/Table.proto"></a>

## fds/protobuf/stach/v2/table/Table.proto



<a name="factset.protobuf.stach.v2.table.Table"></a>

### Table :ref=factset.protobuf.stach.v2.table.Table
A column organized table


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| definition | [TableDefinition](#factset.protobuf.stach.v2.table.TableDefinition) |  | The definition |
| data | [TableData](#factset.protobuf.stach.v2.table.TableData) |  | The data |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/TableData.proto"></a>

## fds/protobuf/stach/v2/table/TableData.proto



<a name="factset.protobuf.stach.v2.table.TableData"></a>

### TableData :ref=factset.protobuf.stach.v2.table.TableData
An object of table data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rows | [RowDefinition](#factset.protobuf.stach.v2.table.RowDefinition) | repeated | The array of rows definitions |
| columns | [TableData.ColumnsEntry](#factset.protobuf.stach.v2.table.TableData.ColumnsEntry) | repeated | The map (key: column id) of column data |
| metadata | [MetadataCollection](#factset.protobuf.stach.v2.table.MetadataCollection) |  | The metadata |






<a name="factset.protobuf.stach.v2.table.TableData.ColumnsEntry"></a>

### TableData.ColumnsEntry :ref=factset.protobuf.stach.v2.table.TableData.ColumnsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ColumnData](#factset.protobuf.stach.v2.table.ColumnData) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/TableDefinition.proto"></a>

## fds/protobuf/stach/v2/table/TableDefinition.proto



<a name="factset.protobuf.stach.v2.table.TableDefinition"></a>

### TableDefinition :ref=factset.protobuf.stach.v2.table.TableDefinition
A table definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_table_id | [string](#string) |  | The id of the headers table |
| columns | [ColumnDefinition](#factset.protobuf.stach.v2.table.ColumnDefinition) | repeated | The array of column definitions |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/v2/table/VerticalAlignment.proto"></a>

## fds/protobuf/stach/v2/table/VerticalAlignment.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.v2.table.VerticalAlignment"></a>

### VerticalAlignment :ref=factset.protobuf.stach.v2.table.VerticalAlignment
A vertical alignment

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_VALIGN | 0 | This value should never be used, but exists to ensure that a value is specified |
| TOP | 1 | Value is vertically aligned to the top of the cell |
| MIDDLE | 2 | Value is vertically aligned to the middle of the cell |
| BOTTOM | 3 | Value is vertically aligned to the bottom of the cell |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->

