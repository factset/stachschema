# Reference



<a name="fds/protobuf/stach/MetadataItem.proto"></a>

## fds/protobuf/stach/MetadataItem.proto



<a name="factset.protobuf.stach.MetadataItem"></a>

### MetadataItem :ref=factset.protobuf.stach.MetadataItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| double_value | [double](#double) |  |  |
| float_value | [float](#float) |  |  |
| int32_value | [int32](#int32) |  |  |
| int64_value | [int64](#int64) |  |  |
| bool_value | [bool](#bool) |  |  |
| string_value | [string](#string) |  |  |
| duration_value | [google.protobuf.Duration](#google.protobuf.Duration) |  |  |
| timestamp_value | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| double_array | [table.DoubleArray](#factset.protobuf.stach.table.DoubleArray) |  |  |
| float_array | [table.FloatArray](#factset.protobuf.stach.table.FloatArray) |  |  |
| int32_array | [table.Int32Array](#factset.protobuf.stach.table.Int32Array) |  |  |
| int64_array | [table.Int64Array](#factset.protobuf.stach.table.Int64Array) |  |  |
| bool_array | [table.BoolArray](#factset.protobuf.stach.table.BoolArray) |  |  |
| string_array | [table.StringArray](#factset.protobuf.stach.table.StringArray) |  |  |
| duration_array | [table.DurationArray](#factset.protobuf.stach.table.DurationArray) |  |  |
| timestamp_array | [table.TimestampArray](#factset.protobuf.stach.table.TimestampArray) |  |  |
| ref_value | [table.Reference](#factset.protobuf.stach.table.Reference) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/Package.proto"></a>

## fds/protobuf/stach/Package.proto



<a name="factset.protobuf.stach.Package"></a>

### Package :ref=factset.protobuf.stach.Package



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| primary_table_ids | [string](#string) | repeated |  |
| tables | [Package.TablesEntry](#factset.protobuf.stach.Package.TablesEntry) | repeated |  |






<a name="factset.protobuf.stach.Package.TablesEntry"></a>

### Package.TablesEntry :ref=factset.protobuf.stach.Package.TablesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [table.Table](#factset.protobuf.stach.table.Table) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/DataType.proto"></a>

## fds/protobuf/stach/table/DataType.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.table.DataType"></a>

### DataType :ref=factset.protobuf.stach.table.DataType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_DATATYPE | 0 |  |
| DOUBLE | 1 |  |
| FLOAT | 2 |  |
| INT32 | 3 |  |
| INT64 | 4 |  |
| BOOL | 7 |  |
| STRING | 8 |  |
| DURATION | 9 |  |
| TIMESTAMP | 10 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/HorizontalAlignment.proto"></a>

## fds/protobuf/stach/table/HorizontalAlignment.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.table.HorizontalAlignment"></a>

### HorizontalAlignment :ref=factset.protobuf.stach.table.HorizontalAlignment


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_HALIGN | 0 |  |
| LEFT | 1 |  |
| CENTER | 2 |  |
| RIGHT | 3 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/ListOfMetadata.proto"></a>

## fds/protobuf/stach/table/ListOfMetadata.proto



<a name="factset.protobuf.stach.table.ListOfMetadata"></a>

### ListOfMetadata :ref=factset.protobuf.stach.table.ListOfMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/MetadataCollection.proto"></a>

## fds/protobuf/stach/table/MetadataCollection.proto



<a name="factset.protobuf.stach.table.MetadataCollection"></a>

### MetadataCollection :ref=factset.protobuf.stach.table.MetadataCollection



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| items | [MetadataCollection.ItemsEntry](#factset.protobuf.stach.table.MetadataCollection.ItemsEntry) | repeated |  |
| locations | [MetadataLocations](#factset.protobuf.stach.table.MetadataLocations) |  |  |






<a name="factset.protobuf.stach.table.MetadataCollection.ItemsEntry"></a>

### MetadataCollection.ItemsEntry :ref=factset.protobuf.stach.table.MetadataCollection.ItemsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [factset.protobuf.stach.MetadataItem](#factset.protobuf.stach.MetadataItem) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/MetadataLocations.proto"></a>

## fds/protobuf/stach/table/MetadataLocations.proto



<a name="factset.protobuf.stach.table.MetadataLocations"></a>

### MetadataLocations :ref=factset.protobuf.stach.table.MetadataLocations



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| table | [string](#string) | repeated |  |
| columns | [MetadataLocations.ColumnsEntry](#factset.protobuf.stach.table.MetadataLocations.ColumnsEntry) | repeated |  |
| rows | [MetadataLocations.RowsEntry](#factset.protobuf.stach.table.MetadataLocations.RowsEntry) | repeated |  |






<a name="factset.protobuf.stach.table.MetadataLocations.ColumnsEntry"></a>

### MetadataLocations.ColumnsEntry :ref=factset.protobuf.stach.table.MetadataLocations.ColumnsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ListOfMetadata](#factset.protobuf.stach.table.ListOfMetadata) |  |  |






<a name="factset.protobuf.stach.table.MetadataLocations.RowsEntry"></a>

### MetadataLocations.RowsEntry :ref=factset.protobuf.stach.table.MetadataLocations.RowsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ListOfMetadata](#factset.protobuf.stach.table.ListOfMetadata) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/Reference.proto"></a>

## fds/protobuf/stach/table/Reference.proto



<a name="factset.protobuf.stach.table.Reference"></a>

### Reference :ref=factset.protobuf.stach.table.Reference



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reference_type | [ReferenceType](#factset.protobuf.stach.table.ReferenceType) |  |  |
| table_id | [string](#string) |  |  |
| column_id | [string](#string) |  |  |
| row_id | [string](#string) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/ReferenceFilterMode.proto"></a>

## fds/protobuf/stach/table/ReferenceFilterMode.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.table.ReferenceFilterMode"></a>

### ReferenceFilterMode :ref=factset.protobuf.stach.table.ReferenceFilterMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| INCLUDE | 0 |  |
| EXCLUDE | 1 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/ReferenceType.proto"></a>

## fds/protobuf/stach/table/ReferenceType.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.table.ReferenceType"></a>

### ReferenceType :ref=factset.protobuf.stach.table.ReferenceType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_REFERENCE_TYPE | 0 |  |
| TABLE | 1 |  |
| COLUMN | 2 |  |
| ROW | 3 |  |
| CELL | 4 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/SeriesData.proto"></a>

## fds/protobuf/stach/table/SeriesData.proto



<a name="factset.protobuf.stach.table.SeriesData"></a>

### SeriesData :ref=factset.protobuf.stach.table.SeriesData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ranges | [SeriesData.RangesEntry](#factset.protobuf.stach.table.SeriesData.RangesEntry) | repeated |  |
| double_array | [DoubleArray](#factset.protobuf.stach.table.DoubleArray) |  |  |
| float_array | [FloatArray](#factset.protobuf.stach.table.FloatArray) |  |  |
| int32_array | [Int32Array](#factset.protobuf.stach.table.Int32Array) |  |  |
| int64_array | [Int64Array](#factset.protobuf.stach.table.Int64Array) |  |  |
| bool_array | [BoolArray](#factset.protobuf.stach.table.BoolArray) |  |  |
| string_array | [StringArray](#factset.protobuf.stach.table.StringArray) |  |  |
| duration_array | [DurationArray](#factset.protobuf.stach.table.DurationArray) |  |  |
| timestamp_array | [TimestampArray](#factset.protobuf.stach.table.TimestampArray) |  |  |






<a name="factset.protobuf.stach.table.SeriesData.RangesEntry"></a>

### SeriesData.RangesEntry :ref=factset.protobuf.stach.table.SeriesData.RangesEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [int32](#int32) |  |  |
| value | [int32](#int32) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/SeriesDefinition.proto"></a>

## fds/protobuf/stach/table/SeriesDefinition.proto



<a name="factset.protobuf.stach.table.SeriesDefinition"></a>

### SeriesDefinition :ref=factset.protobuf.stach.table.SeriesDefinition



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| type | [DataType](#factset.protobuf.stach.table.DataType) |  |  |
| is_dimension | [bool](#bool) |  |  |
| is_hidden | [bool](#bool) |  |  |
| next_sibling_id | [string](#string) |  |  |
| parent_id | [string](#string) |  |  |
| header_id | [string](#string) |  |  |
| format | [SeriesFormat](#factset.protobuf.stach.table.SeriesFormat) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/SeriesFormat.proto"></a>

## fds/protobuf/stach/table/SeriesFormat.proto



<a name="factset.protobuf.stach.table.SeriesFormat"></a>

### SeriesFormat :ref=factset.protobuf.stach.table.SeriesFormat



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| format | [string](#string) |  |  |
| null_format | [string](#string) |  |  |
| halign | [HorizontalAlignment](#factset.protobuf.stach.table.HorizontalAlignment) |  |  |
| valign | [VerticalAlignment](#factset.protobuf.stach.table.VerticalAlignment) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/Table.proto"></a>

## fds/protobuf/stach/table/Table.proto



<a name="factset.protobuf.stach.table.Table"></a>

### Table :ref=factset.protobuf.stach.table.Table



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| definition | [TableDefinition](#factset.protobuf.stach.table.TableDefinition) |  |  |
| data | [TableData](#factset.protobuf.stach.table.TableData) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/TableData.proto"></a>

## fds/protobuf/stach/table/TableData.proto



<a name="factset.protobuf.stach.table.TableData"></a>

### TableData :ref=factset.protobuf.stach.table.TableData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rows | [SeriesDefinition](#factset.protobuf.stach.table.SeriesDefinition) | repeated |  |
| columns | [TableData.ColumnsEntry](#factset.protobuf.stach.table.TableData.ColumnsEntry) | repeated |  |
| metadata | [MetadataCollection](#factset.protobuf.stach.table.MetadataCollection) |  |  |






<a name="factset.protobuf.stach.table.TableData.ColumnsEntry"></a>

### TableData.ColumnsEntry :ref=factset.protobuf.stach.table.TableData.ColumnsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [SeriesData](#factset.protobuf.stach.table.SeriesData) |  |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/TableDefinition.proto"></a>

## fds/protobuf/stach/table/TableDefinition.proto



<a name="factset.protobuf.stach.table.TableDefinition"></a>

### TableDefinition :ref=factset.protobuf.stach.table.TableDefinition



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_table_id | [string](#string) |  |  |
| columns | [SeriesDefinition](#factset.protobuf.stach.table.SeriesDefinition) | repeated |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/VerticalAlignment.proto"></a>

## fds/protobuf/stach/table/VerticalAlignment.proto


 <!-- end messages -->


<a name="factset.protobuf.stach.table.VerticalAlignment"></a>

### VerticalAlignment :ref=factset.protobuf.stach.table.VerticalAlignment


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_VALIGN | 0 |  |
| TOP | 1 |  |
| MIDDLE | 2 |  |
| BOTTOM | 3 |  |


 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->



<a name="fds/protobuf/stach/table/Wrappers.proto"></a>

## fds/protobuf/stach/table/Wrappers.proto



<a name="factset.protobuf.stach.table.BoolArray"></a>

### BoolArray :ref=factset.protobuf.stach.table.BoolArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [bool](#bool) | repeated |  |






<a name="factset.protobuf.stach.table.DoubleArray"></a>

### DoubleArray :ref=factset.protobuf.stach.table.DoubleArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [double](#double) | repeated |  |






<a name="factset.protobuf.stach.table.DurationArray"></a>

### DurationArray :ref=factset.protobuf.stach.table.DurationArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [google.protobuf.Duration](#google.protobuf.Duration) | repeated |  |






<a name="factset.protobuf.stach.table.FloatArray"></a>

### FloatArray :ref=factset.protobuf.stach.table.FloatArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [float](#float) | repeated |  |






<a name="factset.protobuf.stach.table.Int32Array"></a>

### Int32Array :ref=factset.protobuf.stach.table.Int32Array



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [int32](#int32) | repeated |  |






<a name="factset.protobuf.stach.table.Int64Array"></a>

### Int64Array :ref=factset.protobuf.stach.table.Int64Array



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [int64](#int64) | repeated |  |






<a name="factset.protobuf.stach.table.StringArray"></a>

### StringArray :ref=factset.protobuf.stach.table.StringArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [string](#string) | repeated |  |






<a name="factset.protobuf.stach.table.TimestampArray"></a>

### TimestampArray :ref=factset.protobuf.stach.table.TimestampArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [google.protobuf.Timestamp](#google.protobuf.Timestamp) | repeated |  |





 <!-- end messages -->

 <!-- end enums -->

 <!-- end HasExtensions -->

 <!-- end services -->

