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
exports.DataFormat = void 0;
/* eslint-disable */
var HorizontalAlignment_1 = require("../../../../fds/protobuf/stach/table/HorizontalAlignment");
var VerticalAlignment_1 = require("../../../../fds/protobuf/stach/table/VerticalAlignment");
var minimal_1 = require("protobufjs/minimal");
var baseDataFormat = {
    format: "",
    nullFormat: "",
    halign: 0,
    valign: 0
};
exports.DataFormat = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.format);
        writer.uint32(18).string(message.nullFormat);
        writer.uint32(24).int32(message.halign);
        writer.uint32(32).int32(message.valign);
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDataFormat);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.string();
                    break;
                case 2:
                    message.nullFormat = reader.string();
                    break;
                case 3:
                    message.halign = reader.int32();
                    break;
                case 4:
                    message.valign = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDataFormat);
        if (object.format !== undefined && object.format !== null) {
            message.format = String(object.format);
        }
        else {
            message.format = "";
        }
        if (object.nullFormat !== undefined && object.nullFormat !== null) {
            message.nullFormat = String(object.nullFormat);
        }
        else {
            message.nullFormat = "";
        }
        if (object.halign !== undefined && object.halign !== null) {
            message.halign = HorizontalAlignment_1.horizontalAlignmentFromJSON(object.halign);
        }
        else {
            message.halign = 0;
        }
        if (object.valign !== undefined && object.valign !== null) {
            message.valign = VerticalAlignment_1.verticalAlignmentFromJSON(object.valign);
        }
        else {
            message.valign = 0;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDataFormat);
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = "";
        }
        if (object.nullFormat !== undefined && object.nullFormat !== null) {
            message.nullFormat = object.nullFormat;
        }
        else {
            message.nullFormat = "";
        }
        if (object.halign !== undefined && object.halign !== null) {
            message.halign = object.halign;
        }
        else {
            message.halign = 0;
        }
        if (object.valign !== undefined && object.valign !== null) {
            message.valign = object.valign;
        }
        else {
            message.valign = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.format !== undefined && (obj.format = message.format);
        message.nullFormat !== undefined && (obj.nullFormat = message.nullFormat);
        message.halign !== undefined && (obj.halign = HorizontalAlignment_1.horizontalAlignmentToJSON(message.halign));
        message.valign !== undefined && (obj.valign = VerticalAlignment_1.verticalAlignmentToJSON(message.valign));
        return obj;
    }
};
