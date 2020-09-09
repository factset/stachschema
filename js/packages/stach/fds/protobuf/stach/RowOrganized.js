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
exports.RowOrganizedPackage_MapOfMetadata_ItemsEntry = exports.RowOrganizedPackage_MapOfMetadata = exports.RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry = exports.RowOrganizedPackage_HeaderCellDetail = exports.RowOrganizedPackage_CellDetail_CellMetadataEntry = exports.RowOrganizedPackage_CellDetail = exports.RowOrganizedPackage_Row_RowMetadataEntry = exports.RowOrganizedPackage_Row_HeaderCellDetailsEntry = exports.RowOrganizedPackage_Row_CellDetailsEntry = exports.RowOrganizedPackage_Row = exports.RowOrganizedPackage_TableData_ColumnMetadataEntry = exports.RowOrganizedPackage_TableData_TableMetadataEntry = exports.RowOrganizedPackage_TableData = exports.RowOrganizedPackage_TableDefinition = exports.RowOrganizedPackage_Table = exports.RowOrganizedPackage_TablesEntry = exports.RowOrganizedPackage = exports.rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON = exports.rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON = exports.RowOrganizedPackage_HeaderCellDetail_TableSource = exports.rowOrganizedPackage_Row_RowTypeToJSON = exports.rowOrganizedPackage_Row_RowTypeFromJSON = exports.RowOrganizedPackage_Row_RowType = void 0;
/* eslint-disable */
var ColumnDefinition_1 = require("../../../fds/protobuf/stach/table/ColumnDefinition");
var MetadataItem_1 = require("../../../fds/protobuf/stach/table/MetadataItem");
var struct_1 = require("../../../google/protobuf/struct");
var CellDefinition_1 = require("../../../fds/protobuf/stach/table/CellDefinition");
var minimal_1 = require("protobufjs/minimal");
var baseRowOrganizedPackage = {
    version: ""
};
var baseRowOrganizedPackage_TablesEntry = {
    key: ""
};
var baseRowOrganizedPackage_Table = {};
var baseRowOrganizedPackage_TableDefinition = {};
var baseRowOrganizedPackage_TableData = {};
var baseRowOrganizedPackage_TableData_TableMetadataEntry = {
    key: ""
};
var baseRowOrganizedPackage_TableData_ColumnMetadataEntry = {
    key: ""
};
var baseRowOrganizedPackage_Row = {
    id: "",
    rowType: 0
};
var baseRowOrganizedPackage_Row_CellDetailsEntry = {
    key: ""
};
var baseRowOrganizedPackage_Row_HeaderCellDetailsEntry = {
    key: ""
};
var baseRowOrganizedPackage_Row_RowMetadataEntry = {
    key: ""
};
var baseRowOrganizedPackage_CellDetail = {
    groupLevel: 0
};
var baseRowOrganizedPackage_CellDetail_CellMetadataEntry = {
    key: ""
};
var baseRowOrganizedPackage_HeaderCellDetail = {
    colspan: 0,
    rowspan: 0,
    source: 0,
    columnIndex: 0
};
var baseRowOrganizedPackage_HeaderCellDetail_CellMetadataEntry = {
    key: ""
};
var baseRowOrganizedPackage_MapOfMetadata = {};
var baseRowOrganizedPackage_MapOfMetadata_ItemsEntry = {
    key: ""
};
/**  A type of row
 */
