"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MetadataCollection_ItemsEntry = exports.MetadataCollection = void 0;
/* eslint-disable */
var MetadataItem_1 = require("../../../../fds/protobuf/stach/table/MetadataItem");
var MetadataLocations_1 = require("../../../../fds/protobuf/stach/table/MetadataLocations");
var minimal_1 = require("protobufjs/minimal");
var baseMetadataCollection = {};
var baseMetadataCollection_ItemsEntry = {
    key: ""
};
exports.MetadataCollection = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        Object.entries(message.items).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.MetadataCollection_ItemsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        if (message.locations !== undefined && message.locations !== undefined) {
            MetadataLocations_1.MetadataLocations.encode(message.locations, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataCollection);
        message.items = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.MetadataCollection_ItemsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.items[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.locations = MetadataLocations_1.MetadataLocations.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataCollection);
        message.items = {};
        if (object.items !== undefined && object.items !== null) {
            Object.entries(object.items).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.items[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        if (object.locations !== undefined && object.locations !== null) {
            message.locations = MetadataLocations_1.MetadataLocations.fromJSON(object.locations);
        }
        else {
            message.locations = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataCollection);
        message.items = {};
        if (object.items !== undefined && object.items !== null) {
            Object.entries(object.items).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.items[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        if (object.locations !== undefined && object.locations !== null) {
            message.locations = MetadataLocations_1.MetadataLocations.fromPartial(object.locations);
        }
        else {
            message.locations = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.items = {};
        if (message.items) {
            Object.entries(message.items).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.items[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        message.locations !== undefined && (obj.locations = message.locations ? MetadataLocations_1.MetadataLocations.toJSON(message.locations) : undefined);
        return obj;
    }
};
exports.MetadataCollection_ItemsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataCollection_ItemsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataCollection_ItemsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataCollection_ItemsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
