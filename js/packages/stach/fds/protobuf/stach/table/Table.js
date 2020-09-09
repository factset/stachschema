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
exports.Table = void 0;
/* eslint-disable */
var TableDefinition_1 = require("../../../../fds/protobuf/stach/table/TableDefinition");
var TableData_1 = require("../../../../fds/protobuf/stach/table/TableData");
var minimal_1 = require("protobufjs/minimal");
var baseTable = {};
exports.Table = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        if (message.definition !== undefined && message.definition !== undefined) {
            TableDefinition_1.TableDefinition.encode(message.definition, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined && message.data !== undefined) {
            TableData_1.TableData.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTable);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.definition = TableDefinition_1.TableDefinition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = TableData_1.TableData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTable);
        if (object.definition !== undefined && object.definition !== null) {
            message.definition = TableDefinition_1.TableDefinition.fromJSON(object.definition);
        }
        else {
            message.definition = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = TableData_1.TableData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTable);
        if (object.definition !== undefined && object.definition !== null) {
            message.definition = TableDefinition_1.TableDefinition.fromPartial(object.definition);
        }
        else {
            message.definition = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = TableData_1.TableData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.definition !== undefined && (obj.definition = message.definition ? TableDefinition_1.TableDefinition.toJSON(message.definition) : undefined);
        message.data !== undefined && (obj.data = message.data ? TableData_1.TableData.toJSON(message.data) : undefined);
        return obj;
    }
};
