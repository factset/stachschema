# STACH v2

This version improved the schema by removing the specialized `null` values, being unopinionated with data types, and offering a simpler to consume table format.

Please start with the [guidance](v2/Guidance) to understand how to use this version.

## Null Value

Version 1 utilized the protobuf `repeated` for arrays of data, which does not allow for `null` values for primatives. This prevented the schema from being able to serialize native `null` values in JSON.

Version 2 utilizes the `google.protobuf.ListValue`, `google.protobuf.Value`, and `google.protobuf.Struct` which are handled differently than other protobuf messages when serializing to JSON. This also allowed for polymorphic arrays and maps of data.

## Data Type 

Version 1 was opinionated about what data types could be represented in a table and used the [](factset.protobuf.stach.table.DataType :ref :v1) `enum` to control the available types.

Version 2 is not opinionated about what data types can be represented in a table, and leaves it open ended. The intent is to allow the organization producing STACH to standardize data types independently. The `google.protobuf.Value` message allows for any JSON value to be represented, which means that any value, including strings, numbers, booleans, objects, arrays, and nulls can be represented in a table's cell. The [type](factset.protobuf.stach.table.ColumnDefinition :ref :v2) property was changed from a [](factset.protobuf.stach.table.DataType :ref :v1) to a `string` as a result.

## Consumption

Version 1 only supported the column organized format.

Version 2 added a table format that is simpler to consume. This format is called [Row Organized](v2/RowOrganized) and the original format was named [Column Organized](v2/ColumnOrganized).

Row organized data is easier to consume because programming languages are well suited to consume row organized data with `for` loops, the consumer does not need to keep track of indices like they would with column organized data, and the data should already includes information to facilitate rendering, like header groups and row and column spans and row group levels for indentation.

## Pros and Cons

### Column Organized
- Data can be compressed
- Header data is separated from primary data
   - Easier to chart data
   - Easier to manipulate data
- Harder to render because rendering cues are determined by the consumer
   - Header groups
   - Row and column spans
   - Row group level

### Row Organized
- Data cannot be compressed
- Header rows are in the same array as body rows
   - Harder to chart data
   - Harder to manipulate data
- Easier to render because rendering cues are determined by the producer
   - Header groups
   - Row and column spans
   - Row group level