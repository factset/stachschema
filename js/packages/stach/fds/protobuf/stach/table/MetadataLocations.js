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
exports.MetadataLocations_RowsEntry = exports.MetadataLocations_ColumnsEntry = exports.MetadataLocations_CellsRowMap_RowsEntry = exports.MetadataLocations_CellsRowMap = exports.MetadataLocations_CellsColumnMap_ColumnsEntry = exports.MetadataLocations_CellsColumnMap = exports.MetadataLocations = void 0;
/* eslint-disable */
var ListOfMetadata_1 = require("../../../../fds/protobuf/stach/table/ListOfMetadata");
var minimal_1 = require("protobufjs/minimal");
var baseMetadataLocations = {
    table: ""
};
var baseMetadataLocations_CellsColumnMap = {};
var baseMetadataLocations_CellsColumnMap_ColumnsEntry = {
    key: ""
};
var baseMetadataLocations_CellsRowMap = {};
var baseMetadataLocations_CellsRowMap_RowsEntry = {
    key: ""
};
var baseMetadataLocations_ColumnsEntry = {
    key: ""
};
var baseMetadataLocations_RowsEntry = {
    key: ""
};
exports.MetadataLocations = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        for (var _i = 0, _a = message.table; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        Object.entries(message.columns).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.MetadataLocations_ColumnsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        Object.entries(message.rows).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.MetadataLocations_RowsEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.cells !== undefined && message.cells !== undefined) {
            exports.MetadataLocations_CellsColumnMap.encode(message.cells, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations);
        message.table = [];
        message.columns = {};
        message.rows = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.table.push(reader.string());
                    break;
                case 2:
                    var entry2 = exports.MetadataLocations_ColumnsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.columns[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    var entry3 = exports.MetadataLocations_RowsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.rows[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.cells = exports.MetadataLocations_CellsColumnMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataLocations);
        message.table = [];
        message.columns = {};
        message.rows = {};
        if (object.table !== undefined && object.table !== null) {
            for (var _i = 0, _a = object.table; _i < _a.length; _i++) {
                var e = _a[_i];
                message.table.push(String(e));
            }
        }
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.columns[key] = ListOfMetadata_1.ListOfMetadata.fromJSON(value);
            });
        }
        if (object.rows !== undefined && object.rows !== null) {
            Object.entries(object.rows).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.rows[key] = ListOfMetadata_1.ListOfMetadata.fromJSON(value);
            });
        }
        if (object.cells !== undefined && object.cells !== null) {
            message.cells = exports.MetadataLocations_CellsColumnMap.fromJSON(object.cells);
        }
        else {
            message.cells = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations);
        message.table = [];
        message.columns = {};
        message.rows = {};
        if (object.table !== undefined && object.table !== null) {
            for (var _i = 0, _a = object.table; _i < _a.length; _i++) {
                var e = _a[_i];
                message.table.push(e);
            }
        }
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.columns[key] = ListOfMetadata_1.ListOfMetadata.fromPartial(value);
                }
            });
        }
        if (object.rows !== undefined && object.rows !== null) {
            Object.entries(object.rows).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.rows[key] = ListOfMetadata_1.ListOfMetadata.fromPartial(value);
                }
            });
        }
        if (object.cells !== undefined && object.cells !== null) {
            message.cells = exports.MetadataLocations_CellsColumnMap.fromPartial(object.cells);
        }
        else {
            message.cells = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.table) {
            obj.table = message.table.map(function (e) { return e; });
        }
        else {
            obj.table = [];
        }
        obj.columns = {};
        if (message.columns) {
            Object.entries(message.columns).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.columns[k] = ListOfMetadata_1.ListOfMetadata.toJSON(v);
            });
        }
        obj.rows = {};
        if (message.rows) {
            Object.entries(message.rows).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.rows[k] = ListOfMetadata_1.ListOfMetadata.toJSON(v);
            });
        }
        message.cells !== undefined && (obj.cells = message.cells ? exports.MetadataLocations_CellsColumnMap.toJSON(message.cells) : undefined);
        return obj;
    }
};
exports.MetadataLocations_CellsColumnMap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        Object.entries(message.columns).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.MetadataLocations_CellsColumnMap_ColumnsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_CellsColumnMap);
        message.columns = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.MetadataLocations_CellsColumnMap_ColumnsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.columns[entry1.key] = entry1.value;
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
        var message = __assign({}, baseMetadataLocations_CellsColumnMap);
        message.columns = {};
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.columns[key] = exports.MetadataLocations_CellsRowMap.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsColumnMap);
        message.columns = {};
        if (object.columns !== undefined && object.columns !== null) {
            Object.entries(object.columns).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.columns[key] = exports.MetadataLocations_CellsRowMap.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.columns = {};
        if (message.columns) {
            Object.entries(message.columns).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.columns[k] = exports.MetadataLocations_CellsRowMap.toJSON(v);
            });
        }
        return obj;
    }
};
exports.MetadataLocations_CellsColumnMap_ColumnsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            exports.MetadataLocations_CellsRowMap.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_CellsColumnMap_ColumnsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.MetadataLocations_CellsRowMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsColumnMap_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.MetadataLocations_CellsRowMap.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsColumnMap_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.MetadataLocations_CellsRowMap.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.MetadataLocations_CellsRowMap.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.MetadataLocations_CellsRowMap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        Object.entries(message.rows).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.MetadataLocations_CellsRowMap_RowsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_CellsRowMap);
        message.rows = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.MetadataLocations_CellsRowMap_RowsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.rows[entry1.key] = entry1.value;
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
        var message = __assign({}, baseMetadataLocations_CellsRowMap);
        message.rows = {};
        if (object.rows !== undefined && object.rows !== null) {
            Object.entries(object.rows).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.rows[key] = ListOfMetadata_1.ListOfMetadata.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsRowMap);
        message.rows = {};
        if (object.rows !== undefined && object.rows !== null) {
            Object.entries(object.rows).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.rows[key] = ListOfMetadata_1.ListOfMetadata.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.rows = {};
        if (message.rows) {
            Object.entries(message.rows).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.rows[k] = ListOfMetadata_1.ListOfMetadata.toJSON(v);
            });
        }
        return obj;
    }
};
exports.MetadataLocations_CellsRowMap_RowsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            ListOfMetadata_1.ListOfMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_CellsRowMap_RowsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ListOfMetadata_1.ListOfMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsRowMap_RowsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_CellsRowMap_RowsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? ListOfMetadata_1.ListOfMetadata.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.MetadataLocations_ColumnsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            ListOfMetadata_1.ListOfMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_ColumnsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ListOfMetadata_1.ListOfMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataLocations_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_ColumnsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? ListOfMetadata_1.ListOfMetadata.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.MetadataLocations_RowsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            ListOfMetadata_1.ListOfMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadataLocations_RowsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ListOfMetadata_1.ListOfMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMetadataLocations_RowsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadataLocations_RowsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = ListOfMetadata_1.ListOfMetadata.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? ListOfMetadata_1.ListOfMetadata.toJSON(message.value) : undefined);
        return obj;
    }
};
