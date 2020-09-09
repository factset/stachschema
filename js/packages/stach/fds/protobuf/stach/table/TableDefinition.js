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
exports.TableDefinition = void 0;
/* eslint-disable */
var ColumnDefinition_1 = require("../../../../fds/protobuf/stach/table/ColumnDefinition");
var minimal_1 = require("protobufjs/minimal");
var baseTableDefinition = {
    headerTableId: ""
};
exports.TableDefinition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.headerTableId);
        for (var _i = 0, _a = message.columns; _i < _a.length; _i++) {
            var v = _a[_i];
            ColumnDefinition_1.ColumnDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTableDefinition);
        message.columns = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.headerTableId = reader.string();
                    break;
                case 2:
                    message.columns.push(ColumnDefinition_1.ColumnDefinition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTableDefinition);
        message.columns = [];
        if (object.headerTableId !== undefined && object.headerTableId !== null) {
            message.headerTableId = String(object.headerTableId);
        }
        else {
            message.headerTableId = "";
        }
        if (object.columns !== undefined && object.columns !== null) {
            for (var _i = 0, _a = object.columns; _i < _a.length; _i++) {
                var e = _a[_i];
                message.columns.push(ColumnDefinition_1.ColumnDefinition.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTableDefinition);
        message.columns = [];
        if (object.headerTableId !== undefined && object.headerTableId !== null) {
            message.headerTableId = object.headerTableId;
        }
        else {
            message.headerTableId = "";
        }
        if (object.columns !== undefined && object.columns !== null) {
            for (var _i = 0, _a = object.columns; _i < _a.length; _i++) {
                var e = _a[_i];
                message.columns.push(ColumnDefinition_1.ColumnDefinition.fromPartial(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.headerTableId !== undefined && (obj.headerTableId = message.headerTableId);
        if (message.columns) {
            obj.columns = message.columns.map(function (e) { return e ? ColumnDefinition_1.ColumnDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.columns = [];
        }
        return obj;
    }
};
