var pbjs = require("protobufjs/cli/pbjs"); // or require("protobufjs/cli").pbjs / .pbts
var pbts = require("protobufjs/cli/pbts"); // or require("protobufjs/cli").pbjs / .pbts
var fs = require('fs');

var jsOutputFileName = "stach.js";
var tsOutputFileName = "stach.d.ts";
var moduleName = "stach";

pbjs.main([ "-t", "static-module", "-w", "commonjs", "-r", moduleName, "-o", jsOutputFileName,
	"../../../proto/fds/protobuf/stach/Package.proto",
	"../../../proto/fds/protobuf/stach/RowOrganized.proto",
	"../../../proto/fds/protobuf/stach/table/CellDefinition.proto",
	"../../../proto/fds/protobuf/stach/table/ColumnData.proto",
	"../../../proto/fds/protobuf/stach/table/ColumnDefinition.proto",
	"../../../proto/fds/protobuf/stach/table/DataFormat.proto",
	"../../../proto/fds/protobuf/stach/table/HorizontalAlignment.proto",
	"../../../proto/fds/protobuf/stach/table/ListOfMetadata.proto",
	"../../../proto/fds/protobuf/stach/table/MetadataCollection.proto",
	"../../../proto/fds/protobuf/stach/table/MetadataItem.proto",
	"../../../proto/fds/protobuf/stach/table/MetadataLocations.proto",
	"../../../proto/fds/protobuf/stach/table/Reference.proto",
	"../../../proto/fds/protobuf/stach/table/ReferenceType.proto",
	"../../../proto/fds/protobuf/stach/table/RowDefinition.proto",
	"../../../proto/fds/protobuf/stach/table/Table.proto",
	"../../../proto/fds/protobuf/stach/table/TableData.proto",
	"../../../proto/fds/protobuf/stach/table/TableDefinition.proto",
	"../../../proto/fds/protobuf/stach/table/VerticalAlignment.proto" ], function(err, output) {
    if (err) throw err;
    console.log("js: Generated javascript");
    console.log("js: Wrote " + jsOutputFileName);

	pbts.main([ "-n", moduleName, jsOutputFileName ], function(err, output) {
	    if (err) throw err;
	    console.log("js: Generated typescript");

	    output = "import * as Long from \"long\";\n" + output;

	    fs.writeFile(tsOutputFileName, output, function(err) {
	    	if(err) return console.log(err);
		    console.log("js: Wrote " + tsOutputFileName);
		});
	});
});
