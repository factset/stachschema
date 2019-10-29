protoc --proto_path=../proto --python_out=./fds.protobuf.stach fds/protobuf/stach/Package.proto^
 fds/protobuf/stach/MetadataItem.proto^
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
 :: Uncomment the lines below for adding support to Chart schema
 ::fds/protobuf/stach/chart/Chart.proto^
 ::fds/protobuf/stach/chart/Data.proto^
 ::fds/protobuf/stach/chart/Plot.proto^
 ::fds/protobuf/stach/chart/Series.proto^
 
echo python: Generated python classes successfully
 
cd fds.protobuf.stach/fds
echo.>__init__.py
cd protobuf
echo.>__init__.py
cd stach
echo.>__init__.py
:: Uncomment the lines below for adding support to Chart schema
::cd chart
::echo.>__init__.py
::cd ..
cd table
echo.>__init__.py
cd ../../../../

python setup.py sdist

cd ..

echo python: created fds.protobuf.stach package in dist folder