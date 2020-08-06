# Changelog

## 2020-08-07

### Protobuf v2.0

### Overview
The changes in this release are a result of the following goals:
1. Conform to FactSet API Standard
   - Native `null` values instead of specialized values to work around the protobuf repeated limitation
   - Depend on primitive data types via [RFC7159](http://tools.ietf.org/html/rfc7159) and accomodate domain specific meaningful data types (e.g. id32, date, uuid, etc)
2. Simplify metadata
3. Satisfy a need for a simple to consume tabular format that is row organized
4. Remove any business logic from serialization SDKs

### Changes
- `SeriesData`
  - Renamed to `ColumnData`
  - Replaced the `*_array` properties with the `values` property of type `google.protobuf.ListValue`
  - Added the `definitions` property
- `SeriesDefinition`
  - Renamed to `ColumnDefinition`
  - Changed the `type` property to a `string`
  - Changed the `format` property to use the number 10
- `SeriesFormat`
  - Renamed to `DataFormat`
- `MetadataLocations`
  - Added the `cells` property
- `MetadataItem`
  - Moved to the `factset.protobuf.stach.table` namespace
  - Replaced the `*_value` and `*_array` properties with the `value` property of type `google.protobuf.Value`
  - Renamed the `ref_value` property to `reference`
- `DataType` was removed
- `RowOrganizedPackage` was added
- Removed all business logic from the Dotnet SDK

### Documentation
- Integrated [docsify](https://docsify.js.org)

### SDK
- Dotnet v2.0.0
- Go v2.0.0
- Java v2.0.0
- JavaScript v2.0.0
- Python v2.0.0
- R v2.0.0

## 2020-02-12

### Protobuf v1.1

#### Changes
- Added `*_array` properties to `MetadataItem`

### SDK
- Dotnet v1.1.0
- Java v1.1.0
- Python v1.1.0
- R v1.1.0

## 2020-01-10

### Chore
- Fixed R CRAN warnings and comments

### SDK
- R v1.0.2

## 2019-10-29

### Protobuf v1.0
- First release

### SDK
- Dotnet v1.0.0
- Java v1.0.0
- Python v1.0.0
- R v1.0.0
