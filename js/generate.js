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

exec(`protoc\
 --proto_path=../proto\
 --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PATH}"\
 --ts_proto_out="${OUT_DIR}" ` + protoFiles.join(' '),
 function(err, stdout, stderr) {
	if (err) {
		throw err;
	}

	var tsFiles = [];
	for (var i = 0; i < protoFiles.length; i++) {
		tsFiles.push('packages/stach/' + protoFiles[i].replace('.proto', '.ts'));
	}
	tsFiles.push('packages/stach/google/protobuf/struct.ts');

	// Using a custom typescript file to correctly serialize to/from json using google well known types
	safeDeleteFile('packages/stach/google/protobuf/struct.ts');
	fs.copyFile('packages/stach/google/protobuf/struct-custom.ts', 'packages/stach/google/protobuf/struct.ts', (err) => {
		if (err) {
			console.log("Failed to copy file", err);
		}
	})

	exec('tsc -d ' + tsFiles.join(' '), function(err, stdout, stderr) {
		if (err) {
			throw err;
		}
		console.log(stdout);
		console.log('Finished generating js files');

		var jsPath = `packages/stach/index.js`;
		var dtsPath = `packages/stach/index.d.ts`;

		// Delete previously generated files
		safeDeleteFile(jsPath);
		safeDeleteFile(dtsPath);

		var jsStream = fs.createWriteStream(jsPath, {flags:'a'});
		var dtsStream = fs.createWriteStream(dtsPath, {flags:'a'});

		for (var i = 0; i < tsFiles.length; i++) {
			var tsFile = tsFiles[i];

			if (tsFile.indexOf('-custom') < 0) {
				safeDeleteFile(tsFile);
			}

			var dtsFile = './' + tsFile.replace('.ts', '');
			var xports = require(dtsFile);
			var types = getTypes(xports);

			if (i > 0) {
				jsStream.write('\n\n');
				dtsStream.write('\n\n');
			}

			var dtsFileRelativeToPkg = dtsFile.replace('packages/stach/', '');
			writeExportsToIndexJS(i, dtsFileRelativeToPkg, types, jsStream);
			writeExportsToIndexDTS(dtsFileRelativeToPkg, types, dtsStream);	
		}

		jsStream.end();
		dtsStream.end();
	});

	console.log(stdout);
	console.log('Finished generating ts files');
 });

var safeDeleteFile = function(path) {
	try {
		fs.unlinkSync(path);
	} catch (ex) {
		console.log(`Could not delete ${path}`);
	}
}

var writeExportsToIndexJS = function(i, dtsFile, types, stream) {
	stream.write(`var f${i} = require('${dtsFile}');\n`);
	for (var j = 0; j < types.length; j++) {
		var type = types[j];
		if (j > 0) {
			stream.write('\n');
		}
		stream.write(`exports.${type} = f${i}.${type};`);
	}
}

var writeExportsToIndexDTS = function(dtsFile, types, stream) {
	stream.write(`import {\n  ${types.join(',\n  ')}\n} from '${dtsFile}';\n`);
	stream.write(`export {\n  ${types.join(',\n  ')}\n}`);
}

var getTypes = function(xports) {
	var types = [];
	for (var key in xports) {
		if (key[0] === '_' || key[0].toUpperCase() !== key[0]) continue;
		types.push(key);
	}
	return types;
}