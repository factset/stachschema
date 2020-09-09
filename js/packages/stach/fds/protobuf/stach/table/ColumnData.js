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
exports.ColumnData_RangesEntry = exports.ColumnData = void 0;
/* eslint-disable */
var struct_1 = require("../../../../google/protobuf/struct");
var CellDefinition_1 = require("../../../../fds/protobuf/stach/table/CellDefinition");
var minimal_1 = require("protobufjs/minimal");
var baseColumnData = {};
var baseColumnData_RangesEntry = {
    key: 0,
    value: 0
};
exports.ColumnData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        Object.entries(message.ranges).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.ColumnData_RangesEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        if (message.values !== undefined && message.values !== undefined) {
            struct_1.ListValue.encode(message.values, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.definitions; _i < _a.length; _i++) {
            var v = _a[_i];
            CellDefinition_1.CellDefinition.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseColumnData);
        message.ranges = {};
        message.definitions = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.ColumnData_RangesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.ranges[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.values = struct_1.ListValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.definitions.push(CellDefinition_1.CellDefinition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseColumnData);
        message.ranges = {};
        message.definitions = [];
        if (object.ranges !== undefined && object.ranges !== null) {
            Object.entries(object.ranges).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.ranges[Number(key)] = Number(value);
            });
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = struct_1.ListValue.fromJSON(object.values);
        }
        else {
            message.values = undefined;
        }
        if (object.definitions !== undefined && object.definitions !== null) {
            for (var _i = 0, _a = object.definitions; _i < _a.length; _i++) {
                var e = _a[_i];
                message.definitions.push(CellDefinition_1.CellDefinition.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseColumnData);
        message.ranges = {};
        message.definitions = [];
        if (object.ranges !== undefined && object.ranges !== null) {
            Object.entries(object.ranges).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.ranges[Number(key)] = Number(value);
                }
            });
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = struct_1.ListValue.fromPartial(object.values);
        }
        else {
            message.values = undefined;
        }
        if (object.definitions !== undefined && object.definitions !== null) {
            for (var _i = 0, _a = object.definitions; _i < _a.length; _i++) {
                var e = _a[_i];
                message.definitions.push(CellDefinition_1.CellDefinition.fromPartial(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.ranges = {};
        if (message.ranges) {
            Object.entries(message.ranges).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.ranges[k] = v;
            });
        }
        message.values !== undefined && (obj.values = message.values ? struct_1.ListValue.toJSON(message.values) : undefined);
        if (message.definitions) {
            obj.definitions = message.definitions.map(function (e) { return e ? CellDefinition_1.CellDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.definitions = [];
        }
        return obj;
    }
};
exports.ColumnData_RangesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(8).int32(message.key);
        writer.uint32(16).int32(message.value);
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseColumnData_RangesEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseColumnData_RangesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = Number(object.key);
        }
        else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        else {
            message.value = 0;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseColumnData_RangesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    }
};
