# Guidance

If your API has endpoints that serve list or tabular data, then STACH may be well suited for your API.

APIs should be as simple as possible. Developers quickly reject an API if it is difficult to use. STACH is designed to allow you to choose the level of complexity that is appropriate for your API.

Any STACH message is allowed to be returned from an API endpoint, but the following message types are good candidates for API endpoints that return data:
- [Row Organized Table Data](factset.protobuf.stach.table.RowOrganizedPackage.TableData :ref) 
- [Row Organized Table](factset.protobuf.stach.table.RowOrganizedPackage.Table :ref) 
- [Row Organized Package](factset.protobuf.stach.table.RowOrganizedPackage :ref) 
- [Column Organized Package](factset.protobuf.stach.table.Package :ref) 

The following examples are ordered from least complex to most complex. This is meant to help guide you to pick the right message type, as well as to help you get familiar with how STACH can be used for very simple data as well as very complex data.

> Note: In this document, the words `column` and `field` mean the same thing.

## Row Organized

For more detailed information regarding this format, please refer to the [Row Organized Documentation](RowOrganized.md).

### Table Data

This is the simplest format of STACH. Since there is nothing to describe the columns (i.e. fields), it is expected that there is a well-defined list of columns that may or may not be included. That list should not be dynamic in any way.

Message Type: [Row Organized Table Data](factset.protobuf.stach.table.RowOrganizedPackage.TableData :ref) 

#### Figure {f#}: Table Data :figure=figure-RowOrganizedTableDataWithMaps

[filename](examples/Guidance/RowOrganizedTableDataWithMaps.json ':include')

### Table

If the columns are dynamic in any way, then returning a table allows columns definitions to be included to inform the client what the columns are. An alternative design could return the [Row Organized Table Definition](factset.protobuf.stach.table.RowOrganizedPackage.TableDefinition :ref) via a separate API endpoint. This would be helpful in a more sophisticated API that supports paging or other features.

Message Type: [Row Organized Table](factset.protobuf.stach.table.RowOrganizedPackage.Table :ref) 

#### Figure {f#}: Table :figure=figure-RowOrganizedTableWithMaps

[filename](examples/Guidance/RowOrganizedTableWithMaps.json ':include')

[Figure {f#}](#figure-RowOrganizedTableWithArrays) is the same as [Figure {f#}](#figure-RowOrganizedTableWithMaps) but with arrays. This makes the response smaller thus decreasing the over-the-wire transfer time.

#### Figure {f#}: Table with Arrays :figure=figure-RowOrganizedTableWithArrays

[filename](examples/Guidance/RowOrganizedTableWithArrays.json ':include')

Header rows can also be included as additional rows.

#### Figure {f#}: Table with Headers :figure=figure-RowOrganizedTableWithMapsAndHeaders

[filename](examples/Guidance/RowOrganizedTableWithMapsAndHeaders.json ':include')

[Figure {f#}](#figure-RowOrganizedTableWithArraysAndHeaders) is the same as [Figure {f#}](#figure-RowOrganizedTableWithMapsAndHeaders) but with arrays.

#### Figure {f#}: Table with Headers and Arrays :figure=figure-RowOrganizedTableWithArraysAndHeaders

[filename](examples/Guidance/RowOrganizedTableWithArraysAndHeaders.json ':include')


### Package

A package allows more than one table to be included.

Message Type: [Row Organized Package](factset.protobuf.stach.table.RowOrganizedPackage :ref) 

#### Figure {f#}: Package :figure=figure-RowOrganizedPackageWithMapsAndHeaders

[filename](examples/Guidance/RowOrganizedPackageWithMapsAndHeaders.json ':include')

[Figure {f#}](#figure-RowOrganizedPackageWithArraysAndHeaders) is the same as [Figure {f#}](#figure-RowOrganizedPackageWithMapsAndHeaders) but with arrays.

#### Figure {f#}: Package with Arrays :figure=figure-RowOrganizedPackageWithArraysAndHeaders

[filename](examples/Guidance/RowOrganizedPackageWithArraysAndHeaders.json ':include')

## Column Organized

The column organized format is best for manipulation. For instance, the column organized format does not flatten the columns that make up the collapsed column into one column like the row organized format does. This means that the data is still available for manipulation, such as processing the data, creating a rendered chart, or creating a rendered table. The column organized format can always be converted to the row organized format should that be necessary.

As stated previously, any STACH message can be returned. The API can return different parts of the the column organized format from different endpoints as appropriate, but for simplicity, only the [Column Organized Package](factset.protobuf.stach.table.Package :ref) is included in the examples below.

For more detailed information regarding this format, please refer to the [Column Organized Documentation](ColumnOrganized.md).

### Package

Message Type: [Column Organized Package](factset.protobuf.stach.table.Package :ref) 

#### Figure {f#}: Package :figure=figure-ColumnOrganizedPackage

[filename](examples/Guidance/ColumnOrganizedPackage.json ':include') 

Compression decreases the size of the data and thus the over-the-wire transfer time when repeating values exist.

#### Figure {f#}: Package with Compression :figure=figure-ColumnOrganizedPackageWithCompression

[filename](examples/Guidance/ColumnOrganizedPackageWithCompression.json ':include')

Headers further describe the data beyond a human-readable name for each column. Multi-row row headers with a hierarchy are complex and are expressed with a separate headers table similar to the primary table.

#### Figure {f#}: Package with Headers :figure=figure-ColumnOrganizedPackageWithHeaders

[filename](examples/Guidance/ColumnOrganizedPackageWithHeaders.json ':include')

Metadata is data that is not directly rendered to a cell, but rather used in some sort of functionality, like marking a row as collapsed, or rendering an icon, url, or tooltip.

#### Figure {f#}: Package with Headers and Metadata :figure=figure-ColumnOrganizedPackageWithMetadata

[filename](examples/Guidance/ColumnOrganizedPackageWithMetadata.json ':include')

## Examples Reference

The following table is a reference of all of the examples above.

[filename](examples/Guidance/Examples.md ':include')