@echo off
protoc --proto_path=../proto --csharp_out=./Schema/fds/protobuf/stach --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach^
 fds/protobuf/stach/MetadataItem.proto^
 fds/protobuf/stach/Package.proto^
 fds/protobuf/stach/table/DataType.proto^
 fds/protobuf/stach/table/HorizontalAlignment.proto^
 fds/protobuf/stach/table/ListOfMetadata.proto^
 fds/protobuf/stach/table/MetadataCollection.proto^
 fds/protobuf/stach/table/MetadataLocations.proto^
 fds/protobuf/stach/table/Reference.proto^
 fds/protobuf/stach/table/ReferenceFilterMode.proto^
 fds/protobuf/stach/table/ReferenceType.proto^
 fds/protobuf/stach/table/SeriesData.proto^
 fds/protobuf/stach/table/SeriesDefinition.proto^
 fds/protobuf/stach/table/SeriesFormat.proto^
 fds/protobuf/stach/table/Table.proto^
 fds/protobuf/stach/table/TableData.proto^
 fds/protobuf/stach/table/TableDefinition.proto^
 fds/protobuf/stach/table/VerticalAlignment.proto^
 fds/protobuf/stach/table/Wrappers.proto
 :: Uncomment the lines below for adding the support for Chart schema
 ::fds/protobuf/stach/chart/Chart.proto^
 ::fds/protobuf/stach/chart/Data.proto^
 ::fds/protobuf/stach/chart/Plot.proto^
 ::fds/protobuf/stach/chart/Series.proto^
echo dotnet: Generated schema c# classes