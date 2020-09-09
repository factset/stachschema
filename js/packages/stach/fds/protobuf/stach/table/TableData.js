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
exports.TableData_ColumnsEntry = exports.TableData = void 0;
/* eslint-disable */
var RowDefinition_1 = require("../../../../fds/protobuf/stach/table/RowDefinition");
var ColumnData_1 = require("../../../../fds/protobuf/stach/table/ColumnData");
var MetadataCollection_1 = require("../../../../fds/protobuf/stach/table/MetadataCollection");
var minimal_1 = require("protobufjs/minimal");
var baseTableData = {};
var baseTableData_ColumnsEntry = {
    key: ""
};
exports.TableData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        for (var _i = 0, _a = message.rows; _i < _a.length; _i++) {
            var v = _a[_i];
            RowDefinition_1.RowDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.columns).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.TableData_ColumnsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.metadata !== undefined && message.metadata !== undefined) {
            MetadataCollection_1.MetadataCollection.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTableData);
        message.rows = [];
        message.columns = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rows.push(RowDefinition_1.RowDefinition.decode(reader, reader.uint32()));
                    break;
                case 2:
                    var entry2 = exports.TableData_ColumnsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.columns[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.metadata = MetadataCollection_1.MetadataCollection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTableData);
        message.rows = [];
        message.columns = {};
        if (object.rows !== undefined && object.rows !== null) {
            for (var _i = 0, _a = object.rows; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rows.push(RowDefinition_1.RowDefinition.fromJSON(e));
            }
        }
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.columns[key] = ColumnData_1.ColumnData.fromJSON(value);
            });
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = MetadataCollection_1.MetadataCollection.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTableData);
        message.rows = [];
        message.columns = {};
        if (object.rows !== undefined && object.rows !== null) {
            for (var _i = 0, _a = object.rows; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rows.push(RowDefinition_1.RowDefinition.fromPartial(e));
            }
        }
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.columns[key] = ColumnData_1.ColumnData.fromPartial(value);
                }
            });
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = MetadataCollection_1.MetadataCollection.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rows) {
            obj.rows = message.rows.map(function (e) { return e ? RowDefinition_1.RowDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.rows = [];
        }
        obj.columns = {};
        if (message.columns) {
            Object.entries(message.columns).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.columns[k] = ColumnData_1.ColumnData.toJSON(v);
            });
        }
        message.metadata !== undefined && (obj.metadata = message.metadata ? MetadataCollection_1.MetadataCollection.toJSON(message.metadata) : undefined);
        return obj;
    }
};
exports.TableData_ColumnsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            ColumnData_1.ColumnData.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseTableData_ColumnsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ColumnData_1.ColumnData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseTableData_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ColumnData_1.ColumnData.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseTableData_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ColumnData_1.ColumnData.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? ColumnData_1.ColumnData.toJSON(message.value) : undefined);
        return obj;
    }
};
