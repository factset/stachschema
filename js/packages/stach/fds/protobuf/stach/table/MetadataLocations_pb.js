// source: fds/protobuf/stach/table/MetadataLocations.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var fds_protobuf_stach_table_ListOfMetadata_pb = require('../../../../fds/protobuf/stach/table/ListOfMetadata_pb.js');
goog.object.extend(proto, fds_protobuf_stach_table_ListOfMetadata_pb);
goog.exportSymbol('proto.factset.protobuf.stach.table.MetadataLocations', null, global);
goog.exportSymbol('proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap', null, global);
goog.exportSymbol('proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.factset.protobuf.stach.table.MetadataLocations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.factset.protobuf.stach.table.MetadataLocations.repeatedFields_, null);
};
goog.inherits(proto.factset.protobuf.stach.table.MetadataLocations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.factset.protobuf.stach.table.MetadataLocations.displayName = 'proto.factset.protobuf.stach.table.MetadataLocations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.displayName = 'proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.displayName = 'proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.factset.protobuf.stach.table.MetadataLocations.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.toObject = function(opt_includeInstance) {
  return proto.factset.protobuf.stach.table.MetadataLocations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    columnsMap: (f = msg.getColumnsMap()) ? f.toObject(includeInstance, proto.factset.protobuf.stach.table.ListOfMetadata.toObject) : [],
    rowsMap: (f = msg.getRowsMap()) ? f.toObject(includeInstance, proto.factset.protobuf.stach.table.ListOfMetadata.toObject) : [],
    cells: (f = msg.getCells()) && proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations}
 */
proto.factset.protobuf.stach.table.MetadataLocations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.factset.protobuf.stach.table.MetadataLocations;
  return proto.factset.protobuf.stach.table.MetadataLocations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations}
 */
proto.factset.protobuf.stach.table.MetadataLocations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTable(value);
      break;
    case 2:
      var value = msg.getColumnsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.factset.protobuf.stach.table.ListOfMetadata.deserializeBinaryFromReader, "", new proto.factset.protobuf.stach.table.ListOfMetadata());
         });
      break;
    case 3:
      var value = msg.getRowsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.factset.protobuf.stach.table.ListOfMetadata.deserializeBinaryFromReader, "", new proto.factset.protobuf.stach.table.ListOfMetadata());
         });
      break;
    case 4:
      var value = new proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap;
      reader.readMessage(value,proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.deserializeBinaryFromReader);
      msg.setCells(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.factset.protobuf.stach.table.MetadataLocations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getColumnsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.factset.protobuf.stach.table.ListOfMetadata.serializeBinaryToWriter);
  }
  f = message.getRowsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.factset.protobuf.stach.table.ListOfMetadata.serializeBinaryToWriter);
  }
  f = message.getCells();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.prototype.toObject = function(opt_includeInstance) {
  return proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsMap: (f = msg.getColumnsMap()) ? f.toObject(includeInstance, proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap;
  return proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getColumnsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.deserializeBinaryFromReader, "", new proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.serializeBinaryToWriter);
  }
};


/**
 * map<string, CellsRowMap> columns = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap>}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.prototype.getColumnsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.prototype.clearColumnsMap = function() {
  this.getColumnsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.prototype.toObject = function(opt_includeInstance) {
  return proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowsMap: (f = msg.getRowsMap()) ? f.toObject(includeInstance, proto.factset.protobuf.stach.table.ListOfMetadata.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap;
  return proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRowsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.factset.protobuf.stach.table.ListOfMetadata.deserializeBinaryFromReader, "", new proto.factset.protobuf.stach.table.ListOfMetadata());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.factset.protobuf.stach.table.ListOfMetadata.serializeBinaryToWriter);
  }
};


/**
 * map<string, ListOfMetadata> rows = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>}
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.prototype.getRowsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.factset.protobuf.stach.table.ListOfMetadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.prototype.clearRowsMap = function() {
  this.getRowsMap().clear();
  return this;};


/**
 * repeated string table = 1;
 * @return {!Array<string>}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.getTableList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.setTableList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.addTable = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.clearTableList = function() {
  return this.setTableList([]);
};


/**
 * map<string, ListOfMetadata> columns = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.getColumnsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.factset.protobuf.stach.table.ListOfMetadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.clearColumnsMap = function() {
  this.getColumnsMap().clear();
  return this;};


/**
 * map<string, ListOfMetadata> rows = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.getRowsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.factset.protobuf.stach.table.ListOfMetadata>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.factset.protobuf.stach.table.ListOfMetadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.clearRowsMap = function() {
  this.getRowsMap().clear();
  return this;};


/**
 * optional CellsColumnMap cells = 4;
 * @return {?proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.getCells = function() {
  return /** @type{?proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} */ (
    jspb.Message.getWrapperField(this, proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap, 4));
};


/**
 * @param {?proto.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap|undefined} value
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
*/
proto.factset.protobuf.stach.table.MetadataLocations.prototype.setCells = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.factset.protobuf.stach.table.MetadataLocations} returns this
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.clearCells = function() {
  return this.setCells(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.factset.protobuf.stach.table.MetadataLocations.prototype.hasCells = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.factset.protobuf.stach.table);
