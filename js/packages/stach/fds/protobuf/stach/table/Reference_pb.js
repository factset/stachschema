// source: fds/protobuf/stach/table/Reference.proto
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

var fds_protobuf_stach_table_ReferenceType_pb = require('../../../../fds/protobuf/stach/table/ReferenceType_pb.js');
goog.object.extend(proto, fds_protobuf_stach_table_ReferenceType_pb);
goog.exportSymbol('proto.factset.protobuf.stach.table.Reference', null, global);
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
proto.factset.protobuf.stach.table.Reference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.factset.protobuf.stach.table.Reference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.factset.protobuf.stach.table.Reference.displayName = 'proto.factset.protobuf.stach.table.Reference';
}



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
proto.factset.protobuf.stach.table.Reference.prototype.toObject = function(opt_includeInstance) {
  return proto.factset.protobuf.stach.table.Reference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.factset.protobuf.stach.table.Reference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.Reference.toObject = function(includeInstance, msg) {
  var f, obj = {
    referenceType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tableId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rowId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.factset.protobuf.stach.table.Reference}
 */
proto.factset.protobuf.stach.table.Reference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.factset.protobuf.stach.table.Reference;
  return proto.factset.protobuf.stach.table.Reference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.factset.protobuf.stach.table.Reference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.factset.protobuf.stach.table.Reference}
 */
proto.factset.protobuf.stach.table.Reference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.factset.protobuf.stach.table.ReferenceType} */ (reader.readEnum());
      msg.setReferenceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRowId(value);
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
proto.factset.protobuf.stach.table.Reference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.factset.protobuf.stach.table.Reference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.factset.protobuf.stach.table.Reference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.factset.protobuf.stach.table.Reference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTableId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRowId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ReferenceType reference_type = 1;
 * @return {!proto.factset.protobuf.stach.table.ReferenceType}
 */
proto.factset.protobuf.stach.table.Reference.prototype.getReferenceType = function() {
  return /** @type {!proto.factset.protobuf.stach.table.ReferenceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.factset.protobuf.stach.table.ReferenceType} value
 * @return {!proto.factset.protobuf.stach.table.Reference} returns this
 */
proto.factset.protobuf.stach.table.Reference.prototype.setReferenceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string table_id = 2;
 * @return {string}
 */
proto.factset.protobuf.stach.table.Reference.prototype.getTableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.factset.protobuf.stach.table.Reference} returns this
 */
proto.factset.protobuf.stach.table.Reference.prototype.setTableId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_id = 3;
 * @return {string}
 */
proto.factset.protobuf.stach.table.Reference.prototype.getColumnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.factset.protobuf.stach.table.Reference} returns this
 */
proto.factset.protobuf.stach.table.Reference.prototype.setColumnId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string row_id = 4;
 * @return {string}
 */
proto.factset.protobuf.stach.table.Reference.prototype.getRowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.factset.protobuf.stach.table.Reference} returns this
 */
proto.factset.protobuf.stach.table.Reference.prototype.setRowId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.factset.protobuf.stach.table);