var RowOrganizedPackage_Row_RowType;
(function (RowOrganizedPackage_Row_RowType) {
    /** Body -  A body row
     */
    RowOrganizedPackage_Row_RowType[RowOrganizedPackage_Row_RowType["Body"] = 0] = "Body";
    /** Header -  A header row
     */
    RowOrganizedPackage_Row_RowType[RowOrganizedPackage_Row_RowType["Header"] = 1] = "Header";
    RowOrganizedPackage_Row_RowType[RowOrganizedPackage_Row_RowType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RowOrganizedPackage_Row_RowType = exports.RowOrganizedPackage_Row_RowType || (exports.RowOrganizedPackage_Row_RowType = {}));
function rowOrganizedPackage_Row_RowTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "Body":
            return RowOrganizedPackage_Row_RowType.Body;
        case 1:
        case "Header":
            return RowOrganizedPackage_Row_RowType.Header;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RowOrganizedPackage_Row_RowType.UNRECOGNIZED;
    }
}
exports.rowOrganizedPackage_Row_RowTypeFromJSON = rowOrganizedPackage_Row_RowTypeFromJSON;
function rowOrganizedPackage_Row_RowTypeToJSON(object) {
    switch (object) {
        case RowOrganizedPackage_Row_RowType.Body:
            return "Body";
        case RowOrganizedPackage_Row_RowType.Header:
            return "Header";
        default:
            return "UNKNOWN";
    }
}
exports.rowOrganizedPackage_Row_RowTypeToJSON = rowOrganizedPackage_Row_RowTypeToJSON;
/**  A table where a row is sourced from
 */
