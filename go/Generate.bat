@echo off

cd v2

del /s /q *.*
echo go: Removed old go classes


call protoc --proto_path=../../proto --go_out=paths=source_relative:.^
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

echo go: Generated go classes successfully

cd fds/protobuf/stach

call go mod init github.com/factset/stachschema/go/v2/fds/protobuf/stach
call go build

cd ../../../..