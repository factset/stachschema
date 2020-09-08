echo docs v1: Generating Reference.md
call docker run --rm^
 -v "%CD%":/out^
 -v "%CD%\..\..\proto":/protos^
 pseudomuto/protoc-gen-doc^
 --doc_opt=/out/Reference.tmpl,Reference.md^
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
 echo docs v1: Generated Reference.md