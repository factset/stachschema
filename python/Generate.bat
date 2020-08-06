@echo off

del /s /q *_pb2.py
echo python: Removed old python classes

call protoc --proto_path=../proto --python_out=./fds.protobuf.stach^
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
 
echo python: Generated python classes successfully
 
cd fds.protobuf.stach/fds
echo.>__init__.py
cd protobuf
echo.>__init__.py
cd stach
echo.>__init__.py
cd table
echo.>__init__.py
cd ../../../../

python setup.py sdist

cd ..

echo python: created fds.protobuf.stach package in dist folder