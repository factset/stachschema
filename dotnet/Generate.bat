@echo off

del /s /q *.g.cs
echo dotnet: Removed old c# generated classes

call protoc --proto_path=../proto --csharp_out=./Schema/fds/protobuf/stach --csharp_opt=file_extension=.g.cs,base_namespace=FactSet.Protobuf.Stach^
 fds/protobuf/stach/Package.proto^
 fds/protobuf/stach/RowOrganized.proto^
 fds/protobuf/stach/table/CellDefinition.proto^
 fds/protobuf/stach/table/ColumnData.proto^
 fds/protobuf/stach/table/ColumnDefinition.proto^
 fds/protobuf/stach/table/DataFormat.proto^
 fds/protobuf/stach/table/HorizontalAlignment.proto^
 fds/protobuf/stach/table/ListOfMetadata.proto^
 fds/protobuf/stach/table/MetadataCollection.proto^
 fds/protobuf/stach/table/MetadataItem.proto^
 fds/protobuf/stach/table/MetadataLocations.proto^
 fds/protobuf/stach/table/Reference.proto^
 fds/protobuf/stach/table/ReferenceType.proto^
 fds/protobuf/stach/table/RowDefinition.proto^
 fds/protobuf/stach/table/Table.proto^
 fds/protobuf/stach/table/TableData.proto^
 fds/protobuf/stach/table/TableDefinition.proto^
 fds/protobuf/stach/table/VerticalAlignment.proto
echo dotnet: Generated new schema c# classes

call dotnet run -c Release -p Generator
echo dotnet: Generated figures and examples
