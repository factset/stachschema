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
exports.Package_TablesEntry = exports.Package = void 0;
/* eslint-disable */
var Table_1 = require("../../../fds/protobuf/stach/table/Table");
var minimal_1 = require("protobufjs/minimal");
var basePackage = {
    version: "",
    primaryTableIds: ""
};
var basePackage_TablesEntry = {
    key: ""
};
exports.Package = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.version);
        for (var _i = 0, _a = message.primaryTableIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        Object.entries(message.tables).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Package_TablesEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePackage);
        message.primaryTableIds = [];
        message.tables = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.primaryTableIds.push(reader.string());
                    break;
                case 3:
                    var entry3 = exports.Package_TablesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.tables[entry3.key] = entry3.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePackage);
        message.primaryTableIds = [];
        message.tables = {};
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.primaryTableIds !== undefined && object.primaryTableIds !== null) {
            for (var _i = 0, _a = object.primaryTableIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.primaryTableIds.push(String(e));
            }
        }
        if (object.tables !== undefined && object.tables !== null) {
            Object.entries(object.tables).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.tables[key] = Table_1.Table.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePackage);
        message.primaryTableIds = [];
        message.tables = {};
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.primaryTableIds !== undefined && object.primaryTableIds !== null) {
            for (var _i = 0, _a = object.primaryTableIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.primaryTableIds.push(e);
            }
        }
        if (object.tables !== undefined && object.tables !== null) {
            Object.entries(object.tables).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.tables[key] = Table_1.Table.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        if (message.primaryTableIds) {
            obj.primaryTableIds = message.primaryTableIds.map(function (e) { return e; });
        }
        else {
            obj.primaryTableIds = [];
        }
        obj.tables = {};
        if (message.tables) {
            Object.entries(message.tables).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.tables[k] = Table_1.Table.toJSON(v);
            });
        }
        return obj;
    }
};
exports.Package_TablesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            Table_1.Table.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, basePackage_TablesEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Table_1.Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, basePackage_TablesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Table_1.Table.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, basePackage_TablesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Table_1.Table.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? Table_1.Table.toJSON(message.value) : undefined);
        return obj;
    }
};
