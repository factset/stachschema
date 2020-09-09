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
exports.ListOfMetadata = void 0;
/* eslint-disable */
var minimal_1 = require("protobufjs/minimal");
var baseListOfMetadata = {
    ids: ""
};
exports.ListOfMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.Writer.create(); }
        for (var _i = 0, _a = message.ids; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseListOfMetadata);
        message.ids = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseListOfMetadata);
        message.ids = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (var _i = 0, _a = object.ids; _i < _a.length; _i++) {
                var e = _a[_i];
                message.ids.push(String(e));
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseListOfMetadata);
        message.ids = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (var _i = 0, _a = object.ids; _i < _a.length; _i++) {
                var e = _a[_i];
                message.ids.push(e);
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(function (e) { return e; });
        }
        else {
            obj.ids = [];
        }
        return obj;
    }
};
