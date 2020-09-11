var stach = require('./stach');

delete stach.google.protobuf.Struct.fromObject;
delete stach.google.protobuf.Struct.toObject;
delete stach.google.protobuf.Value.fromObject;
delete stach.google.protobuf.Value.toObject;
delete stach.google.protobuf.ListValue.fromObject;
delete stach.google.protobuf.ListValue.toObject;

stach.google.protobuf.Struct.fromObject = function fromObject(object) {
    if (object instanceof stach.google.protobuf.Struct)
        return object;
    var message = new stach.google.protobuf.Struct();
    if (typeof object === "object") {
        message.fields = {};
        for (var keys = Object.keys(object), i = 0; i < keys.length; ++i) {
            message.fields[keys[i]] = stach.google.protobuf.Value.fromObject(object[keys[i]]);
        }
    }
    return message;
};

stach.google.protobuf.Struct.toObject = function toObject(message, options) {
    if (!options)
        options = {};
    var object = undefined;
    if (options.objects || options.defaults)
        object = {};
    var keys2;
    if (message.fields && (keys2 = Object.keys(message.fields)).length) {
        object = {};
        for (var j = 0; j < keys2.length; ++j)
            object[keys2[j]] = stach.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
    }
    return object;
};

stach.google.protobuf.Value.fromObject = function fromObject(object) {
    if (object instanceof stach.google.protobuf.Value)
        return object;
    var message = new stach.google.protobuf.Value();
    if (object === null || object === undefined)
        message.nullValue = stach.google.protobuf.NullValue.NULL_VALUE;
    else if (typeof object === "number")
        message.numberValue = Number(object);
    else if (typeof object === "string")
        message.stringValue = String(object);
    else if (typeof object === "boolean")
        message.boolValue = Boolean(object);
    else if (Array.isArray(object))
        message.listValue = stach.google.protobuf.ListValue.fromObject(object);
    else if (typeof(object) === "object")
        message.structValue = stach.google.protobuf.Struct.fromObject(object);
    return message;
};

stach.google.protobuf.Value.toObject = function toObject(message, options) {
    if (!options)
        options = {};
    var object = undefined;
    if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
        object = null;
    }
    if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
        object = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
    }
    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
        object = message.stringValue;
    }
    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
        object = message.boolValue;
    }
    if (message.structValue != null && message.hasOwnProperty("structValue")) {
        object = stach.google.protobuf.Struct.toObject(message.structValue, options);
    }
    if (message.listValue != null && message.hasOwnProperty("listValue")) {
        object = stach.google.protobuf.ListValue.toObject(message.listValue, options);
    }
    return object;
};

stach.google.protobuf.ListValue.fromObject = function fromObject(object) {
    if (object instanceof stach.google.protobuf.ListValue)
        return object;
    var message = new stach.google.protobuf.ListValue();
    if (Array.isArray(object)) {
        message.values = [];
        for (var i = 0; i < object.length; ++i) {
            message.values[i] = stach.google.protobuf.Value.fromObject(object[i]);
        }
    }
    return message;
};

stach.google.protobuf.ListValue.toObject = function toObject(message, options) {
    if (!options)
        options = {};
    var object = undefined;
    if (options.arrays || options.defaults)
        object = [];
    if (message.values && message.values.length) {
        object = [];
        for (var j = 0; j < message.values.length; ++j)
            object[j] = stach.google.protobuf.Value.toObject(message.values[j], options);
    }
    return object;
};

exports.factset = stach.factset;
exports.google = stach.google;