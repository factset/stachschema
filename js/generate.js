var pbjs = require("protobufjs/cli/pbjs"); // or require("protobufjs/cli").pbjs / .pbts
var pbts = require("protobufjs/cli/pbts"); // or require("protobufjs/cli").pbjs / .pbts
var process = require('process');
var exec = require('child_process').exec;
var fs = require('fs');

var CWD = process.cwd();

// Path to this plugin
var PROTOC_GEN_TS_PATH=`${CWD}/node_modules/.bin/protoc-gen-ts_proto`;

// Directory to write generated code to (.js and .d.ts files)
var OUT_DIR=`${CWD}/packages/stach`;

if (process.platform === 'win32') {
  PROTOC_GEN_TS_PATH += '.cmd';
}

var protoFiles = [
  'fds/protobuf/stach/Package.proto',
  'fds/protobuf/stach/RowOrganized.proto',
  'fds/protobuf/stach/table/CellDefinition.proto',
  'fds/protobuf/stach/table/ColumnData.proto',
  'fds/protobuf/stach/table/ColumnDefinition.proto',
  'fds/protobuf/stach/table/DataFormat.proto',
  'fds/protobuf/stach/table/HorizontalAlignment.proto',
  'fds/protobuf/stach/table/ListOfMetadata.proto',
  'fds/protobuf/stach/table/MetadataCollection.proto',
  'fds/protobuf/stach/table/MetadataItem.proto',
  'fds/protobuf/stach/table/MetadataLocations.proto',
  'fds/protobuf/stach/table/Reference.proto',
  'fds/protobuf/stach/table/ReferenceType.proto',
  'fds/protobuf/stach/table/RowDefinition.proto',
  'fds/protobuf/stach/table/Table.proto',
  'fds/protobuf/stach/table/TableData.proto',
  'fds/protobuf/stach/table/TableDefinition.proto',
  'fds/protobuf/stach/table/VerticalAlignment.proto'
];
var jsOutputFileName = "packages/stach/stach.js";
var tsOutputFileName = "packages/stach/stach.d.ts";
var moduleName = "stach";

var pbjsArgs = [ "-t", "static-module", "-w", "commonjs", "-r", moduleName ];
for (var i = 0; i < protoFiles.length; i++) {
  pbjsArgs.push('../proto/' + protoFiles[i]);
}
pbjs.main(pbjsArgs, function (err, jsOutput) {
  if (err) throw err;
  console.log("js: Generated javascript");

  jsOutput = jsOutput.replace(/^ *if \(typeof [^ ]+ !== "object"\)\r?\n^ *throw TypeError\("[^ ]+: object expected"\);\r?\n^( *message\.[^ ]+ = \$root\.google\.protobuf\.(?:Struct|ListValue|Value)\.fromObject\([^ ]+\);)/mg, "$1");

  fs.writeFile(jsOutputFileName, jsOutput, function(err) {
    if(err) return console.log(err);
    console.log("js: Wrote " + jsOutputFileName);
  });

  var pbtsArgs = [ "-n", moduleName, jsOutputFileName ];
  pbts.main(pbtsArgs, function(err, tsOutput) {
    if (err) throw err;
    console.log("js: Generated typescript");

    fs.writeFile(tsOutputFileName, tsOutput, function(err) {
        if(err) return console.log(err);
        console.log("js: Wrote " + tsOutputFileName);
    });
  });
});