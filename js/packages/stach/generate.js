var process = require('process');
var exec = require('child_process').exec;

var CWD = process.cwd();

// Path to this plugin
var PROTOC_GEN_TS_PATH=`${CWD}/node_modules/.bin/protoc-gen-ts`;

// Directory to write generated code to (.js and .d.ts files)
var OUT_DIR=CWD;

if (process.platform === 'win32') {
	PROTOC_GEN_TS_PATH += '.cmd';
}

exec(`protoc\
 --proto_path=../../../proto\
 --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}"\
 --js_out="import_style=commonjs,binary:${OUT_DIR}"\
 --ts_out="${OUT_DIR}"\
 fds/protobuf/stach/Package.proto\
 fds/protobuf/stach/RowOrganized.proto\
 fds/protobuf/stach/table/CellDefinition.proto\
 fds/protobuf/stach/table/ColumnData.proto\
 fds/protobuf/stach/table/ColumnDefinition.proto\
 fds/protobuf/stach/table/DataFormat.proto\
 fds/protobuf/stach/table/HorizontalAlignment.proto\
 fds/protobuf/stach/table/ListOfMetadata.proto\
 fds/protobuf/stach/table/MetadataCollection.proto\
 fds/protobuf/stach/table/MetadataItem.proto\
 fds/protobuf/stach/table/MetadataLocations.proto\
 fds/protobuf/stach/table/Reference.proto\
 fds/protobuf/stach/table/ReferenceType.proto\
 fds/protobuf/stach/table/RowDefinition.proto\
 fds/protobuf/stach/table/Table.proto\
 fds/protobuf/stach/table/TableData.proto\
 fds/protobuf/stach/table/TableDefinition.proto\
 fds/protobuf/stach/table/VerticalAlignment.proto`,
 function(err, stdout, stderr) {
	if (err) {
		console.log("child process failed with error code: " + err.code);
		console.log(err);
	}
	console.log(stdout);
 });