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
exports.MetadataItem = void 0;
/* eslint-disable */
var struct_1 = require("../../../../google/protobuf/struct");
var Reference_1 = require("../../../../fds/protobuf/stach/table/Reference");
var minimal_1 = require("protobufjs/minimal");
var baseMetadataItem = {};
exports.MetadataItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference !== undefined) {
            Reference_1.Reference.encode(message.reference, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataItem);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reference = Reference_1.Reference.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataItem);
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.reference !== undefined && object.reference !== null) {
            message.reference = Reference_1.Reference.fromJSON(object.reference);
        }
        else {
            message.reference = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataItem);
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        if (object.reference !== undefined && object.reference !== null) {
            message.reference = Reference_1.Reference.fromPartial(object.reference);
        }
        else {
            message.reference = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        message.reference !== undefined && (obj.reference = message.reference ? Reference_1.Reference.toJSON(message.reference) : undefined);
        return obj;
    }
};