var RowOrganizedPackage_HeaderCellDetail_TableSource;
(function (RowOrganizedPackage_HeaderCellDetail_TableSource) {
    RowOrganizedPackage_HeaderCellDetail_TableSource[RowOrganizedPackage_HeaderCellDetail_TableSource["UNKNOWN"] = 0] = "UNKNOWN";
    RowOrganizedPackage_HeaderCellDetail_TableSource[RowOrganizedPackage_HeaderCellDetail_TableSource["NONE"] = 1] = "NONE";
    RowOrganizedPackage_HeaderCellDetail_TableSource[RowOrganizedPackage_HeaderCellDetail_TableSource["PRIMARY"] = 2] = "PRIMARY";
    RowOrganizedPackage_HeaderCellDetail_TableSource[RowOrganizedPackage_HeaderCellDetail_TableSource["HEADERS"] = 3] = "HEADERS";
    RowOrganizedPackage_HeaderCellDetail_TableSource[RowOrganizedPackage_HeaderCellDetail_TableSource["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RowOrganizedPackage_HeaderCellDetail_TableSource = exports.RowOrganizedPackage_HeaderCellDetail_TableSource || (exports.RowOrganizedPackage_HeaderCellDetail_TableSource = {}));
function rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return RowOrganizedPackage_HeaderCellDetail_TableSource.UNKNOWN;
        case 1:
        case "NONE":
            return RowOrganizedPackage_HeaderCellDetail_TableSource.NONE;
        case 2:
        case "PRIMARY":
            return RowOrganizedPackage_HeaderCellDetail_TableSource.PRIMARY;
        case 3:
        case "HEADERS":
            return RowOrganizedPackage_HeaderCellDetail_TableSource.HEADERS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RowOrganizedPackage_HeaderCellDetail_TableSource.UNRECOGNIZED;
    }
}
exports.rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON = rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON;
function rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON(object) {
    switch (object) {
        case RowOrganizedPackage_HeaderCellDetail_TableSource.UNKNOWN:
            return "UNKNOWN";
        case RowOrganizedPackage_HeaderCellDetail_TableSource.NONE:
            return "NONE";
        case RowOrganizedPackage_HeaderCellDetail_TableSource.PRIMARY:
            return "PRIMARY";
        case RowOrganizedPackage_HeaderCellDetail_TableSource.HEADERS:
            return "HEADERS";
        default:
            return "UNKNOWN";
    }
}
exports.rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON = rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON;
exports.RowOrganizedPackage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.version);
        Object.entries(message.tables).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_TablesEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage);
        message.tables = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    var entry2 = exports.RowOrganizedPackage_TablesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.tables[entry2.key] = entry2.value;
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
        var message = __assign({}, baseRowOrganizedPackage);
        message.tables = {};
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.tables !== undefined && object.tables !== null) {
            Object.entries(object.tables).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.tables[key] = exports.RowOrganizedPackage_Table.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage);
        message.tables = {};
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.tables !== undefined && object.tables !== null) {
            Object.entries(object.tables).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.tables[key] = exports.RowOrganizedPackage_Table.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        obj.tables = {};
        if (message.tables) {
            Object.entries(message.tables).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.tables[k] = exports.RowOrganizedPackage_Table.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_TablesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            exports.RowOrganizedPackage_Table.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_TablesEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.RowOrganizedPackage_Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TablesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_Table.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TablesEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_Table.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.RowOrganizedPackage_Table.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_Table = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        if (message.definition !== undefined && message.definition !== undefined) {
            exports.RowOrganizedPackage_TableDefinition.encode(message.definition, writer.uint32(10).fork()).ldelim();
        }
        if (message.headersDefinition !== undefined && message.headersDefinition !== undefined) {
            exports.RowOrganizedPackage_TableDefinition.encode(message.headersDefinition, writer.uint32(18).fork()).ldelim();
        }
        if (message.data !== undefined && message.data !== undefined) {
            exports.RowOrganizedPackage_TableData.encode(message.data, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_Table);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.definition = exports.RowOrganizedPackage_TableDefinition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.headersDefinition = exports.RowOrganizedPackage_TableDefinition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.data = exports.RowOrganizedPackage_TableData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Table);
        if (object.definition !== undefined && object.definition !== null) {
            message.definition = exports.RowOrganizedPackage_TableDefinition.fromJSON(object.definition);
        }
        else {
            message.definition = undefined;
        }
        if (object.headersDefinition !== undefined && object.headersDefinition !== null) {
            message.headersDefinition = exports.RowOrganizedPackage_TableDefinition.fromJSON(object.headersDefinition);
        }
        else {
            message.headersDefinition = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = exports.RowOrganizedPackage_TableData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Table);
        if (object.definition !== undefined && object.definition !== null) {
            message.definition = exports.RowOrganizedPackage_TableDefinition.fromPartial(object.definition);
        }
        else {
            message.definition = undefined;
        }
        if (object.headersDefinition !== undefined && object.headersDefinition !== null) {
            message.headersDefinition = exports.RowOrganizedPackage_TableDefinition.fromPartial(object.headersDefinition);
        }
        else {
            message.headersDefinition = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = exports.RowOrganizedPackage_TableData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.definition !== undefined && (obj.definition = message.definition ? exports.RowOrganizedPackage_TableDefinition.toJSON(message.definition) : undefined);
        message.headersDefinition !== undefined && (obj.headersDefinition = message.headersDefinition ? exports.RowOrganizedPackage_TableDefinition.toJSON(message.headersDefinition) : undefined);
        message.data !== undefined && (obj.data = message.data ? exports.RowOrganizedPackage_TableData.toJSON(message.data) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_TableDefinition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        for (var _i = 0, _a = message.columns; _i < _a.length; _i++) {
            var v = _a[_i];
            ColumnDefinition_1.ColumnDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_TableDefinition);
        message.columns = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = __assign({}, baseRowOrganizedPackage_TableDefinition);
        message.columns = [];
        if (object.columns !== undefined && object.columns !== null) {
            for (var _i = 0, _a = object.columns; _i < _a.length; _i++) {
                var e = _a[_i];
                message.columns.push(ColumnDefinition_1.ColumnDefinition.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableDefinition);
        message.columns = [];
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
        if (message.columns) {
            obj.columns = message.columns.map(function (e) { return e ? ColumnDefinition_1.ColumnDefinition.toJSON(e) : undefined; });
        }
        else {
            obj.columns = [];
        }
        return obj;
    }
};
exports.RowOrganizedPackage_TableData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        for (var _i = 0, _a = message.rows; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RowOrganizedPackage_Row.encode(v, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.tableMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_TableData_TableMetadataEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        Object.entries(message.columnMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_TableData_ColumnMetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_TableData);
        message.rows = [];
        message.tableMetadata = {};
        message.columnMetadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rows.push(exports.RowOrganizedPackage_Row.decode(reader, reader.uint32()));
                    break;
                case 2:
                    var entry2 = exports.RowOrganizedPackage_TableData_TableMetadataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.tableMetadata[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    var entry3 = exports.RowOrganizedPackage_TableData_ColumnMetadataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.columnMetadata[entry3.key] = entry3.value;
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
        var message = __assign({}, baseRowOrganizedPackage_TableData);
        message.rows = [];
        message.tableMetadata = {};
        message.columnMetadata = {};
        if (object.rows !== undefined && object.rows !== null) {
            for (var _i = 0, _a = object.rows; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rows.push(exports.RowOrganizedPackage_Row.fromJSON(e));
            }
        }
        if (object.tableMetadata !== undefined && object.tableMetadata !== null) {
            Object.entries(object.tableMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.tableMetadata[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        if (object.columnMetadata !== undefined && object.columnMetadata !== null) {
            Object.entries(object.columnMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.columnMetadata[key] = exports.RowOrganizedPackage_MapOfMetadata.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableData);
        message.rows = [];
        message.tableMetadata = {};
        message.columnMetadata = {};
        if (object.rows !== undefined && object.rows !== null) {
            for (var _i = 0, _a = object.rows; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rows.push(exports.RowOrganizedPackage_Row.fromPartial(e));
            }
        }
        if (object.tableMetadata !== undefined && object.tableMetadata !== null) {
            Object.entries(object.tableMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.tableMetadata[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        if (object.columnMetadata !== undefined && object.columnMetadata !== null) {
            Object.entries(object.columnMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.columnMetadata[key] = exports.RowOrganizedPackage_MapOfMetadata.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rows) {
            obj.rows = message.rows.map(function (e) { return e ? exports.RowOrganizedPackage_Row.toJSON(e) : undefined; });
        }
        else {
            obj.rows = [];
        }
        obj.tableMetadata = {};
        if (message.tableMetadata) {
            Object.entries(message.tableMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.tableMetadata[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        obj.columnMetadata = {};
        if (message.columnMetadata) {
            Object.entries(message.columnMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.columnMetadata[k] = exports.RowOrganizedPackage_MapOfMetadata.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_TableData_TableMetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_TableData_TableMetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableData_TableMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableData_TableMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_TableData_ColumnMetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            exports.RowOrganizedPackage_MapOfMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_TableData_ColumnMetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.RowOrganizedPackage_MapOfMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableData_ColumnMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_MapOfMetadata.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_TableData_ColumnMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_MapOfMetadata.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.RowOrganizedPackage_MapOfMetadata.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_Row = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.id);
        writer.uint32(16).int32(message.rowType);
        if (message.cells !== undefined) {
            struct_1.ListValue.encode(message.cells, writer.uint32(26).fork()).ldelim();
        }
        if (message.values !== undefined) {
            struct_1.Struct.encode(message.values, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.cellDetails).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_Row_CellDetailsEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        Object.entries(message.headerCellDetails).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_Row_HeaderCellDetailsEntry.encode({ key: key, value: value }, writer.uint32(50).fork()).ldelim();
        });
        Object.entries(message.rowMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_Row_RowMetadataEntry.encode({ key: key, value: value }, writer.uint32(58).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_Row);
        message.cellDetails = {};
        message.headerCellDetails = {};
        message.rowMetadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.rowType = reader.int32();
                    break;
                case 3:
                    message.cells = struct_1.ListValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.values = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                case 5:
                    var entry5 = exports.RowOrganizedPackage_Row_CellDetailsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.cellDetails[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    var entry6 = exports.RowOrganizedPackage_Row_HeaderCellDetailsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.headerCellDetails[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    var entry7 = exports.RowOrganizedPackage_Row_RowMetadataEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.rowMetadata[entry7.key] = entry7.value;
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
        var message = __assign({}, baseRowOrganizedPackage_Row);
        message.cellDetails = {};
        message.headerCellDetails = {};
        message.rowMetadata = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.rowType !== undefined && object.rowType !== null) {
            message.rowType = rowOrganizedPackage_Row_RowTypeFromJSON(object.rowType);
        }
        else {
            message.rowType = 0;
        }
        if (object.cells !== undefined && object.cells !== null) {
            message.cells = struct_1.ListValue.fromJSON(object.cells);
        }
        else {
            message.cells = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = struct_1.Struct.fromJSON(object.values);
        }
        else {
            message.values = undefined;
        }
        if (object.cellDetails !== undefined && object.cellDetails !== null) {
            Object.entries(object.cellDetails).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.cellDetails[key] = exports.RowOrganizedPackage_CellDetail.fromJSON(value);
            });
        }
        if (object.headerCellDetails !== undefined && object.headerCellDetails !== null) {
            Object.entries(object.headerCellDetails).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.headerCellDetails[key] = exports.RowOrganizedPackage_HeaderCellDetail.fromJSON(value);
            });
        }
        if (object.rowMetadata !== undefined && object.rowMetadata !== null) {
            Object.entries(object.rowMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.rowMetadata[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row);
        message.cellDetails = {};
        message.headerCellDetails = {};
        message.rowMetadata = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.rowType !== undefined && object.rowType !== null) {
            message.rowType = object.rowType;
        }
        else {
            message.rowType = 0;
        }
        if (object.cells !== undefined && object.cells !== null) {
            message.cells = struct_1.ListValue.fromPartial(object.cells);
        }
        else {
            message.cells = undefined;
        }
        if (object.values !== undefined && object.values !== null) {
            message.values = struct_1.Struct.fromPartial(object.values);
        }
        else {
            message.values = undefined;
        }
        if (object.cellDetails !== undefined && object.cellDetails !== null) {
            Object.entries(object.cellDetails).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.cellDetails[key] = exports.RowOrganizedPackage_CellDetail.fromPartial(value);
                }
            });
        }
        if (object.headerCellDetails !== undefined && object.headerCellDetails !== null) {
            Object.entries(object.headerCellDetails).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.headerCellDetails[key] = exports.RowOrganizedPackage_HeaderCellDetail.fromPartial(value);
                }
            });
        }
        if (object.rowMetadata !== undefined && object.rowMetadata !== null) {
            Object.entries(object.rowMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.rowMetadata[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.rowType !== undefined && (obj.rowType = rowOrganizedPackage_Row_RowTypeToJSON(message.rowType));
        message.cells !== undefined && (obj.cells = message.cells ? struct_1.ListValue.toJSON(message.cells) : undefined);
        message.values !== undefined && (obj.values = message.values ? struct_1.Struct.toJSON(message.values) : undefined);
        obj.cellDetails = {};
        if (message.cellDetails) {
            Object.entries(message.cellDetails).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.cellDetails[k] = exports.RowOrganizedPackage_CellDetail.toJSON(v);
            });
        }
        obj.headerCellDetails = {};
        if (message.headerCellDetails) {
            Object.entries(message.headerCellDetails).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.headerCellDetails[k] = exports.RowOrganizedPackage_HeaderCellDetail.toJSON(v);
            });
        }
        obj.rowMetadata = {};
        if (message.rowMetadata) {
            Object.entries(message.rowMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.rowMetadata[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_Row_CellDetailsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            exports.RowOrganizedPackage_CellDetail.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_Row_CellDetailsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.RowOrganizedPackage_CellDetail.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_CellDetailsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_CellDetail.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_CellDetailsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_CellDetail.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.RowOrganizedPackage_CellDetail.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_Row_HeaderCellDetailsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            exports.RowOrganizedPackage_HeaderCellDetail.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_Row_HeaderCellDetailsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.RowOrganizedPackage_HeaderCellDetail.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_HeaderCellDetailsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_HeaderCellDetail.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_HeaderCellDetailsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.RowOrganizedPackage_HeaderCellDetail.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.RowOrganizedPackage_HeaderCellDetail.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_Row_RowMetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_Row_RowMetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_RowMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_Row_RowMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_CellDetail = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(8).int32(message.groupLevel);
        if (message.cellDefinition !== undefined && message.cellDefinition !== undefined) {
            CellDefinition_1.CellDefinition.encode(message.cellDefinition, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.cellMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_CellDetail_CellMetadataEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_CellDetail);
        message.cellMetadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupLevel = reader.int32();
                    break;
                case 2:
                    message.cellDefinition = CellDefinition_1.CellDefinition.decode(reader, reader.uint32());
                    break;
                case 3:
                    var entry3 = exports.RowOrganizedPackage_CellDetail_CellMetadataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.cellMetadata[entry3.key] = entry3.value;
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
        var message = __assign({}, baseRowOrganizedPackage_CellDetail);
        message.cellMetadata = {};
        if (object.groupLevel !== undefined && object.groupLevel !== null) {
            message.groupLevel = Number(object.groupLevel);
        }
        else {
            message.groupLevel = 0;
        }
        if (object.cellDefinition !== undefined && object.cellDefinition !== null) {
            message.cellDefinition = CellDefinition_1.CellDefinition.fromJSON(object.cellDefinition);
        }
        else {
            message.cellDefinition = undefined;
        }
        if (object.cellMetadata !== undefined && object.cellMetadata !== null) {
            Object.entries(object.cellMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.cellMetadata[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_CellDetail);
        message.cellMetadata = {};
        if (object.groupLevel !== undefined && object.groupLevel !== null) {
            message.groupLevel = object.groupLevel;
        }
        else {
            message.groupLevel = 0;
        }
        if (object.cellDefinition !== undefined && object.cellDefinition !== null) {
            message.cellDefinition = CellDefinition_1.CellDefinition.fromPartial(object.cellDefinition);
        }
        else {
            message.cellDefinition = undefined;
        }
        if (object.cellMetadata !== undefined && object.cellMetadata !== null) {
            Object.entries(object.cellMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.cellMetadata[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.groupLevel !== undefined && (obj.groupLevel = message.groupLevel);
        message.cellDefinition !== undefined && (obj.cellDefinition = message.cellDefinition ? CellDefinition_1.CellDefinition.toJSON(message.cellDefinition) : undefined);
        obj.cellMetadata = {};
        if (message.cellMetadata) {
            Object.entries(message.cellMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.cellMetadata[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_CellDetail_CellMetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_CellDetail_CellMetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_CellDetail_CellMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_CellDetail_CellMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_HeaderCellDetail = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(8).int32(message.colspan);
        writer.uint32(16).int32(message.rowspan);
        writer.uint32(24).int32(message.source);
        writer.uint32(32).int32(message.columnIndex);
        if (message.cellDefinition !== undefined && message.cellDefinition !== undefined) {
            CellDefinition_1.CellDefinition.encode(message.cellDefinition, writer.uint32(42).fork()).ldelim();
        }
        Object.entries(message.cellMetadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry.encode({ key: key, value: value }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail);
        message.cellMetadata = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.colspan = reader.int32();
                    break;
                case 2:
                    message.rowspan = reader.int32();
                    break;
                case 3:
                    message.source = reader.int32();
                    break;
                case 4:
                    message.columnIndex = reader.int32();
                    break;
                case 5:
                    message.cellDefinition = CellDefinition_1.CellDefinition.decode(reader, reader.uint32());
                    break;
                case 6:
                    var entry6 = exports.RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.cellMetadata[entry6.key] = entry6.value;
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
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail);
        message.cellMetadata = {};
        if (object.colspan !== undefined && object.colspan !== null) {
            message.colspan = Number(object.colspan);
        }
        else {
            message.colspan = 0;
        }
        if (object.rowspan !== undefined && object.rowspan !== null) {
            message.rowspan = Number(object.rowspan);
        }
        else {
            message.rowspan = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON(object.source);
        }
        else {
            message.source = 0;
        }
        if (object.columnIndex !== undefined && object.columnIndex !== null) {
            message.columnIndex = Number(object.columnIndex);
        }
        else {
            message.columnIndex = 0;
        }
        if (object.cellDefinition !== undefined && object.cellDefinition !== null) {
            message.cellDefinition = CellDefinition_1.CellDefinition.fromJSON(object.cellDefinition);
        }
        else {
            message.cellDefinition = undefined;
        }
        if (object.cellMetadata !== undefined && object.cellMetadata !== null) {
            Object.entries(object.cellMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.cellMetadata[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail);
        message.cellMetadata = {};
        if (object.colspan !== undefined && object.colspan !== null) {
            message.colspan = object.colspan;
        }
        else {
            message.colspan = 0;
        }
        if (object.rowspan !== undefined && object.rowspan !== null) {
            message.rowspan = object.rowspan;
        }
        else {
            message.rowspan = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = 0;
        }
        if (object.columnIndex !== undefined && object.columnIndex !== null) {
            message.columnIndex = object.columnIndex;
        }
        else {
            message.columnIndex = 0;
        }
        if (object.cellDefinition !== undefined && object.cellDefinition !== null) {
            message.cellDefinition = CellDefinition_1.CellDefinition.fromPartial(object.cellDefinition);
        }
        else {
            message.cellDefinition = undefined;
        }
        if (object.cellMetadata !== undefined && object.cellMetadata !== null) {
            Object.entries(object.cellMetadata).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.cellMetadata[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.colspan !== undefined && (obj.colspan = message.colspan);
        message.rowspan !== undefined && (obj.rowspan = message.rowspan);
        message.source !== undefined && (obj.source = rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON(message.source));
        message.columnIndex !== undefined && (obj.columnIndex = message.columnIndex);
        message.cellDefinition !== undefined && (obj.cellDefinition = message.cellDefinition ? CellDefinition_1.CellDefinition.toJSON(message.cellDefinition) : undefined);
        obj.cellMetadata = {};
        if (message.cellMetadata) {
            Object.entries(message.cellMetadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.cellMetadata[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail_CellMetadataEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail_CellMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_HeaderCellDetail_CellMetadataEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
exports.RowOrganizedPackage_MapOfMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        Object.entries(message.items).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.RowOrganizedPackage_MapOfMetadata_ItemsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata);
        message.items = {};
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.RowOrganizedPackage_MapOfMetadata_ItemsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.items[entry1.key] = entry1.value;
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
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata);
        message.items = {};
        if (object.items !== undefined && object.items !== null) {
            Object.entries(object.items).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                message.items[key] = MetadataItem_1.MetadataItem.fromJSON(value);
            });
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata);
        message.items = {};
        if (object.items !== undefined && object.items !== null) {
            Object.entries(object.items).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value !== undefined) {
                    message.items[key] = MetadataItem_1.MetadataItem.fromPartial(value);
                }
            });
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        obj.items = {};
        if (message.items) {
            Object.entries(message.items).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.items[k] = MetadataItem_1.MetadataItem.toJSON(v);
            });
        }
        return obj;
    }
};
exports.RowOrganizedPackage_MapOfMetadata_ItemsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.key);
        if (message.value !== undefined && message.value !== undefined) {
            MetadataItem_1.MetadataItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata_ItemsEntry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = MetadataItem_1.MetadataItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata_ItemsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRowOrganizedPackage_MapOfMetadata_ItemsEntry);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = MetadataItem_1.MetadataItem.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? MetadataItem_1.MetadataItem.toJSON(message.value) : undefined);
        return obj;
    }
};
