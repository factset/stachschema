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
exports.ColumnDefinition = void 0;
/* eslint-disable */
var DataFormat_1 = require("../../../../fds/protobuf/stach/table/DataFormat");
var minimal_1 = require("protobufjs/minimal");
var baseColumnDefinition = {
    id: "",
    name: "",
    description: "",
    type: "",
    isDimension: false,
    isHidden: false,
    nextSiblingId: "",
    parentId: "",
    headerId: ""
};
exports.ColumnDefinition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        writer.uint32(10).string(message.id);
        writer.uint32(18).string(message.name);
        writer.uint32(26).string(message.description);
        writer.uint32(34).string(message.type);
        writer.uint32(40).bool(message.isDimension);
        writer.uint32(48).bool(message.isHidden);
        writer.uint32(58).string(message.nextSiblingId);
        writer.uint32(66).string(message.parentId);
        writer.uint32(74).string(message.headerId);
        if (message.format !== undefined && message.format !== undefined) {
            DataFormat_1.DataFormat.encode(message.format, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseColumnDefinition);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.isDimension = reader.bool();
                    break;
                case 6:
                    message.isHidden = reader.bool();
                    break;
                case 7:
                    message.nextSiblingId = reader.string();
                    break;
                case 8:
                    message.parentId = reader.string();
                    break;
                case 9:
                    message.headerId = reader.string();
                    break;
                case 10:
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
        var message = __assign({}, baseColumnDefinition);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.isDimension !== undefined && object.isDimension !== null) {
            message.isDimension = Boolean(object.isDimension);
        }
        else {
            message.isDimension = false;
        }
        if (object.isHidden !== undefined && object.isHidden !== null) {
            message.isHidden = Boolean(object.isHidden);
        }
        else {
            message.isHidden = false;
        }
        if (object.nextSiblingId !== undefined && object.nextSiblingId !== null) {
            message.nextSiblingId = String(object.nextSiblingId);
        }
        else {
            message.nextSiblingId = "";
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = String(object.parentId);
        }
        else {
            message.parentId = "";
        }
        if (object.headerId !== undefined && object.headerId !== null) {
            message.headerId = String(object.headerId);
        }
        else {
            message.headerId = "";
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
        var message = __assign({}, baseColumnDefinition);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.isDimension !== undefined && object.isDimension !== null) {
            message.isDimension = object.isDimension;
        }
        else {
            message.isDimension = false;
        }
        if (object.isHidden !== undefined && object.isHidden !== null) {
            message.isHidden = object.isHidden;
        }
        else {
            message.isHidden = false;
        }
        if (object.nextSiblingId !== undefined && object.nextSiblingId !== null) {
            message.nextSiblingId = object.nextSiblingId;
        }
        else {
            message.nextSiblingId = "";
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = object.parentId;
        }
        else {
            message.parentId = "";
        }
        if (object.headerId !== undefined && object.headerId !== null) {
            message.headerId = object.headerId;
        }
        else {
            message.headerId = "";
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
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.isDimension !== undefined && (obj.isDimension = message.isDimension);
        message.isHidden !== undefined && (obj.isHidden = message.isHidden);
        message.nextSiblingId !== undefined && (obj.nextSiblingId = message.nextSiblingId);
        message.parentId !== undefined && (obj.parentId = message.parentId);
        message.headerId !== undefined && (obj.headerId = message.headerId);
        message.format !== undefined && (obj.format = message.format ? DataFormat_1.DataFormat.toJSON(message.format) : undefined);
        return obj;
    }
};
