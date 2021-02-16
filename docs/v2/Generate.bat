echo docs v2: Generating Reference.md
call docker run --rm^
 -v "%CD%":/out^
 -v "%CD%\..\..\proto":/protos^
 pseudomuto/protoc-gen-doc^
 --doc_opt=/out/Reference.tmpl,Reference.md^
 fds/protobuf/stach/v2/Package.proto^
 fds/protobuf/stach/v2/RowOrganized.proto^
 fds/protobuf/stach/v2/table/CellDefinition.proto^
 fds/protobuf/stach/v2/table/ColumnData.proto^
 fds/protobuf/stach/v2/table/ColumnDefinition.proto^
 fds/protobuf/stach/v2/table/DataFormat.proto^
 fds/protobuf/stach/v2/table/HorizontalAlignment.proto^
 fds/protobuf/stach/v2/table/ListOfMetadata.proto^
 fds/protobuf/stach/v2/table/MetadataCollection.proto^
 fds/protobuf/stach/v2/table/MetadataItem.proto^
 fds/protobuf/stach/v2/table/MetadataLocations.proto^
 fds/protobuf/stach/v2/table/Reference.proto^
 fds/protobuf/stach/v2/table/ReferenceType.proto^
 fds/protobuf/stach/v2/table/RowDefinition.proto^
 fds/protobuf/stach/v2/table/Table.proto^
 fds/protobuf/stach/v2/table/TableData.proto^
 fds/protobuf/stach/v2/table/TableDefinition.proto^
 fds/protobuf/stach/v2/table/VerticalAlignment.proto
 echo docs v2: Generated Reference.md