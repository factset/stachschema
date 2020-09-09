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
exports.Reference = void 0;
/* eslint-disable */
var ReferenceType_1 = require("../../../../fds/protobuf/stach/table/ReferenceType");
var minimal_1 = require("protobufjs/minimal");
var baseReference = {
    referenceType: 0,
    tableId: "",
    columnId: "",
    rowId: ""
};
exports.Reference = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(8).int32(message.referenceType);
        writer.uint32(18).string(message.tableId);
        writer.uint32(26).string(message.columnId);
        writer.uint32(34).string(message.rowId);
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseReference);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.referenceType = reader.int32();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.columnId = reader.string();
                    break;
                case 4:
                    message.rowId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseReference);
        if (object.referenceType !== undefined && object.referenceType !== null) {
            message.referenceType = ReferenceType_1.referenceTypeFromJSON(object.referenceType);
        }
        else {
            message.referenceType = 0;
        }
        if (object.tableId !== undefined && object.tableId !== null) {
            message.tableId = String(object.tableId);
        }
        else {
            message.tableId = "";
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = String(object.columnId);
        }
        else {
            message.columnId = "";
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = String(object.rowId);
        }
        else {
            message.rowId = "";
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseReference);
        if (object.referenceType !== undefined && object.referenceType !== null) {
            message.referenceType = object.referenceType;
        }
        else {
            message.referenceType = 0;
        }
        if (object.tableId !== undefined && object.tableId !== null) {
            message.tableId = object.tableId;
        }
        else {
            message.tableId = "";
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = object.columnId;
        }
        else {
            message.columnId = "";
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = object.rowId;
        }
        else {
            message.rowId = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.referenceType !== undefined && (obj.referenceType = ReferenceType_1.referenceTypeToJSON(message.referenceType));
        message.tableId !== undefined && (obj.tableId = message.tableId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        return obj;
    }
};
