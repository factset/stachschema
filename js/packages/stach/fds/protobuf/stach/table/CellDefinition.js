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
exports.CellDefinition = void 0;
/* eslint-disable */
var DataFormat_1 = require("../../../../fds/protobuf/stach/table/DataFormat");
var minimal_1 = require("protobufjs/minimal");
var baseCellDefinition = {
    type: ""
};
exports.CellDefinition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.type);
        if (message.format !== undefined && message.format !== undefined) {
            DataFormat_1.DataFormat.encode(message.format, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCellDefinition);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.format = DataFormat_1.DataFormat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCellDefinition);
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = DataFormat_1.DataFormat.fromJSON(object.format);
        }
        else {
            message.format = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCellDefinition);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = DataFormat_1.DataFormat.fromPartial(object.format);
        }
        else {
            message.format = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.format !== undefined && (obj.format = message.format ? DataFormat_1.DataFormat.toJSON(message.format) : undefined);
        return obj;
    }
};
