/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.stach || ($protobuf.roots.stach = {});

$root.factset = (function() {

    /**
     * Namespace factset.
     * @exports factset
     * @namespace
     */
    var factset = {};

    factset.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof factset
         * @namespace
         */
        var protobuf = {};

        protobuf.stach = (function() {

            /**
             * Namespace stach.
             * @memberof factset.protobuf
             * @namespace
             */
            var stach = {};

            stach.Package = (function() {

                /**
                 * Properties of a Package.
                 * @memberof factset.protobuf.stach
                 * @interface IPackage
                 * @property {string|null} [version] Package version
                 * @property {Array.<string>|null} [primaryTableIds] Package primaryTableIds
                 * @property {Object.<string,factset.protobuf.stach.table.ITable>|null} [tables] Package tables
                 */

                /**
                 * Constructs a new Package.
                 * @memberof factset.protobuf.stach
                 * @classdesc Represents a Package.
                 * @implements IPackage
                 * @constructor
                 * @param {factset.protobuf.stach.IPackage=} [properties] Properties to set
                 */
                function Package(properties) {
                    this.primaryTableIds = [];
                    this.tables = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Package version.
                 * @member {string} version
                 * @memberof factset.protobuf.stach.Package
                 * @instance
                 */
                Package.prototype.version = "";

                /**
                 * Package primaryTableIds.
                 * @member {Array.<string>} primaryTableIds
                 * @memberof factset.protobuf.stach.Package
                 * @instance
                 */
                Package.prototype.primaryTableIds = $util.emptyArray;

                /**
                 * Package tables.
                 * @member {Object.<string,factset.protobuf.stach.table.ITable>} tables
                 * @memberof factset.protobuf.stach.Package
                 * @instance
                 */
                Package.prototype.tables = $util.emptyObject;

                /**
                 * Creates a new Package instance using the specified properties.
                 * @function create
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {factset.protobuf.stach.IPackage=} [properties] Properties to set
                 * @returns {factset.protobuf.stach.Package} Package instance
                 */
                Package.create = function create(properties) {
                    return new Package(properties);
                };

                /**
                 * Encodes the specified Package message. Does not implicitly {@link factset.protobuf.stach.Package.verify|verify} messages.
                 * @function encode
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {factset.protobuf.stach.IPackage} message Package message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Package.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && message.hasOwnProperty("version"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                    if (message.primaryTableIds != null && message.primaryTableIds.length)
                        for (var i = 0; i < message.primaryTableIds.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.primaryTableIds[i]);
                    if (message.tables != null && message.hasOwnProperty("tables"))
                        for (var keys = Object.keys(message.tables), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.factset.protobuf.stach.table.Table.encode(message.tables[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified Package message, length delimited. Does not implicitly {@link factset.protobuf.stach.Package.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {factset.protobuf.stach.IPackage} message Package message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Package.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Package message from the specified reader or buffer.
                 * @function decode
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {factset.protobuf.stach.Package} Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Package.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.Package(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.version = reader.string();
                            break;
                        case 2:
                            if (!(message.primaryTableIds && message.primaryTableIds.length))
                                message.primaryTableIds = [];
                            message.primaryTableIds.push(reader.string());
                            break;
                        case 3:
                            reader.skip().pos++;
                            if (message.tables === $util.emptyObject)
                                message.tables = {};
                            key = reader.string();
                            reader.pos++;
                            message.tables[key] = $root.factset.protobuf.stach.table.Table.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Package message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {factset.protobuf.stach.Package} Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Package.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Package message.
                 * @function verify
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Package.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.primaryTableIds != null && message.hasOwnProperty("primaryTableIds")) {
                        if (!Array.isArray(message.primaryTableIds))
                            return "primaryTableIds: array expected";
                        for (var i = 0; i < message.primaryTableIds.length; ++i)
                            if (!$util.isString(message.primaryTableIds[i]))
                                return "primaryTableIds: string[] expected";
                    }
                    if (message.tables != null && message.hasOwnProperty("tables")) {
                        if (!$util.isObject(message.tables))
                            return "tables: object expected";
                        var key = Object.keys(message.tables);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.factset.protobuf.stach.table.Table.verify(message.tables[key[i]]);
                            if (error)
                                return "tables." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Package message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {factset.protobuf.stach.Package} Package
                 */
                Package.fromObject = function fromObject(object) {
                    if (object instanceof $root.factset.protobuf.stach.Package)
                        return object;
                    var message = new $root.factset.protobuf.stach.Package();
                    if (object.version != null)
                        message.version = String(object.version);
                    if (object.primaryTableIds) {
                        if (!Array.isArray(object.primaryTableIds))
                            throw TypeError(".factset.protobuf.stach.Package.primaryTableIds: array expected");
                        message.primaryTableIds = [];
                        for (var i = 0; i < object.primaryTableIds.length; ++i)
                            message.primaryTableIds[i] = String(object.primaryTableIds[i]);
                    }
                    if (object.tables) {
                        if (typeof object.tables !== "object")
                            throw TypeError(".factset.protobuf.stach.Package.tables: object expected");
                        message.tables = {};
                        for (var keys = Object.keys(object.tables), i = 0; i < keys.length; ++i) {
                            if (typeof object.tables[keys[i]] !== "object")
                                throw TypeError(".factset.protobuf.stach.Package.tables: object expected");
                            message.tables[keys[i]] = $root.factset.protobuf.stach.table.Table.fromObject(object.tables[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Package message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof factset.protobuf.stach.Package
                 * @static
                 * @param {factset.protobuf.stach.Package} message Package
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Package.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.primaryTableIds = [];
                    if (options.objects || options.defaults)
                        object.tables = {};
                    if (options.defaults)
                        object.version = "";
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.primaryTableIds && message.primaryTableIds.length) {
                        object.primaryTableIds = [];
                        for (var j = 0; j < message.primaryTableIds.length; ++j)
                            object.primaryTableIds[j] = message.primaryTableIds[j];
                    }
                    var keys2;
                    if (message.tables && (keys2 = Object.keys(message.tables)).length) {
                        object.tables = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.tables[keys2[j]] = $root.factset.protobuf.stach.table.Table.toObject(message.tables[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this Package to JSON.
                 * @function toJSON
                 * @memberof factset.protobuf.stach.Package
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Package.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Package;
            })();

            stach.MetadataItem = (function() {

                /**
                 * Properties of a MetadataItem.
                 * @memberof factset.protobuf.stach
                 * @interface IMetadataItem
                 * @property {string|null} [name] MetadataItem name
                 * @property {number|null} [doubleValue] MetadataItem doubleValue
                 * @property {number|null} [floatValue] MetadataItem floatValue
                 * @property {number|null} [int32Value] MetadataItem int32Value
                 * @property {number|Long|null} [int64Value] MetadataItem int64Value
                 * @property {boolean|null} [boolValue] MetadataItem boolValue
                 * @property {string|null} [stringValue] MetadataItem stringValue
                 * @property {google.protobuf.IDuration|null} [durationValue] MetadataItem durationValue
                 * @property {google.protobuf.ITimestamp|null} [timestampValue] MetadataItem timestampValue
                 * @property {factset.protobuf.stach.table.IReference|null} [refValue] MetadataItem refValue
                 */

                /**
                 * Constructs a new MetadataItem.
                 * @memberof factset.protobuf.stach
                 * @classdesc Represents a MetadataItem.
                 * @implements IMetadataItem
                 * @constructor
                 * @param {factset.protobuf.stach.IMetadataItem=} [properties] Properties to set
                 */
                function MetadataItem(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MetadataItem name.
                 * @member {string} name
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.name = "";

                /**
                 * MetadataItem doubleValue.
                 * @member {number} doubleValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.doubleValue = 0;

                /**
                 * MetadataItem floatValue.
                 * @member {number} floatValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.floatValue = 0;

                /**
                 * MetadataItem int32Value.
                 * @member {number} int32Value
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.int32Value = 0;

                /**
                 * MetadataItem int64Value.
                 * @member {number|Long} int64Value
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.int64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * MetadataItem boolValue.
                 * @member {boolean} boolValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.boolValue = false;

                /**
                 * MetadataItem stringValue.
                 * @member {string} stringValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.stringValue = "";

                /**
                 * MetadataItem durationValue.
                 * @member {google.protobuf.IDuration|null|undefined} durationValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.durationValue = null;

                /**
                 * MetadataItem timestampValue.
                 * @member {google.protobuf.ITimestamp|null|undefined} timestampValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.timestampValue = null;

                /**
                 * MetadataItem refValue.
                 * @member {factset.protobuf.stach.table.IReference|null|undefined} refValue
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                MetadataItem.prototype.refValue = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * MetadataItem data.
                 * @member {"doubleValue"|"floatValue"|"int32Value"|"int64Value"|"boolValue"|"stringValue"|"durationValue"|"timestampValue"|"refValue"|undefined} data
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 */
                Object.defineProperty(MetadataItem.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["doubleValue", "floatValue", "int32Value", "int64Value", "boolValue", "stringValue", "durationValue", "timestampValue", "refValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new MetadataItem instance using the specified properties.
                 * @function create
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {factset.protobuf.stach.IMetadataItem=} [properties] Properties to set
                 * @returns {factset.protobuf.stach.MetadataItem} MetadataItem instance
                 */
                MetadataItem.create = function create(properties) {
                    return new MetadataItem(properties);
                };

                /**
                 * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.MetadataItem.verify|verify} messages.
                 * @function encode
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {factset.protobuf.stach.IMetadataItem} message MetadataItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MetadataItem.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 100, wireType 1 =*/801).double(message.doubleValue);
                    if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                        writer.uint32(/* id 101, wireType 5 =*/813).float(message.floatValue);
                    if (message.int32Value != null && message.hasOwnProperty("int32Value"))
                        writer.uint32(/* id 102, wireType 0 =*/816).int32(message.int32Value);
                    if (message.int64Value != null && message.hasOwnProperty("int64Value"))
                        writer.uint32(/* id 103, wireType 0 =*/824).int64(message.int64Value);
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        writer.uint32(/* id 106, wireType 0 =*/848).bool(message.boolValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 107, wireType 2 =*/858).string(message.stringValue);
                    if (message.durationValue != null && message.hasOwnProperty("durationValue"))
                        $root.google.protobuf.Duration.encode(message.durationValue, writer.uint32(/* id 108, wireType 2 =*/866).fork()).ldelim();
                    if (message.timestampValue != null && message.hasOwnProperty("timestampValue"))
                        $root.google.protobuf.Timestamp.encode(message.timestampValue, writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
                    if (message.refValue != null && message.hasOwnProperty("refValue"))
                        $root.factset.protobuf.stach.table.Reference.encode(message.refValue, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.MetadataItem.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {factset.protobuf.stach.IMetadataItem} message MetadataItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MetadataItem.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MetadataItem message from the specified reader or buffer.
                 * @function decode
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {factset.protobuf.stach.MetadataItem} MetadataItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MetadataItem.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.MetadataItem();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 100:
                            message.doubleValue = reader.double();
                            break;
                        case 101:
                            message.floatValue = reader.float();
                            break;
                        case 102:
                            message.int32Value = reader.int32();
                            break;
                        case 103:
                            message.int64Value = reader.int64();
                            break;
                        case 106:
                            message.boolValue = reader.bool();
                            break;
                        case 107:
                            message.stringValue = reader.string();
                            break;
                        case 108:
                            message.durationValue = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        case 109:
                            message.timestampValue = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 201:
                            message.refValue = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MetadataItem message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {factset.protobuf.stach.MetadataItem} MetadataItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MetadataItem.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MetadataItem message.
                 * @function verify
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MetadataItem.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                        properties.data = 1;
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    }
                    if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        if (typeof message.floatValue !== "number")
                            return "floatValue: number expected";
                    }
                    if (message.int32Value != null && message.hasOwnProperty("int32Value")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        if (!$util.isInteger(message.int32Value))
                            return "int32Value: integer expected";
                    }
                    if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                            return "int64Value: integer|Long expected";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    }
                    if (message.durationValue != null && message.hasOwnProperty("durationValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            var error = $root.google.protobuf.Duration.verify(message.durationValue);
                            if (error)
                                return "durationValue." + error;
                        }
                    }
                    if (message.timestampValue != null && message.hasOwnProperty("timestampValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            var error = $root.google.protobuf.Timestamp.verify(message.timestampValue);
                            if (error)
                                return "timestampValue." + error;
                        }
                    }
                    if (message.refValue != null && message.hasOwnProperty("refValue")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            var error = $root.factset.protobuf.stach.table.Reference.verify(message.refValue);
                            if (error)
                                return "refValue." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {factset.protobuf.stach.MetadataItem} MetadataItem
                 */
                MetadataItem.fromObject = function fromObject(object) {
                    if (object instanceof $root.factset.protobuf.stach.MetadataItem)
                        return object;
                    var message = new $root.factset.protobuf.stach.MetadataItem();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.floatValue != null)
                        message.floatValue = Number(object.floatValue);
                    if (object.int32Value != null)
                        message.int32Value = object.int32Value | 0;
                    if (object.int64Value != null)
                        if ($util.Long)
                            (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                        else if (typeof object.int64Value === "string")
                            message.int64Value = parseInt(object.int64Value, 10);
                        else if (typeof object.int64Value === "number")
                            message.int64Value = object.int64Value;
                        else if (typeof object.int64Value === "object")
                            message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    if (object.durationValue != null) {
                        if (typeof object.durationValue !== "object")
                            throw TypeError(".factset.protobuf.stach.MetadataItem.durationValue: object expected");
                        message.durationValue = $root.google.protobuf.Duration.fromObject(object.durationValue);
                    }
                    if (object.timestampValue != null) {
                        if (typeof object.timestampValue !== "object")
                            throw TypeError(".factset.protobuf.stach.MetadataItem.timestampValue: object expected");
                        message.timestampValue = $root.google.protobuf.Timestamp.fromObject(object.timestampValue);
                    }
                    if (object.refValue != null) {
                        if (typeof object.refValue !== "object")
                            throw TypeError(".factset.protobuf.stach.MetadataItem.refValue: object expected");
                        message.refValue = $root.factset.protobuf.stach.table.Reference.fromObject(object.refValue);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @static
                 * @param {factset.protobuf.stach.MetadataItem} message MetadataItem
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MetadataItem.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                        if (options.oneofs)
                            object.data = "doubleValue";
                    }
                    if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                        object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                        if (options.oneofs)
                            object.data = "floatValue";
                    }
                    if (message.int32Value != null && message.hasOwnProperty("int32Value")) {
                        object.int32Value = message.int32Value;
                        if (options.oneofs)
                            object.data = "int32Value";
                    }
                    if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                        if (typeof message.int64Value === "number")
                            object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                        else
                            object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                        if (options.oneofs)
                            object.data = "int64Value";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        object.boolValue = message.boolValue;
                        if (options.oneofs)
                            object.data = "boolValue";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        object.stringValue = message.stringValue;
                        if (options.oneofs)
                            object.data = "stringValue";
                    }
                    if (message.durationValue != null && message.hasOwnProperty("durationValue")) {
                        object.durationValue = $root.google.protobuf.Duration.toObject(message.durationValue, options);
                        if (options.oneofs)
                            object.data = "durationValue";
                    }
                    if (message.timestampValue != null && message.hasOwnProperty("timestampValue")) {
                        object.timestampValue = $root.google.protobuf.Timestamp.toObject(message.timestampValue, options);
                        if (options.oneofs)
                            object.data = "timestampValue";
                    }
                    if (message.refValue != null && message.hasOwnProperty("refValue")) {
                        object.refValue = $root.factset.protobuf.stach.table.Reference.toObject(message.refValue, options);
                        if (options.oneofs)
                            object.data = "refValue";
                    }
                    return object;
                };

                /**
                 * Converts this MetadataItem to JSON.
                 * @function toJSON
                 * @memberof factset.protobuf.stach.MetadataItem
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MetadataItem.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MetadataItem;
            })();

            stach.chart = (function() {

                /**
                 * Namespace chart.
                 * @memberof factset.protobuf.stach
                 * @namespace
                 */
                var chart = {};

                chart.Chart = (function() {

                    /**
                     * Properties of a Chart.
                     * @memberof factset.protobuf.stach.chart
                     * @interface IChart
                     * @property {google.protobuf.IStruct|null} [template] Chart template
                     * @property {Object.<string,factset.protobuf.stach.table.IReference>|null} [attributes] Chart attributes
                     * @property {Object.<string,factset.protobuf.stach.chart.IPlot>|null} [plots] Chart plots
                     * @property {Object.<string,factset.protobuf.stach.chart.ISeries>|null} [series] Chart series
                     * @property {Object.<string,factset.protobuf.stach.chart.IData>|null} [data] Chart data
                     */

                    /**
                     * Constructs a new Chart.
                     * @memberof factset.protobuf.stach.chart
                     * @classdesc Represents a Chart.
                     * @implements IChart
                     * @constructor
                     * @param {factset.protobuf.stach.chart.IChart=} [properties] Properties to set
                     */
                    function Chart(properties) {
                        this.attributes = {};
                        this.plots = {};
                        this.series = {};
                        this.data = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Chart template.
                     * @member {google.protobuf.IStruct|null|undefined} template
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     */
                    Chart.prototype.template = null;

                    /**
                     * Chart attributes.
                     * @member {Object.<string,factset.protobuf.stach.table.IReference>} attributes
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     */
                    Chart.prototype.attributes = $util.emptyObject;

                    /**
                     * Chart plots.
                     * @member {Object.<string,factset.protobuf.stach.chart.IPlot>} plots
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     */
                    Chart.prototype.plots = $util.emptyObject;

                    /**
                     * Chart series.
                     * @member {Object.<string,factset.protobuf.stach.chart.ISeries>} series
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     */
                    Chart.prototype.series = $util.emptyObject;

                    /**
                     * Chart data.
                     * @member {Object.<string,factset.protobuf.stach.chart.IData>} data
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     */
                    Chart.prototype.data = $util.emptyObject;

                    /**
                     * Creates a new Chart instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {factset.protobuf.stach.chart.IChart=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.chart.Chart} Chart instance
                     */
                    Chart.create = function create(properties) {
                        return new Chart(properties);
                    };

                    /**
                     * Encodes the specified Chart message. Does not implicitly {@link factset.protobuf.stach.chart.Chart.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {factset.protobuf.stach.chart.IChart} message Chart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Chart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.template != null && message.hasOwnProperty("template"))
                            $root.google.protobuf.Struct.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.attributes != null && message.hasOwnProperty("attributes"))
                            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.Reference.encode(message.attributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.plots != null && message.hasOwnProperty("plots"))
                            for (var keys = Object.keys(message.plots), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.chart.Plot.encode(message.plots[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.series != null && message.hasOwnProperty("series"))
                            for (var keys = Object.keys(message.series), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.chart.Series.encode(message.series[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.data != null && message.hasOwnProperty("data"))
                            for (var keys = Object.keys(message.data), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.chart.Data.encode(message.data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified Chart message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Chart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {factset.protobuf.stach.chart.IChart} message Chart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Chart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Chart message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.chart.Chart} Chart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Chart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.chart.Chart(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.template = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.attributes === $util.emptyObject)
                                    message.attributes = {};
                                key = reader.string();
                                reader.pos++;
                                message.attributes[key] = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.plots === $util.emptyObject)
                                    message.plots = {};
                                key = reader.string();
                                reader.pos++;
                                message.plots[key] = $root.factset.protobuf.stach.chart.Plot.decode(reader, reader.uint32());
                                break;
                            case 4:
                                reader.skip().pos++;
                                if (message.series === $util.emptyObject)
                                    message.series = {};
                                key = reader.string();
                                reader.pos++;
                                message.series[key] = $root.factset.protobuf.stach.chart.Series.decode(reader, reader.uint32());
                                break;
                            case 5:
                                reader.skip().pos++;
                                if (message.data === $util.emptyObject)
                                    message.data = {};
                                key = reader.string();
                                reader.pos++;
                                message.data[key] = $root.factset.protobuf.stach.chart.Data.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Chart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.chart.Chart} Chart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Chart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Chart message.
                     * @function verify
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Chart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.template != null && message.hasOwnProperty("template")) {
                            var error = $root.google.protobuf.Struct.verify(message.template);
                            if (error)
                                return "template." + error;
                        }
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!$util.isObject(message.attributes))
                                return "attributes: object expected";
                            var key = Object.keys(message.attributes);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.attributes[key[i]]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.plots != null && message.hasOwnProperty("plots")) {
                            if (!$util.isObject(message.plots))
                                return "plots: object expected";
                            var key = Object.keys(message.plots);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.chart.Plot.verify(message.plots[key[i]]);
                                if (error)
                                    return "plots." + error;
                            }
                        }
                        if (message.series != null && message.hasOwnProperty("series")) {
                            if (!$util.isObject(message.series))
                                return "series: object expected";
                            var key = Object.keys(message.series);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.chart.Series.verify(message.series[key[i]]);
                                if (error)
                                    return "series." + error;
                            }
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            if (!$util.isObject(message.data))
                                return "data: object expected";
                            var key = Object.keys(message.data);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.chart.Data.verify(message.data[key[i]]);
                                if (error)
                                    return "data." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Chart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.chart.Chart} Chart
                     */
                    Chart.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.chart.Chart)
                            return object;
                        var message = new $root.factset.protobuf.stach.chart.Chart();
                        if (object.template != null) {
                            if (typeof object.template !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Chart.template: object expected");
                            message.template = $root.google.protobuf.Struct.fromObject(object.template);
                        }
                        if (object.attributes) {
                            if (typeof object.attributes !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Chart.attributes: object expected");
                            message.attributes = {};
                            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i) {
                                if (typeof object.attributes[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Chart.attributes: object expected");
                                message.attributes[keys[i]] = $root.factset.protobuf.stach.table.Reference.fromObject(object.attributes[keys[i]]);
                            }
                        }
                        if (object.plots) {
                            if (typeof object.plots !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Chart.plots: object expected");
                            message.plots = {};
                            for (var keys = Object.keys(object.plots), i = 0; i < keys.length; ++i) {
                                if (typeof object.plots[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Chart.plots: object expected");
                                message.plots[keys[i]] = $root.factset.protobuf.stach.chart.Plot.fromObject(object.plots[keys[i]]);
                            }
                        }
                        if (object.series) {
                            if (typeof object.series !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Chart.series: object expected");
                            message.series = {};
                            for (var keys = Object.keys(object.series), i = 0; i < keys.length; ++i) {
                                if (typeof object.series[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Chart.series: object expected");
                                message.series[keys[i]] = $root.factset.protobuf.stach.chart.Series.fromObject(object.series[keys[i]]);
                            }
                        }
                        if (object.data) {
                            if (typeof object.data !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Chart.data: object expected");
                            message.data = {};
                            for (var keys = Object.keys(object.data), i = 0; i < keys.length; ++i) {
                                if (typeof object.data[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Chart.data: object expected");
                                message.data[keys[i]] = $root.factset.protobuf.stach.chart.Data.fromObject(object.data[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Chart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @static
                     * @param {factset.protobuf.stach.chart.Chart} message Chart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Chart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults) {
                            object.attributes = {};
                            object.plots = {};
                            object.series = {};
                            object.data = {};
                        }
                        if (options.defaults)
                            object.template = null;
                        if (message.template != null && message.hasOwnProperty("template"))
                            object.template = $root.google.protobuf.Struct.toObject(message.template, options);
                        var keys2;
                        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                            object.attributes = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.attributes[keys2[j]] = $root.factset.protobuf.stach.table.Reference.toObject(message.attributes[keys2[j]], options);
                        }
                        if (message.plots && (keys2 = Object.keys(message.plots)).length) {
                            object.plots = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.plots[keys2[j]] = $root.factset.protobuf.stach.chart.Plot.toObject(message.plots[keys2[j]], options);
                        }
                        if (message.series && (keys2 = Object.keys(message.series)).length) {
                            object.series = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.series[keys2[j]] = $root.factset.protobuf.stach.chart.Series.toObject(message.series[keys2[j]], options);
                        }
                        if (message.data && (keys2 = Object.keys(message.data)).length) {
                            object.data = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.data[keys2[j]] = $root.factset.protobuf.stach.chart.Data.toObject(message.data[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Chart to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.chart.Chart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Chart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Chart;
                })();

                chart.Data = (function() {

                    /**
                     * Properties of a Data.
                     * @memberof factset.protobuf.stach.chart
                     * @interface IData
                     * @property {google.protobuf.IStruct|null} [template] Data template
                     * @property {Object.<string,factset.protobuf.stach.table.IReference>|null} [attributes] Data attributes
                     * @property {factset.protobuf.stach.table.IReference|null} [reference] Data reference
                     * @property {Array.<factset.protobuf.stach.table.IReference>|null} [children] Data children
                     */

                    /**
                     * Constructs a new Data.
                     * @memberof factset.protobuf.stach.chart
                     * @classdesc Represents a Data.
                     * @implements IData
                     * @constructor
                     * @param {factset.protobuf.stach.chart.IData=} [properties] Properties to set
                     */
                    function Data(properties) {
                        this.attributes = {};
                        this.children = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Data template.
                     * @member {google.protobuf.IStruct|null|undefined} template
                     * @memberof factset.protobuf.stach.chart.Data
                     * @instance
                     */
                    Data.prototype.template = null;

                    /**
                     * Data attributes.
                     * @member {Object.<string,factset.protobuf.stach.table.IReference>} attributes
                     * @memberof factset.protobuf.stach.chart.Data
                     * @instance
                     */
                    Data.prototype.attributes = $util.emptyObject;

                    /**
                     * Data reference.
                     * @member {factset.protobuf.stach.table.IReference|null|undefined} reference
                     * @memberof factset.protobuf.stach.chart.Data
                     * @instance
                     */
                    Data.prototype.reference = null;

                    /**
                     * Data children.
                     * @member {Array.<factset.protobuf.stach.table.IReference>} children
                     * @memberof factset.protobuf.stach.chart.Data
                     * @instance
                     */
                    Data.prototype.children = $util.emptyArray;

                    /**
                     * Creates a new Data instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {factset.protobuf.stach.chart.IData=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.chart.Data} Data instance
                     */
                    Data.create = function create(properties) {
                        return new Data(properties);
                    };

                    /**
                     * Encodes the specified Data message. Does not implicitly {@link factset.protobuf.stach.chart.Data.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {factset.protobuf.stach.chart.IData} message Data message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Data.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.template != null && message.hasOwnProperty("template"))
                            $root.google.protobuf.Struct.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.attributes != null && message.hasOwnProperty("attributes"))
                            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.Reference.encode(message.attributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.reference != null && message.hasOwnProperty("reference"))
                            $root.factset.protobuf.stach.table.Reference.encode(message.reference, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.children != null && message.children.length)
                            for (var i = 0; i < message.children.length; ++i)
                                $root.factset.protobuf.stach.table.Reference.encode(message.children[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Data message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Data.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {factset.protobuf.stach.chart.IData} message Data message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Data.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Data message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.chart.Data} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Data.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.chart.Data(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.template = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.attributes === $util.emptyObject)
                                    message.attributes = {};
                                key = reader.string();
                                reader.pos++;
                                message.attributes[key] = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.reference = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.children && message.children.length))
                                    message.children = [];
                                message.children.push($root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Data message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.chart.Data} Data
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Data.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Data message.
                     * @function verify
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Data.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.template != null && message.hasOwnProperty("template")) {
                            var error = $root.google.protobuf.Struct.verify(message.template);
                            if (error)
                                return "template." + error;
                        }
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!$util.isObject(message.attributes))
                                return "attributes: object expected";
                            var key = Object.keys(message.attributes);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.attributes[key[i]]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.reference != null && message.hasOwnProperty("reference")) {
                            var error = $root.factset.protobuf.stach.table.Reference.verify(message.reference);
                            if (error)
                                return "reference." + error;
                        }
                        if (message.children != null && message.hasOwnProperty("children")) {
                            if (!Array.isArray(message.children))
                                return "children: array expected";
                            for (var i = 0; i < message.children.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.children[i]);
                                if (error)
                                    return "children." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Data message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.chart.Data} Data
                     */
                    Data.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.chart.Data)
                            return object;
                        var message = new $root.factset.protobuf.stach.chart.Data();
                        if (object.template != null) {
                            if (typeof object.template !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Data.template: object expected");
                            message.template = $root.google.protobuf.Struct.fromObject(object.template);
                        }
                        if (object.attributes) {
                            if (typeof object.attributes !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Data.attributes: object expected");
                            message.attributes = {};
                            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i) {
                                if (typeof object.attributes[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Data.attributes: object expected");
                                message.attributes[keys[i]] = $root.factset.protobuf.stach.table.Reference.fromObject(object.attributes[keys[i]]);
                            }
                        }
                        if (object.reference != null) {
                            if (typeof object.reference !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Data.reference: object expected");
                            message.reference = $root.factset.protobuf.stach.table.Reference.fromObject(object.reference);
                        }
                        if (object.children) {
                            if (!Array.isArray(object.children))
                                throw TypeError(".factset.protobuf.stach.chart.Data.children: array expected");
                            message.children = [];
                            for (var i = 0; i < object.children.length; ++i) {
                                if (typeof object.children[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Data.children: object expected");
                                message.children[i] = $root.factset.protobuf.stach.table.Reference.fromObject(object.children[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Data message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.chart.Data
                     * @static
                     * @param {factset.protobuf.stach.chart.Data} message Data
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Data.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.children = [];
                        if (options.objects || options.defaults)
                            object.attributes = {};
                        if (options.defaults) {
                            object.template = null;
                            object.reference = null;
                        }
                        if (message.template != null && message.hasOwnProperty("template"))
                            object.template = $root.google.protobuf.Struct.toObject(message.template, options);
                        var keys2;
                        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                            object.attributes = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.attributes[keys2[j]] = $root.factset.protobuf.stach.table.Reference.toObject(message.attributes[keys2[j]], options);
                        }
                        if (message.reference != null && message.hasOwnProperty("reference"))
                            object.reference = $root.factset.protobuf.stach.table.Reference.toObject(message.reference, options);
                        if (message.children && message.children.length) {
                            object.children = [];
                            for (var j = 0; j < message.children.length; ++j)
                                object.children[j] = $root.factset.protobuf.stach.table.Reference.toObject(message.children[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Data to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.chart.Data
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Data.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Data;
                })();

                chart.Plot = (function() {

                    /**
                     * Properties of a Plot.
                     * @memberof factset.protobuf.stach.chart
                     * @interface IPlot
                     * @property {google.protobuf.IStruct|null} [template] Plot template
                     * @property {Object.<string,factset.protobuf.stach.table.IReference>|null} [attributes] Plot attributes
                     * @property {factset.protobuf.stach.table.IReference|null} [label] Plot label
                     * @property {Array.<string>|null} [series] Plot series
                     */

                    /**
                     * Constructs a new Plot.
                     * @memberof factset.protobuf.stach.chart
                     * @classdesc Represents a Plot.
                     * @implements IPlot
                     * @constructor
                     * @param {factset.protobuf.stach.chart.IPlot=} [properties] Properties to set
                     */
                    function Plot(properties) {
                        this.attributes = {};
                        this.series = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Plot template.
                     * @member {google.protobuf.IStruct|null|undefined} template
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @instance
                     */
                    Plot.prototype.template = null;

                    /**
                     * Plot attributes.
                     * @member {Object.<string,factset.protobuf.stach.table.IReference>} attributes
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @instance
                     */
                    Plot.prototype.attributes = $util.emptyObject;

                    /**
                     * Plot label.
                     * @member {factset.protobuf.stach.table.IReference|null|undefined} label
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @instance
                     */
                    Plot.prototype.label = null;

                    /**
                     * Plot series.
                     * @member {Array.<string>} series
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @instance
                     */
                    Plot.prototype.series = $util.emptyArray;

                    /**
                     * Creates a new Plot instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {factset.protobuf.stach.chart.IPlot=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.chart.Plot} Plot instance
                     */
                    Plot.create = function create(properties) {
                        return new Plot(properties);
                    };

                    /**
                     * Encodes the specified Plot message. Does not implicitly {@link factset.protobuf.stach.chart.Plot.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {factset.protobuf.stach.chart.IPlot} message Plot message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Plot.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.template != null && message.hasOwnProperty("template"))
                            $root.google.protobuf.Struct.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.attributes != null && message.hasOwnProperty("attributes"))
                            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.Reference.encode(message.attributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.label != null && message.hasOwnProperty("label"))
                            $root.factset.protobuf.stach.table.Reference.encode(message.label, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.series != null && message.series.length)
                            for (var i = 0; i < message.series.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.series[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Plot message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Plot.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {factset.protobuf.stach.chart.IPlot} message Plot message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Plot.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Plot message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.chart.Plot} Plot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Plot.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.chart.Plot(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.template = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.attributes === $util.emptyObject)
                                    message.attributes = {};
                                key = reader.string();
                                reader.pos++;
                                message.attributes[key] = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.label = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 4:
                                if (!(message.series && message.series.length))
                                    message.series = [];
                                message.series.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Plot message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.chart.Plot} Plot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Plot.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Plot message.
                     * @function verify
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Plot.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.template != null && message.hasOwnProperty("template")) {
                            var error = $root.google.protobuf.Struct.verify(message.template);
                            if (error)
                                return "template." + error;
                        }
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!$util.isObject(message.attributes))
                                return "attributes: object expected";
                            var key = Object.keys(message.attributes);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.attributes[key[i]]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.label != null && message.hasOwnProperty("label")) {
                            var error = $root.factset.protobuf.stach.table.Reference.verify(message.label);
                            if (error)
                                return "label." + error;
                        }
                        if (message.series != null && message.hasOwnProperty("series")) {
                            if (!Array.isArray(message.series))
                                return "series: array expected";
                            for (var i = 0; i < message.series.length; ++i)
                                if (!$util.isString(message.series[i]))
                                    return "series: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Plot message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.chart.Plot} Plot
                     */
                    Plot.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.chart.Plot)
                            return object;
                        var message = new $root.factset.protobuf.stach.chart.Plot();
                        if (object.template != null) {
                            if (typeof object.template !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Plot.template: object expected");
                            message.template = $root.google.protobuf.Struct.fromObject(object.template);
                        }
                        if (object.attributes) {
                            if (typeof object.attributes !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Plot.attributes: object expected");
                            message.attributes = {};
                            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i) {
                                if (typeof object.attributes[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Plot.attributes: object expected");
                                message.attributes[keys[i]] = $root.factset.protobuf.stach.table.Reference.fromObject(object.attributes[keys[i]]);
                            }
                        }
                        if (object.label != null) {
                            if (typeof object.label !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Plot.label: object expected");
                            message.label = $root.factset.protobuf.stach.table.Reference.fromObject(object.label);
                        }
                        if (object.series) {
                            if (!Array.isArray(object.series))
                                throw TypeError(".factset.protobuf.stach.chart.Plot.series: array expected");
                            message.series = [];
                            for (var i = 0; i < object.series.length; ++i)
                                message.series[i] = String(object.series[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Plot message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @static
                     * @param {factset.protobuf.stach.chart.Plot} message Plot
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Plot.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.series = [];
                        if (options.objects || options.defaults)
                            object.attributes = {};
                        if (options.defaults) {
                            object.template = null;
                            object.label = null;
                        }
                        if (message.template != null && message.hasOwnProperty("template"))
                            object.template = $root.google.protobuf.Struct.toObject(message.template, options);
                        var keys2;
                        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                            object.attributes = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.attributes[keys2[j]] = $root.factset.protobuf.stach.table.Reference.toObject(message.attributes[keys2[j]], options);
                        }
                        if (message.label != null && message.hasOwnProperty("label"))
                            object.label = $root.factset.protobuf.stach.table.Reference.toObject(message.label, options);
                        if (message.series && message.series.length) {
                            object.series = [];
                            for (var j = 0; j < message.series.length; ++j)
                                object.series[j] = message.series[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Plot to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.chart.Plot
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Plot.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Plot;
                })();

                chart.Series = (function() {

                    /**
                     * Properties of a Series.
                     * @memberof factset.protobuf.stach.chart
                     * @interface ISeries
                     * @property {google.protobuf.IStruct|null} [template] Series template
                     * @property {Object.<string,factset.protobuf.stach.table.IReference>|null} [attributes] Series attributes
                     * @property {factset.protobuf.stach.table.IReference|null} [label] Series label
                     * @property {Object.<string,string>|null} [dimensions] Series dimensions
                     */

                    /**
                     * Constructs a new Series.
                     * @memberof factset.protobuf.stach.chart
                     * @classdesc Represents a Series.
                     * @implements ISeries
                     * @constructor
                     * @param {factset.protobuf.stach.chart.ISeries=} [properties] Properties to set
                     */
                    function Series(properties) {
                        this.attributes = {};
                        this.dimensions = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Series template.
                     * @member {google.protobuf.IStruct|null|undefined} template
                     * @memberof factset.protobuf.stach.chart.Series
                     * @instance
                     */
                    Series.prototype.template = null;

                    /**
                     * Series attributes.
                     * @member {Object.<string,factset.protobuf.stach.table.IReference>} attributes
                     * @memberof factset.protobuf.stach.chart.Series
                     * @instance
                     */
                    Series.prototype.attributes = $util.emptyObject;

                    /**
                     * Series label.
                     * @member {factset.protobuf.stach.table.IReference|null|undefined} label
                     * @memberof factset.protobuf.stach.chart.Series
                     * @instance
                     */
                    Series.prototype.label = null;

                    /**
                     * Series dimensions.
                     * @member {Object.<string,string>} dimensions
                     * @memberof factset.protobuf.stach.chart.Series
                     * @instance
                     */
                    Series.prototype.dimensions = $util.emptyObject;

                    /**
                     * Creates a new Series instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {factset.protobuf.stach.chart.ISeries=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.chart.Series} Series instance
                     */
                    Series.create = function create(properties) {
                        return new Series(properties);
                    };

                    /**
                     * Encodes the specified Series message. Does not implicitly {@link factset.protobuf.stach.chart.Series.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {factset.protobuf.stach.chart.ISeries} message Series message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Series.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.template != null && message.hasOwnProperty("template"))
                            $root.google.protobuf.Struct.encode(message.template, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.attributes != null && message.hasOwnProperty("attributes"))
                            for (var keys = Object.keys(message.attributes), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.Reference.encode(message.attributes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.label != null && message.hasOwnProperty("label"))
                            $root.factset.protobuf.stach.table.Reference.encode(message.label, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.dimensions != null && message.hasOwnProperty("dimensions"))
                            for (var keys = Object.keys(message.dimensions), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.dimensions[keys[i]]).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Series message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Series.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {factset.protobuf.stach.chart.ISeries} message Series message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Series.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Series message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.chart.Series} Series
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Series.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.chart.Series(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.template = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.attributes === $util.emptyObject)
                                    message.attributes = {};
                                key = reader.string();
                                reader.pos++;
                                message.attributes[key] = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.label = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
                                break;
                            case 4:
                                reader.skip().pos++;
                                if (message.dimensions === $util.emptyObject)
                                    message.dimensions = {};
                                key = reader.string();
                                reader.pos++;
                                message.dimensions[key] = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Series message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.chart.Series} Series
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Series.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Series message.
                     * @function verify
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Series.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.template != null && message.hasOwnProperty("template")) {
                            var error = $root.google.protobuf.Struct.verify(message.template);
                            if (error)
                                return "template." + error;
                        }
                        if (message.attributes != null && message.hasOwnProperty("attributes")) {
                            if (!$util.isObject(message.attributes))
                                return "attributes: object expected";
                            var key = Object.keys(message.attributes);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.attributes[key[i]]);
                                if (error)
                                    return "attributes." + error;
                            }
                        }
                        if (message.label != null && message.hasOwnProperty("label")) {
                            var error = $root.factset.protobuf.stach.table.Reference.verify(message.label);
                            if (error)
                                return "label." + error;
                        }
                        if (message.dimensions != null && message.hasOwnProperty("dimensions")) {
                            if (!$util.isObject(message.dimensions))
                                return "dimensions: object expected";
                            var key = Object.keys(message.dimensions);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.dimensions[key[i]]))
                                    return "dimensions: string{k:string} expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Series message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.chart.Series} Series
                     */
                    Series.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.chart.Series)
                            return object;
                        var message = new $root.factset.protobuf.stach.chart.Series();
                        if (object.template != null) {
                            if (typeof object.template !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Series.template: object expected");
                            message.template = $root.google.protobuf.Struct.fromObject(object.template);
                        }
                        if (object.attributes) {
                            if (typeof object.attributes !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Series.attributes: object expected");
                            message.attributes = {};
                            for (var keys = Object.keys(object.attributes), i = 0; i < keys.length; ++i) {
                                if (typeof object.attributes[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.chart.Series.attributes: object expected");
                                message.attributes[keys[i]] = $root.factset.protobuf.stach.table.Reference.fromObject(object.attributes[keys[i]]);
                            }
                        }
                        if (object.label != null) {
                            if (typeof object.label !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Series.label: object expected");
                            message.label = $root.factset.protobuf.stach.table.Reference.fromObject(object.label);
                        }
                        if (object.dimensions) {
                            if (typeof object.dimensions !== "object")
                                throw TypeError(".factset.protobuf.stach.chart.Series.dimensions: object expected");
                            message.dimensions = {};
                            for (var keys = Object.keys(object.dimensions), i = 0; i < keys.length; ++i)
                                message.dimensions[keys[i]] = String(object.dimensions[keys[i]]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Series message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.chart.Series
                     * @static
                     * @param {factset.protobuf.stach.chart.Series} message Series
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Series.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults) {
                            object.attributes = {};
                            object.dimensions = {};
                        }
                        if (options.defaults) {
                            object.template = null;
                            object.label = null;
                        }
                        if (message.template != null && message.hasOwnProperty("template"))
                            object.template = $root.google.protobuf.Struct.toObject(message.template, options);
                        var keys2;
                        if (message.attributes && (keys2 = Object.keys(message.attributes)).length) {
                            object.attributes = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.attributes[keys2[j]] = $root.factset.protobuf.stach.table.Reference.toObject(message.attributes[keys2[j]], options);
                        }
                        if (message.label != null && message.hasOwnProperty("label"))
                            object.label = $root.factset.protobuf.stach.table.Reference.toObject(message.label, options);
                        if (message.dimensions && (keys2 = Object.keys(message.dimensions)).length) {
                            object.dimensions = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.dimensions[keys2[j]] = message.dimensions[keys2[j]];
                        }
                        return object;
                    };

                    /**
                     * Converts this Series to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.chart.Series
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Series.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Series;
                })();

                return chart;
            })();

            stach.table = (function() {

                /**
                 * Namespace table.
                 * @memberof factset.protobuf.stach
                 * @namespace
                 */
                var table = {};

                /**
                 * DataType enum.
                 * @name factset.protobuf.stach.table.DataType
                 * @enum {string}
                 * @property {number} UNKNOWN_DATATYPE=0 UNKNOWN_DATATYPE value
                 * @property {number} DOUBLE=1 DOUBLE value
                 * @property {number} FLOAT=2 FLOAT value
                 * @property {number} INT32=3 INT32 value
                 * @property {number} INT64=4 INT64 value
                 * @property {number} BOOL=7 BOOL value
                 * @property {number} STRING=8 STRING value
                 * @property {number} DURATION=9 DURATION value
                 * @property {number} TIMESTAMP=10 TIMESTAMP value
                 */
                table.DataType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_DATATYPE"] = 0;
                    values[valuesById[1] = "DOUBLE"] = 1;
                    values[valuesById[2] = "FLOAT"] = 2;
                    values[valuesById[3] = "INT32"] = 3;
                    values[valuesById[4] = "INT64"] = 4;
                    values[valuesById[7] = "BOOL"] = 7;
                    values[valuesById[8] = "STRING"] = 8;
                    values[valuesById[9] = "DURATION"] = 9;
                    values[valuesById[10] = "TIMESTAMP"] = 10;
                    return values;
                })();

                /**
                 * HorizontalAlignment enum.
                 * @name factset.protobuf.stach.table.HorizontalAlignment
                 * @enum {string}
                 * @property {number} UNKNOWN_HALIGN=0 UNKNOWN_HALIGN value
                 * @property {number} LEFT=1 LEFT value
                 * @property {number} CENTER=2 CENTER value
                 * @property {number} RIGHT=3 RIGHT value
                 */
                table.HorizontalAlignment = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_HALIGN"] = 0;
                    values[valuesById[1] = "LEFT"] = 1;
                    values[valuesById[2] = "CENTER"] = 2;
                    values[valuesById[3] = "RIGHT"] = 3;
                    return values;
                })();

                table.ListOfMetadata = (function() {

                    /**
                     * Properties of a ListOfMetadata.
                     * @memberof factset.protobuf.stach.table
                     * @interface IListOfMetadata
                     * @property {Array.<string>|null} [ids] ListOfMetadata ids
                     */

                    /**
                     * Constructs a new ListOfMetadata.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a ListOfMetadata.
                     * @implements IListOfMetadata
                     * @constructor
                     * @param {factset.protobuf.stach.table.IListOfMetadata=} [properties] Properties to set
                     */
                    function ListOfMetadata(properties) {
                        this.ids = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListOfMetadata ids.
                     * @member {Array.<string>} ids
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @instance
                     */
                    ListOfMetadata.prototype.ids = $util.emptyArray;

                    /**
                     * Creates a new ListOfMetadata instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.table.IListOfMetadata=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.ListOfMetadata} ListOfMetadata instance
                     */
                    ListOfMetadata.create = function create(properties) {
                        return new ListOfMetadata(properties);
                    };

                    /**
                     * Encodes the specified ListOfMetadata message. Does not implicitly {@link factset.protobuf.stach.table.ListOfMetadata.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.table.IListOfMetadata} message ListOfMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListOfMetadata.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ids != null && message.ids.length)
                            for (var i = 0; i < message.ids.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ids[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListOfMetadata message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.ListOfMetadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.table.IListOfMetadata} message ListOfMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListOfMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListOfMetadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.ListOfMetadata} ListOfMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListOfMetadata.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.ListOfMetadata();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.ids && message.ids.length))
                                    message.ids = [];
                                message.ids.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListOfMetadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.ListOfMetadata} ListOfMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListOfMetadata.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListOfMetadata message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListOfMetadata.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ids != null && message.hasOwnProperty("ids")) {
                            if (!Array.isArray(message.ids))
                                return "ids: array expected";
                            for (var i = 0; i < message.ids.length; ++i)
                                if (!$util.isString(message.ids[i]))
                                    return "ids: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a ListOfMetadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.ListOfMetadata} ListOfMetadata
                     */
                    ListOfMetadata.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.ListOfMetadata)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.ListOfMetadata();
                        if (object.ids) {
                            if (!Array.isArray(object.ids))
                                throw TypeError(".factset.protobuf.stach.table.ListOfMetadata.ids: array expected");
                            message.ids = [];
                            for (var i = 0; i < object.ids.length; ++i)
                                message.ids[i] = String(object.ids[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListOfMetadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.table.ListOfMetadata} message ListOfMetadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListOfMetadata.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.ids = [];
                        if (message.ids && message.ids.length) {
                            object.ids = [];
                            for (var j = 0; j < message.ids.length; ++j)
                                object.ids[j] = message.ids[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this ListOfMetadata to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.ListOfMetadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListOfMetadata.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListOfMetadata;
                })();

                table.MetadataCollection = (function() {

                    /**
                     * Properties of a MetadataCollection.
                     * @memberof factset.protobuf.stach.table
                     * @interface IMetadataCollection
                     * @property {Object.<string,factset.protobuf.stach.IMetadataItem>|null} [items] MetadataCollection items
                     * @property {factset.protobuf.stach.table.IMetadataLocations|null} [locations] MetadataCollection locations
                     */

                    /**
                     * Constructs a new MetadataCollection.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a MetadataCollection.
                     * @implements IMetadataCollection
                     * @constructor
                     * @param {factset.protobuf.stach.table.IMetadataCollection=} [properties] Properties to set
                     */
                    function MetadataCollection(properties) {
                        this.items = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MetadataCollection items.
                     * @member {Object.<string,factset.protobuf.stach.IMetadataItem>} items
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @instance
                     */
                    MetadataCollection.prototype.items = $util.emptyObject;

                    /**
                     * MetadataCollection locations.
                     * @member {factset.protobuf.stach.table.IMetadataLocations|null|undefined} locations
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @instance
                     */
                    MetadataCollection.prototype.locations = null;

                    /**
                     * Creates a new MetadataCollection instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataCollection=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.MetadataCollection} MetadataCollection instance
                     */
                    MetadataCollection.create = function create(properties) {
                        return new MetadataCollection(properties);
                    };

                    /**
                     * Encodes the specified MetadataCollection message. Does not implicitly {@link factset.protobuf.stach.table.MetadataCollection.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataCollection} message MetadataCollection message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataCollection.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.items != null && message.hasOwnProperty("items"))
                            for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.MetadataItem.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.locations != null && message.hasOwnProperty("locations"))
                            $root.factset.protobuf.stach.table.MetadataLocations.encode(message.locations, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MetadataCollection message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataCollection.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataCollection} message MetadataCollection message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataCollection.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MetadataCollection message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.MetadataCollection} MetadataCollection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataCollection.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.MetadataCollection(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.items === $util.emptyObject)
                                    message.items = {};
                                key = reader.string();
                                reader.pos++;
                                message.items[key] = $root.factset.protobuf.stach.MetadataItem.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.locations = $root.factset.protobuf.stach.table.MetadataLocations.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MetadataCollection message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.MetadataCollection} MetadataCollection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataCollection.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MetadataCollection message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MetadataCollection.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.items != null && message.hasOwnProperty("items")) {
                            if (!$util.isObject(message.items))
                                return "items: object expected";
                            var key = Object.keys(message.items);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.MetadataItem.verify(message.items[key[i]]);
                                if (error)
                                    return "items." + error;
                            }
                        }
                        if (message.locations != null && message.hasOwnProperty("locations")) {
                            var error = $root.factset.protobuf.stach.table.MetadataLocations.verify(message.locations);
                            if (error)
                                return "locations." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a MetadataCollection message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.MetadataCollection} MetadataCollection
                     */
                    MetadataCollection.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.MetadataCollection)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.MetadataCollection();
                        if (object.items) {
                            if (typeof object.items !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataCollection.items: object expected");
                            message.items = {};
                            for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                                if (typeof object.items[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.MetadataCollection.items: object expected");
                                message.items[keys[i]] = $root.factset.protobuf.stach.MetadataItem.fromObject(object.items[keys[i]]);
                            }
                        }
                        if (object.locations != null) {
                            if (typeof object.locations !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataCollection.locations: object expected");
                            message.locations = $root.factset.protobuf.stach.table.MetadataLocations.fromObject(object.locations);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MetadataCollection message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @static
                     * @param {factset.protobuf.stach.table.MetadataCollection} message MetadataCollection
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MetadataCollection.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.items = {};
                        if (options.defaults)
                            object.locations = null;
                        var keys2;
                        if (message.items && (keys2 = Object.keys(message.items)).length) {
                            object.items = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.items[keys2[j]] = $root.factset.protobuf.stach.MetadataItem.toObject(message.items[keys2[j]], options);
                        }
                        if (message.locations != null && message.hasOwnProperty("locations"))
                            object.locations = $root.factset.protobuf.stach.table.MetadataLocations.toObject(message.locations, options);
                        return object;
                    };

                    /**
                     * Converts this MetadataCollection to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.MetadataCollection
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MetadataCollection.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MetadataCollection;
                })();

                table.MetadataLocations = (function() {

                    /**
                     * Properties of a MetadataLocations.
                     * @memberof factset.protobuf.stach.table
                     * @interface IMetadataLocations
                     * @property {Array.<string>|null} [table] MetadataLocations table
                     * @property {Object.<string,factset.protobuf.stach.table.IListOfMetadata>|null} [columns] MetadataLocations columns
                     * @property {Object.<string,factset.protobuf.stach.table.IListOfMetadata>|null} [rows] MetadataLocations rows
                     */

                    /**
                     * Constructs a new MetadataLocations.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a MetadataLocations.
                     * @implements IMetadataLocations
                     * @constructor
                     * @param {factset.protobuf.stach.table.IMetadataLocations=} [properties] Properties to set
                     */
                    function MetadataLocations(properties) {
                        this.table = [];
                        this.columns = {};
                        this.rows = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MetadataLocations table.
                     * @member {Array.<string>} table
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @instance
                     */
                    MetadataLocations.prototype.table = $util.emptyArray;

                    /**
                     * MetadataLocations columns.
                     * @member {Object.<string,factset.protobuf.stach.table.IListOfMetadata>} columns
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @instance
                     */
                    MetadataLocations.prototype.columns = $util.emptyObject;

                    /**
                     * MetadataLocations rows.
                     * @member {Object.<string,factset.protobuf.stach.table.IListOfMetadata>} rows
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @instance
                     */
                    MetadataLocations.prototype.rows = $util.emptyObject;

                    /**
                     * Creates a new MetadataLocations instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataLocations=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.MetadataLocations} MetadataLocations instance
                     */
                    MetadataLocations.create = function create(properties) {
                        return new MetadataLocations(properties);
                    };

                    /**
                     * Encodes the specified MetadataLocations message. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataLocations} message MetadataLocations message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataLocations.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.table != null && message.table.length)
                            for (var i = 0; i < message.table.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.table[i]);
                        if (message.columns != null && message.hasOwnProperty("columns"))
                            for (var keys = Object.keys(message.columns), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.ListOfMetadata.encode(message.columns[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.rows != null && message.hasOwnProperty("rows"))
                            for (var keys = Object.keys(message.rows), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.ListOfMetadata.encode(message.rows[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified MetadataLocations message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataLocations} message MetadataLocations message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataLocations.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MetadataLocations message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.MetadataLocations} MetadataLocations
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataLocations.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.MetadataLocations(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.table && message.table.length))
                                    message.table = [];
                                message.table.push(reader.string());
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.columns === $util.emptyObject)
                                    message.columns = {};
                                key = reader.string();
                                reader.pos++;
                                message.columns[key] = $root.factset.protobuf.stach.table.ListOfMetadata.decode(reader, reader.uint32());
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.rows === $util.emptyObject)
                                    message.rows = {};
                                key = reader.string();
                                reader.pos++;
                                message.rows[key] = $root.factset.protobuf.stach.table.ListOfMetadata.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MetadataLocations message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.MetadataLocations} MetadataLocations
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataLocations.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MetadataLocations message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MetadataLocations.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.table != null && message.hasOwnProperty("table")) {
                            if (!Array.isArray(message.table))
                                return "table: array expected";
                            for (var i = 0; i < message.table.length; ++i)
                                if (!$util.isString(message.table[i]))
                                    return "table: string[] expected";
                        }
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!$util.isObject(message.columns))
                                return "columns: object expected";
                            var key = Object.keys(message.columns);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.ListOfMetadata.verify(message.columns[key[i]]);
                                if (error)
                                    return "columns." + error;
                            }
                        }
                        if (message.rows != null && message.hasOwnProperty("rows")) {
                            if (!$util.isObject(message.rows))
                                return "rows: object expected";
                            var key = Object.keys(message.rows);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.ListOfMetadata.verify(message.rows[key[i]]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MetadataLocations message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.MetadataLocations} MetadataLocations
                     */
                    MetadataLocations.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.MetadataLocations)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.MetadataLocations();
                        if (object.table) {
                            if (!Array.isArray(object.table))
                                throw TypeError(".factset.protobuf.stach.table.MetadataLocations.table: array expected");
                            message.table = [];
                            for (var i = 0; i < object.table.length; ++i)
                                message.table[i] = String(object.table[i]);
                        }
                        if (object.columns) {
                            if (typeof object.columns !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataLocations.columns: object expected");
                            message.columns = {};
                            for (var keys = Object.keys(object.columns), i = 0; i < keys.length; ++i) {
                                if (typeof object.columns[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.MetadataLocations.columns: object expected");
                                message.columns[keys[i]] = $root.factset.protobuf.stach.table.ListOfMetadata.fromObject(object.columns[keys[i]]);
                            }
                        }
                        if (object.rows) {
                            if (typeof object.rows !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataLocations.rows: object expected");
                            message.rows = {};
                            for (var keys = Object.keys(object.rows), i = 0; i < keys.length; ++i) {
                                if (typeof object.rows[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.MetadataLocations.rows: object expected");
                                message.rows[keys[i]] = $root.factset.protobuf.stach.table.ListOfMetadata.fromObject(object.rows[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MetadataLocations message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @static
                     * @param {factset.protobuf.stach.table.MetadataLocations} message MetadataLocations
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MetadataLocations.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.table = [];
                        if (options.objects || options.defaults) {
                            object.columns = {};
                            object.rows = {};
                        }
                        if (message.table && message.table.length) {
                            object.table = [];
                            for (var j = 0; j < message.table.length; ++j)
                                object.table[j] = message.table[j];
                        }
                        var keys2;
                        if (message.columns && (keys2 = Object.keys(message.columns)).length) {
                            object.columns = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.columns[keys2[j]] = $root.factset.protobuf.stach.table.ListOfMetadata.toObject(message.columns[keys2[j]], options);
                        }
                        if (message.rows && (keys2 = Object.keys(message.rows)).length) {
                            object.rows = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.rows[keys2[j]] = $root.factset.protobuf.stach.table.ListOfMetadata.toObject(message.rows[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this MetadataLocations to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MetadataLocations.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MetadataLocations;
                })();

                table.Reference = (function() {

                    /**
                     * Properties of a Reference.
                     * @memberof factset.protobuf.stach.table
                     * @interface IReference
                     * @property {factset.protobuf.stach.table.ReferenceType|null} [referenceType] Reference referenceType
                     * @property {string|null} [tableId] Reference tableId
                     * @property {string|null} [columnId] Reference columnId
                     * @property {string|null} [rowId] Reference rowId
                     */

                    /**
                     * Constructs a new Reference.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a Reference.
                     * @implements IReference
                     * @constructor
                     * @param {factset.protobuf.stach.table.IReference=} [properties] Properties to set
                     */
                    function Reference(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Reference referenceType.
                     * @member {factset.protobuf.stach.table.ReferenceType} referenceType
                     * @memberof factset.protobuf.stach.table.Reference
                     * @instance
                     */
                    Reference.prototype.referenceType = 0;

                    /**
                     * Reference tableId.
                     * @member {string} tableId
                     * @memberof factset.protobuf.stach.table.Reference
                     * @instance
                     */
                    Reference.prototype.tableId = "";

                    /**
                     * Reference columnId.
                     * @member {string} columnId
                     * @memberof factset.protobuf.stach.table.Reference
                     * @instance
                     */
                    Reference.prototype.columnId = "";

                    /**
                     * Reference rowId.
                     * @member {string} rowId
                     * @memberof factset.protobuf.stach.table.Reference
                     * @instance
                     */
                    Reference.prototype.rowId = "";

                    /**
                     * Creates a new Reference instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {factset.protobuf.stach.table.IReference=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.Reference} Reference instance
                     */
                    Reference.create = function create(properties) {
                        return new Reference(properties);
                    };

                    /**
                     * Encodes the specified Reference message. Does not implicitly {@link factset.protobuf.stach.table.Reference.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {factset.protobuf.stach.table.IReference} message Reference message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Reference.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.referenceType != null && message.hasOwnProperty("referenceType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.referenceType);
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
                        if (message.columnId != null && message.hasOwnProperty("columnId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.columnId);
                        if (message.rowId != null && message.hasOwnProperty("rowId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.rowId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Reference message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Reference.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {factset.protobuf.stach.table.IReference} message Reference message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Reference.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Reference message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.Reference} Reference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Reference.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.Reference();
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
                    };

                    /**
                     * Decodes a Reference message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.Reference} Reference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Reference.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Reference message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Reference.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.referenceType != null && message.hasOwnProperty("referenceType"))
                            switch (message.referenceType) {
                            default:
                                return "referenceType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            if (!$util.isString(message.tableId))
                                return "tableId: string expected";
                        if (message.columnId != null && message.hasOwnProperty("columnId"))
                            if (!$util.isString(message.columnId))
                                return "columnId: string expected";
                        if (message.rowId != null && message.hasOwnProperty("rowId"))
                            if (!$util.isString(message.rowId))
                                return "rowId: string expected";
                        return null;
                    };

                    /**
                     * Creates a Reference message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.Reference} Reference
                     */
                    Reference.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.Reference)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.Reference();
                        switch (object.referenceType) {
                        case "UNKNOWN_REFERENCE_TYPE":
                        case 0:
                            message.referenceType = 0;
                            break;
                        case "TABLE":
                        case 1:
                            message.referenceType = 1;
                            break;
                        case "COLUMN":
                        case 2:
                            message.referenceType = 2;
                            break;
                        case "ROW":
                        case 3:
                            message.referenceType = 3;
                            break;
                        case "CELL":
                        case 4:
                            message.referenceType = 4;
                            break;
                        }
                        if (object.tableId != null)
                            message.tableId = String(object.tableId);
                        if (object.columnId != null)
                            message.columnId = String(object.columnId);
                        if (object.rowId != null)
                            message.rowId = String(object.rowId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Reference message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.Reference
                     * @static
                     * @param {factset.protobuf.stach.table.Reference} message Reference
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Reference.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.referenceType = options.enums === String ? "UNKNOWN_REFERENCE_TYPE" : 0;
                            object.tableId = "";
                            object.columnId = "";
                            object.rowId = "";
                        }
                        if (message.referenceType != null && message.hasOwnProperty("referenceType"))
                            object.referenceType = options.enums === String ? $root.factset.protobuf.stach.table.ReferenceType[message.referenceType] : message.referenceType;
                        if (message.tableId != null && message.hasOwnProperty("tableId"))
                            object.tableId = message.tableId;
                        if (message.columnId != null && message.hasOwnProperty("columnId"))
                            object.columnId = message.columnId;
                        if (message.rowId != null && message.hasOwnProperty("rowId"))
                            object.rowId = message.rowId;
                        return object;
                    };

                    /**
                     * Converts this Reference to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.Reference
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Reference.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Reference;
                })();

                /**
                 * ReferenceFilterMode enum.
                 * @name factset.protobuf.stach.table.ReferenceFilterMode
                 * @enum {string}
                 * @property {number} INCLUDE=0 INCLUDE value
                 * @property {number} EXCLUDE=1 EXCLUDE value
                 */
                table.ReferenceFilterMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INCLUDE"] = 0;
                    values[valuesById[1] = "EXCLUDE"] = 1;
                    return values;
                })();

                /**
                 * ReferenceType enum.
                 * @name factset.protobuf.stach.table.ReferenceType
                 * @enum {string}
                 * @property {number} UNKNOWN_REFERENCE_TYPE=0 UNKNOWN_REFERENCE_TYPE value
                 * @property {number} TABLE=1 TABLE value
                 * @property {number} COLUMN=2 COLUMN value
                 * @property {number} ROW=3 ROW value
                 * @property {number} CELL=4 CELL value
                 */
                table.ReferenceType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_REFERENCE_TYPE"] = 0;
                    values[valuesById[1] = "TABLE"] = 1;
                    values[valuesById[2] = "COLUMN"] = 2;
                    values[valuesById[3] = "ROW"] = 3;
                    values[valuesById[4] = "CELL"] = 4;
                    return values;
                })();

                table.SeriesData = (function() {

                    /**
                     * Properties of a SeriesData.
                     * @memberof factset.protobuf.stach.table
                     * @interface ISeriesData
                     * @property {Object.<string,number>|null} [ranges] SeriesData ranges
                     * @property {factset.protobuf.stach.table.IDoubleArray|null} [doubleArray] SeriesData doubleArray
                     * @property {factset.protobuf.stach.table.IFloatArray|null} [floatArray] SeriesData floatArray
                     * @property {factset.protobuf.stach.table.IInt32Array|null} [int32Array] SeriesData int32Array
                     * @property {factset.protobuf.stach.table.IInt64Array|null} [int64Array] SeriesData int64Array
                     * @property {factset.protobuf.stach.table.IBoolArray|null} [boolArray] SeriesData boolArray
                     * @property {factset.protobuf.stach.table.IStringArray|null} [stringArray] SeriesData stringArray
                     * @property {factset.protobuf.stach.table.IDurationArray|null} [durationArray] SeriesData durationArray
                     * @property {factset.protobuf.stach.table.ITimestampArray|null} [timestampArray] SeriesData timestampArray
                     */

                    /**
                     * Constructs a new SeriesData.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a SeriesData.
                     * @implements ISeriesData
                     * @constructor
                     * @param {factset.protobuf.stach.table.ISeriesData=} [properties] Properties to set
                     */
                    function SeriesData(properties) {
                        this.ranges = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SeriesData ranges.
                     * @member {Object.<string,number>} ranges
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.ranges = $util.emptyObject;

                    /**
                     * SeriesData doubleArray.
                     * @member {factset.protobuf.stach.table.IDoubleArray|null|undefined} doubleArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.doubleArray = null;

                    /**
                     * SeriesData floatArray.
                     * @member {factset.protobuf.stach.table.IFloatArray|null|undefined} floatArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.floatArray = null;

                    /**
                     * SeriesData int32Array.
                     * @member {factset.protobuf.stach.table.IInt32Array|null|undefined} int32Array
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.int32Array = null;

                    /**
                     * SeriesData int64Array.
                     * @member {factset.protobuf.stach.table.IInt64Array|null|undefined} int64Array
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.int64Array = null;

                    /**
                     * SeriesData boolArray.
                     * @member {factset.protobuf.stach.table.IBoolArray|null|undefined} boolArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.boolArray = null;

                    /**
                     * SeriesData stringArray.
                     * @member {factset.protobuf.stach.table.IStringArray|null|undefined} stringArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.stringArray = null;

                    /**
                     * SeriesData durationArray.
                     * @member {factset.protobuf.stach.table.IDurationArray|null|undefined} durationArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.durationArray = null;

                    /**
                     * SeriesData timestampArray.
                     * @member {factset.protobuf.stach.table.ITimestampArray|null|undefined} timestampArray
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    SeriesData.prototype.timestampArray = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * SeriesData data.
                     * @member {"doubleArray"|"floatArray"|"int32Array"|"int64Array"|"boolArray"|"stringArray"|"durationArray"|"timestampArray"|undefined} data
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     */
                    Object.defineProperty(SeriesData.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["doubleArray", "floatArray", "int32Array", "int64Array", "boolArray", "stringArray", "durationArray", "timestampArray"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new SeriesData instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesData=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.SeriesData} SeriesData instance
                     */
                    SeriesData.create = function create(properties) {
                        return new SeriesData(properties);
                    };

                    /**
                     * Encodes the specified SeriesData message. Does not implicitly {@link factset.protobuf.stach.table.SeriesData.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesData} message SeriesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ranges != null && message.hasOwnProperty("ranges"))
                            for (var keys = Object.keys(message.ranges), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.ranges[keys[i]]).ldelim();
                        if (message.doubleArray != null && message.hasOwnProperty("doubleArray"))
                            $root.factset.protobuf.stach.table.DoubleArray.encode(message.doubleArray, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                        if (message.floatArray != null && message.hasOwnProperty("floatArray"))
                            $root.factset.protobuf.stach.table.FloatArray.encode(message.floatArray, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                        if (message.int32Array != null && message.hasOwnProperty("int32Array"))
                            $root.factset.protobuf.stach.table.Int32Array.encode(message.int32Array, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
                        if (message.int64Array != null && message.hasOwnProperty("int64Array"))
                            $root.factset.protobuf.stach.table.Int64Array.encode(message.int64Array, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
                        if (message.boolArray != null && message.hasOwnProperty("boolArray"))
                            $root.factset.protobuf.stach.table.BoolArray.encode(message.boolArray, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
                        if (message.stringArray != null && message.hasOwnProperty("stringArray"))
                            $root.factset.protobuf.stach.table.StringArray.encode(message.stringArray, writer.uint32(/* id 107, wireType 2 =*/858).fork()).ldelim();
                        if (message.durationArray != null && message.hasOwnProperty("durationArray"))
                            $root.factset.protobuf.stach.table.DurationArray.encode(message.durationArray, writer.uint32(/* id 108, wireType 2 =*/866).fork()).ldelim();
                        if (message.timestampArray != null && message.hasOwnProperty("timestampArray"))
                            $root.factset.protobuf.stach.table.TimestampArray.encode(message.timestampArray, writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified SeriesData message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesData} message SeriesData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SeriesData message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.SeriesData} SeriesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.SeriesData(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.ranges === $util.emptyObject)
                                    message.ranges = {};
                                key = reader.int32();
                                reader.pos++;
                                message.ranges[key] = reader.int32();
                                break;
                            case 100:
                                message.doubleArray = $root.factset.protobuf.stach.table.DoubleArray.decode(reader, reader.uint32());
                                break;
                            case 101:
                                message.floatArray = $root.factset.protobuf.stach.table.FloatArray.decode(reader, reader.uint32());
                                break;
                            case 102:
                                message.int32Array = $root.factset.protobuf.stach.table.Int32Array.decode(reader, reader.uint32());
                                break;
                            case 103:
                                message.int64Array = $root.factset.protobuf.stach.table.Int64Array.decode(reader, reader.uint32());
                                break;
                            case 106:
                                message.boolArray = $root.factset.protobuf.stach.table.BoolArray.decode(reader, reader.uint32());
                                break;
                            case 107:
                                message.stringArray = $root.factset.protobuf.stach.table.StringArray.decode(reader, reader.uint32());
                                break;
                            case 108:
                                message.durationArray = $root.factset.protobuf.stach.table.DurationArray.decode(reader, reader.uint32());
                                break;
                            case 109:
                                message.timestampArray = $root.factset.protobuf.stach.table.TimestampArray.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SeriesData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.SeriesData} SeriesData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SeriesData message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SeriesData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.ranges != null && message.hasOwnProperty("ranges")) {
                            if (!$util.isObject(message.ranges))
                                return "ranges: object expected";
                            var key = Object.keys(message.ranges);
                            for (var i = 0; i < key.length; ++i) {
                                if (!$util.key32Re.test(key[i]))
                                    return "ranges: integer key{k:int32} expected";
                                if (!$util.isInteger(message.ranges[key[i]]))
                                    return "ranges: integer{k:int32} expected";
                            }
                        }
                        if (message.doubleArray != null && message.hasOwnProperty("doubleArray")) {
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.DoubleArray.verify(message.doubleArray);
                                if (error)
                                    return "doubleArray." + error;
                            }
                        }
                        if (message.floatArray != null && message.hasOwnProperty("floatArray")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.FloatArray.verify(message.floatArray);
                                if (error)
                                    return "floatArray." + error;
                            }
                        }
                        if (message.int32Array != null && message.hasOwnProperty("int32Array")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.Int32Array.verify(message.int32Array);
                                if (error)
                                    return "int32Array." + error;
                            }
                        }
                        if (message.int64Array != null && message.hasOwnProperty("int64Array")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.Int64Array.verify(message.int64Array);
                                if (error)
                                    return "int64Array." + error;
                            }
                        }
                        if (message.boolArray != null && message.hasOwnProperty("boolArray")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.BoolArray.verify(message.boolArray);
                                if (error)
                                    return "boolArray." + error;
                            }
                        }
                        if (message.stringArray != null && message.hasOwnProperty("stringArray")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.StringArray.verify(message.stringArray);
                                if (error)
                                    return "stringArray." + error;
                            }
                        }
                        if (message.durationArray != null && message.hasOwnProperty("durationArray")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.DurationArray.verify(message.durationArray);
                                if (error)
                                    return "durationArray." + error;
                            }
                        }
                        if (message.timestampArray != null && message.hasOwnProperty("timestampArray")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.TimestampArray.verify(message.timestampArray);
                                if (error)
                                    return "timestampArray." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a SeriesData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.SeriesData} SeriesData
                     */
                    SeriesData.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.SeriesData)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.SeriesData();
                        if (object.ranges) {
                            if (typeof object.ranges !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.ranges: object expected");
                            message.ranges = {};
                            for (var keys = Object.keys(object.ranges), i = 0; i < keys.length; ++i)
                                message.ranges[keys[i]] = object.ranges[keys[i]] | 0;
                        }
                        if (object.doubleArray != null) {
                            if (typeof object.doubleArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.doubleArray: object expected");
                            message.doubleArray = $root.factset.protobuf.stach.table.DoubleArray.fromObject(object.doubleArray);
                        }
                        if (object.floatArray != null) {
                            if (typeof object.floatArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.floatArray: object expected");
                            message.floatArray = $root.factset.protobuf.stach.table.FloatArray.fromObject(object.floatArray);
                        }
                        if (object.int32Array != null) {
                            if (typeof object.int32Array !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.int32Array: object expected");
                            message.int32Array = $root.factset.protobuf.stach.table.Int32Array.fromObject(object.int32Array);
                        }
                        if (object.int64Array != null) {
                            if (typeof object.int64Array !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.int64Array: object expected");
                            message.int64Array = $root.factset.protobuf.stach.table.Int64Array.fromObject(object.int64Array);
                        }
                        if (object.boolArray != null) {
                            if (typeof object.boolArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.boolArray: object expected");
                            message.boolArray = $root.factset.protobuf.stach.table.BoolArray.fromObject(object.boolArray);
                        }
                        if (object.stringArray != null) {
                            if (typeof object.stringArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.stringArray: object expected");
                            message.stringArray = $root.factset.protobuf.stach.table.StringArray.fromObject(object.stringArray);
                        }
                        if (object.durationArray != null) {
                            if (typeof object.durationArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.durationArray: object expected");
                            message.durationArray = $root.factset.protobuf.stach.table.DurationArray.fromObject(object.durationArray);
                        }
                        if (object.timestampArray != null) {
                            if (typeof object.timestampArray !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesData.timestampArray: object expected");
                            message.timestampArray = $root.factset.protobuf.stach.table.TimestampArray.fromObject(object.timestampArray);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a SeriesData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @static
                     * @param {factset.protobuf.stach.table.SeriesData} message SeriesData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SeriesData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.ranges = {};
                        var keys2;
                        if (message.ranges && (keys2 = Object.keys(message.ranges)).length) {
                            object.ranges = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.ranges[keys2[j]] = message.ranges[keys2[j]];
                        }
                        if (message.doubleArray != null && message.hasOwnProperty("doubleArray")) {
                            object.doubleArray = $root.factset.protobuf.stach.table.DoubleArray.toObject(message.doubleArray, options);
                            if (options.oneofs)
                                object.data = "doubleArray";
                        }
                        if (message.floatArray != null && message.hasOwnProperty("floatArray")) {
                            object.floatArray = $root.factset.protobuf.stach.table.FloatArray.toObject(message.floatArray, options);
                            if (options.oneofs)
                                object.data = "floatArray";
                        }
                        if (message.int32Array != null && message.hasOwnProperty("int32Array")) {
                            object.int32Array = $root.factset.protobuf.stach.table.Int32Array.toObject(message.int32Array, options);
                            if (options.oneofs)
                                object.data = "int32Array";
                        }
                        if (message.int64Array != null && message.hasOwnProperty("int64Array")) {
                            object.int64Array = $root.factset.protobuf.stach.table.Int64Array.toObject(message.int64Array, options);
                            if (options.oneofs)
                                object.data = "int64Array";
                        }
                        if (message.boolArray != null && message.hasOwnProperty("boolArray")) {
                            object.boolArray = $root.factset.protobuf.stach.table.BoolArray.toObject(message.boolArray, options);
                            if (options.oneofs)
                                object.data = "boolArray";
                        }
                        if (message.stringArray != null && message.hasOwnProperty("stringArray")) {
                            object.stringArray = $root.factset.protobuf.stach.table.StringArray.toObject(message.stringArray, options);
                            if (options.oneofs)
                                object.data = "stringArray";
                        }
                        if (message.durationArray != null && message.hasOwnProperty("durationArray")) {
                            object.durationArray = $root.factset.protobuf.stach.table.DurationArray.toObject(message.durationArray, options);
                            if (options.oneofs)
                                object.data = "durationArray";
                        }
                        if (message.timestampArray != null && message.hasOwnProperty("timestampArray")) {
                            object.timestampArray = $root.factset.protobuf.stach.table.TimestampArray.toObject(message.timestampArray, options);
                            if (options.oneofs)
                                object.data = "timestampArray";
                        }
                        return object;
                    };

                    /**
                     * Converts this SeriesData to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.SeriesData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SeriesData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SeriesData;
                })();

                table.SeriesDefinition = (function() {

                    /**
                     * Properties of a SeriesDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @interface ISeriesDefinition
                     * @property {string|null} [id] SeriesDefinition id
                     * @property {string|null} [name] SeriesDefinition name
                     * @property {string|null} [description] SeriesDefinition description
                     * @property {factset.protobuf.stach.table.DataType|null} [type] SeriesDefinition type
                     * @property {boolean|null} [isDimension] SeriesDefinition isDimension
                     * @property {boolean|null} [isHidden] SeriesDefinition isHidden
                     * @property {string|null} [nextSiblingId] SeriesDefinition nextSiblingId
                     * @property {string|null} [parentId] SeriesDefinition parentId
                     * @property {string|null} [headerId] SeriesDefinition headerId
                     * @property {number|null} [headerIndex] SeriesDefinition headerIndex
                     * @property {factset.protobuf.stach.table.ISeriesFormat|null} [format] SeriesDefinition format
                     */

                    /**
                     * Constructs a new SeriesDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a SeriesDefinition.
                     * @implements ISeriesDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.table.ISeriesDefinition=} [properties] Properties to set
                     */
                    function SeriesDefinition(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SeriesDefinition id.
                     * @member {string} id
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.id = "";

                    /**
                     * SeriesDefinition name.
                     * @member {string} name
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.name = "";

                    /**
                     * SeriesDefinition description.
                     * @member {string} description
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.description = "";

                    /**
                     * SeriesDefinition type.
                     * @member {factset.protobuf.stach.table.DataType} type
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.type = 0;

                    /**
                     * SeriesDefinition isDimension.
                     * @member {boolean} isDimension
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.isDimension = false;

                    /**
                     * SeriesDefinition isHidden.
                     * @member {boolean} isHidden
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.isHidden = false;

                    /**
                     * SeriesDefinition nextSiblingId.
                     * @member {string} nextSiblingId
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.nextSiblingId = "";

                    /**
                     * SeriesDefinition parentId.
                     * @member {string} parentId
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.parentId = "";

                    /**
                     * SeriesDefinition headerId.
                     * @member {string} headerId
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.headerId = "";

                    /**
                     * SeriesDefinition headerIndex.
                     * @member {number} headerIndex
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.headerIndex = 0;

                    /**
                     * SeriesDefinition format.
                     * @member {factset.protobuf.stach.table.ISeriesFormat|null|undefined} format
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     */
                    SeriesDefinition.prototype.format = null;

                    /**
                     * Creates a new SeriesDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.SeriesDefinition} SeriesDefinition instance
                     */
                    SeriesDefinition.create = function create(properties) {
                        return new SeriesDefinition(properties);
                    };

                    /**
                     * Encodes the specified SeriesDefinition message. Does not implicitly {@link factset.protobuf.stach.table.SeriesDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesDefinition} message SeriesDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                        if (message.isDimension != null && message.hasOwnProperty("isDimension"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDimension);
                        if (message.isHidden != null && message.hasOwnProperty("isHidden"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isHidden);
                        if (message.nextSiblingId != null && message.hasOwnProperty("nextSiblingId"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.nextSiblingId);
                        if (message.parentId != null && message.hasOwnProperty("parentId"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.parentId);
                        if (message.headerId != null && message.hasOwnProperty("headerId"))
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.headerId);
                        if (message.headerIndex != null && message.hasOwnProperty("headerIndex"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.headerIndex);
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.factset.protobuf.stach.table.SeriesFormat.encode(message.format, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified SeriesDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesDefinition} message SeriesDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SeriesDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.SeriesDefinition} SeriesDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.SeriesDefinition();
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
                                message.type = reader.int32();
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
                                message.headerIndex = reader.int32();
                                break;
                            case 11:
                                message.format = $root.factset.protobuf.stach.table.SeriesFormat.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SeriesDefinition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.SeriesDefinition} SeriesDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesDefinition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SeriesDefinition message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SeriesDefinition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            switch (message.type) {
                            default:
                                return "type: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                break;
                            }
                        if (message.isDimension != null && message.hasOwnProperty("isDimension"))
                            if (typeof message.isDimension !== "boolean")
                                return "isDimension: boolean expected";
                        if (message.isHidden != null && message.hasOwnProperty("isHidden"))
                            if (typeof message.isHidden !== "boolean")
                                return "isHidden: boolean expected";
                        if (message.nextSiblingId != null && message.hasOwnProperty("nextSiblingId"))
                            if (!$util.isString(message.nextSiblingId))
                                return "nextSiblingId: string expected";
                        if (message.parentId != null && message.hasOwnProperty("parentId"))
                            if (!$util.isString(message.parentId))
                                return "parentId: string expected";
                        if (message.headerId != null && message.hasOwnProperty("headerId"))
                            if (!$util.isString(message.headerId))
                                return "headerId: string expected";
                        if (message.headerIndex != null && message.hasOwnProperty("headerIndex"))
                            if (!$util.isInteger(message.headerIndex))
                                return "headerIndex: integer expected";
                        if (message.format != null && message.hasOwnProperty("format")) {
                            var error = $root.factset.protobuf.stach.table.SeriesFormat.verify(message.format);
                            if (error)
                                return "format." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a SeriesDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.SeriesDefinition} SeriesDefinition
                     */
                    SeriesDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.SeriesDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.SeriesDefinition();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.description != null)
                            message.description = String(object.description);
                        switch (object.type) {
                        case "UNKNOWN_DATATYPE":
                        case 0:
                            message.type = 0;
                            break;
                        case "DOUBLE":
                        case 1:
                            message.type = 1;
                            break;
                        case "FLOAT":
                        case 2:
                            message.type = 2;
                            break;
                        case "INT32":
                        case 3:
                            message.type = 3;
                            break;
                        case "INT64":
                        case 4:
                            message.type = 4;
                            break;
                        case "BOOL":
                        case 7:
                            message.type = 7;
                            break;
                        case "STRING":
                        case 8:
                            message.type = 8;
                            break;
                        case "DURATION":
                        case 9:
                            message.type = 9;
                            break;
                        case "TIMESTAMP":
                        case 10:
                            message.type = 10;
                            break;
                        }
                        if (object.isDimension != null)
                            message.isDimension = Boolean(object.isDimension);
                        if (object.isHidden != null)
                            message.isHidden = Boolean(object.isHidden);
                        if (object.nextSiblingId != null)
                            message.nextSiblingId = String(object.nextSiblingId);
                        if (object.parentId != null)
                            message.parentId = String(object.parentId);
                        if (object.headerId != null)
                            message.headerId = String(object.headerId);
                        if (object.headerIndex != null)
                            message.headerIndex = object.headerIndex | 0;
                        if (object.format != null) {
                            if (typeof object.format !== "object")
                                throw TypeError(".factset.protobuf.stach.table.SeriesDefinition.format: object expected");
                            message.format = $root.factset.protobuf.stach.table.SeriesFormat.fromObject(object.format);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a SeriesDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.SeriesDefinition} message SeriesDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SeriesDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.description = "";
                            object.type = options.enums === String ? "UNKNOWN_DATATYPE" : 0;
                            object.isDimension = false;
                            object.isHidden = false;
                            object.nextSiblingId = "";
                            object.parentId = "";
                            object.headerId = "";
                            object.headerIndex = 0;
                            object.format = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = options.enums === String ? $root.factset.protobuf.stach.table.DataType[message.type] : message.type;
                        if (message.isDimension != null && message.hasOwnProperty("isDimension"))
                            object.isDimension = message.isDimension;
                        if (message.isHidden != null && message.hasOwnProperty("isHidden"))
                            object.isHidden = message.isHidden;
                        if (message.nextSiblingId != null && message.hasOwnProperty("nextSiblingId"))
                            object.nextSiblingId = message.nextSiblingId;
                        if (message.parentId != null && message.hasOwnProperty("parentId"))
                            object.parentId = message.parentId;
                        if (message.headerId != null && message.hasOwnProperty("headerId"))
                            object.headerId = message.headerId;
                        if (message.headerIndex != null && message.hasOwnProperty("headerIndex"))
                            object.headerIndex = message.headerIndex;
                        if (message.format != null && message.hasOwnProperty("format"))
                            object.format = $root.factset.protobuf.stach.table.SeriesFormat.toObject(message.format, options);
                        return object;
                    };

                    /**
                     * Converts this SeriesDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.SeriesDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SeriesDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SeriesDefinition;
                })();

                table.SeriesFormat = (function() {

                    /**
                     * Properties of a SeriesFormat.
                     * @memberof factset.protobuf.stach.table
                     * @interface ISeriesFormat
                     * @property {string|null} [format] SeriesFormat format
                     * @property {string|null} [nullFormat] SeriesFormat nullFormat
                     * @property {factset.protobuf.stach.table.HorizontalAlignment|null} [halign] SeriesFormat halign
                     * @property {factset.protobuf.stach.table.VerticalAlignment|null} [valign] SeriesFormat valign
                     */

                    /**
                     * Constructs a new SeriesFormat.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a SeriesFormat.
                     * @implements ISeriesFormat
                     * @constructor
                     * @param {factset.protobuf.stach.table.ISeriesFormat=} [properties] Properties to set
                     */
                    function SeriesFormat(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SeriesFormat format.
                     * @member {string} format
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @instance
                     */
                    SeriesFormat.prototype.format = "";

                    /**
                     * SeriesFormat nullFormat.
                     * @member {string} nullFormat
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @instance
                     */
                    SeriesFormat.prototype.nullFormat = "";

                    /**
                     * SeriesFormat halign.
                     * @member {factset.protobuf.stach.table.HorizontalAlignment} halign
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @instance
                     */
                    SeriesFormat.prototype.halign = 0;

                    /**
                     * SeriesFormat valign.
                     * @member {factset.protobuf.stach.table.VerticalAlignment} valign
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @instance
                     */
                    SeriesFormat.prototype.valign = 0;

                    /**
                     * Creates a new SeriesFormat instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesFormat=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.SeriesFormat} SeriesFormat instance
                     */
                    SeriesFormat.create = function create(properties) {
                        return new SeriesFormat(properties);
                    };

                    /**
                     * Encodes the specified SeriesFormat message. Does not implicitly {@link factset.protobuf.stach.table.SeriesFormat.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesFormat} message SeriesFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesFormat.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.format != null && message.hasOwnProperty("format"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.format);
                        if (message.nullFormat != null && message.hasOwnProperty("nullFormat"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nullFormat);
                        if (message.halign != null && message.hasOwnProperty("halign"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.halign);
                        if (message.valign != null && message.hasOwnProperty("valign"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.valign);
                        return writer;
                    };

                    /**
                     * Encodes the specified SeriesFormat message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesFormat.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {factset.protobuf.stach.table.ISeriesFormat} message SeriesFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SeriesFormat.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SeriesFormat message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.SeriesFormat} SeriesFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesFormat.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.SeriesFormat();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.format = reader.string();
                                break;
                            case 2:
                                message.nullFormat = reader.string();
                                break;
                            case 3:
                                message.halign = reader.int32();
                                break;
                            case 4:
                                message.valign = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SeriesFormat message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.SeriesFormat} SeriesFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SeriesFormat.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SeriesFormat message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SeriesFormat.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.format != null && message.hasOwnProperty("format"))
                            if (!$util.isString(message.format))
                                return "format: string expected";
                        if (message.nullFormat != null && message.hasOwnProperty("nullFormat"))
                            if (!$util.isString(message.nullFormat))
                                return "nullFormat: string expected";
                        if (message.halign != null && message.hasOwnProperty("halign"))
                            switch (message.halign) {
                            default:
                                return "halign: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.valign != null && message.hasOwnProperty("valign"))
                            switch (message.valign) {
                            default:
                                return "valign: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a SeriesFormat message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.SeriesFormat} SeriesFormat
                     */
                    SeriesFormat.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.SeriesFormat)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.SeriesFormat();
                        if (object.format != null)
                            message.format = String(object.format);
                        if (object.nullFormat != null)
                            message.nullFormat = String(object.nullFormat);
                        switch (object.halign) {
                        case "UNKNOWN_HALIGN":
                        case 0:
                            message.halign = 0;
                            break;
                        case "LEFT":
                        case 1:
                            message.halign = 1;
                            break;
                        case "CENTER":
                        case 2:
                            message.halign = 2;
                            break;
                        case "RIGHT":
                        case 3:
                            message.halign = 3;
                            break;
                        }
                        switch (object.valign) {
                        case "UNKNOWN_VALIGN":
                        case 0:
                            message.valign = 0;
                            break;
                        case "TOP":
                        case 1:
                            message.valign = 1;
                            break;
                        case "MIDDLE":
                        case 2:
                            message.valign = 2;
                            break;
                        case "BOTTOM":
                        case 3:
                            message.valign = 3;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a SeriesFormat message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @static
                     * @param {factset.protobuf.stach.table.SeriesFormat} message SeriesFormat
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SeriesFormat.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.format = "";
                            object.nullFormat = "";
                            object.halign = options.enums === String ? "UNKNOWN_HALIGN" : 0;
                            object.valign = options.enums === String ? "UNKNOWN_VALIGN" : 0;
                        }
                        if (message.format != null && message.hasOwnProperty("format"))
                            object.format = message.format;
                        if (message.nullFormat != null && message.hasOwnProperty("nullFormat"))
                            object.nullFormat = message.nullFormat;
                        if (message.halign != null && message.hasOwnProperty("halign"))
                            object.halign = options.enums === String ? $root.factset.protobuf.stach.table.HorizontalAlignment[message.halign] : message.halign;
                        if (message.valign != null && message.hasOwnProperty("valign"))
                            object.valign = options.enums === String ? $root.factset.protobuf.stach.table.VerticalAlignment[message.valign] : message.valign;
                        return object;
                    };

                    /**
                     * Converts this SeriesFormat to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.SeriesFormat
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SeriesFormat.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SeriesFormat;
                })();

                table.Table = (function() {

                    /**
                     * Properties of a Table.
                     * @memberof factset.protobuf.stach.table
                     * @interface ITable
                     * @property {factset.protobuf.stach.table.ITableDefinition|null} [definition] Table definition
                     * @property {factset.protobuf.stach.table.ITableData|null} [data] Table data
                     */

                    /**
                     * Constructs a new Table.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a Table.
                     * @implements ITable
                     * @constructor
                     * @param {factset.protobuf.stach.table.ITable=} [properties] Properties to set
                     */
                    function Table(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Table definition.
                     * @member {factset.protobuf.stach.table.ITableDefinition|null|undefined} definition
                     * @memberof factset.protobuf.stach.table.Table
                     * @instance
                     */
                    Table.prototype.definition = null;

                    /**
                     * Table data.
                     * @member {factset.protobuf.stach.table.ITableData|null|undefined} data
                     * @memberof factset.protobuf.stach.table.Table
                     * @instance
                     */
                    Table.prototype.data = null;

                    /**
                     * Creates a new Table instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {factset.protobuf.stach.table.ITable=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.Table} Table instance
                     */
                    Table.create = function create(properties) {
                        return new Table(properties);
                    };

                    /**
                     * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.table.Table.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {factset.protobuf.stach.table.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.definition != null && message.hasOwnProperty("definition"))
                            $root.factset.protobuf.stach.table.TableDefinition.encode(message.definition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.data != null && message.hasOwnProperty("data"))
                            $root.factset.protobuf.stach.table.TableData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Table.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {factset.protobuf.stach.table.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Table message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.Table} Table
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Table.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.Table();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.definition = $root.factset.protobuf.stach.table.TableDefinition.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.data = $root.factset.protobuf.stach.table.TableData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Table message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.Table} Table
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Table.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Table message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Table.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.definition != null && message.hasOwnProperty("definition")) {
                            var error = $root.factset.protobuf.stach.table.TableDefinition.verify(message.definition);
                            if (error)
                                return "definition." + error;
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            var error = $root.factset.protobuf.stach.table.TableData.verify(message.data);
                            if (error)
                                return "data." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Table message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.Table} Table
                     */
                    Table.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.Table)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.Table();
                        if (object.definition != null) {
                            if (typeof object.definition !== "object")
                                throw TypeError(".factset.protobuf.stach.table.Table.definition: object expected");
                            message.definition = $root.factset.protobuf.stach.table.TableDefinition.fromObject(object.definition);
                        }
                        if (object.data != null) {
                            if (typeof object.data !== "object")
                                throw TypeError(".factset.protobuf.stach.table.Table.data: object expected");
                            message.data = $root.factset.protobuf.stach.table.TableData.fromObject(object.data);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Table message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.Table
                     * @static
                     * @param {factset.protobuf.stach.table.Table} message Table
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Table.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.definition = null;
                            object.data = null;
                        }
                        if (message.definition != null && message.hasOwnProperty("definition"))
                            object.definition = $root.factset.protobuf.stach.table.TableDefinition.toObject(message.definition, options);
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = $root.factset.protobuf.stach.table.TableData.toObject(message.data, options);
                        return object;
                    };

                    /**
                     * Converts this Table to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.Table
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Table.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Table;
                })();

                table.TableData = (function() {

                    /**
                     * Properties of a TableData.
                     * @memberof factset.protobuf.stach.table
                     * @interface ITableData
                     * @property {Array.<factset.protobuf.stach.table.ISeriesDefinition>|null} [rows] TableData rows
                     * @property {Object.<string,factset.protobuf.stach.table.ISeriesData>|null} [columns] TableData columns
                     * @property {factset.protobuf.stach.table.IMetadataCollection|null} [metadata] TableData metadata
                     */

                    /**
                     * Constructs a new TableData.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a TableData.
                     * @implements ITableData
                     * @constructor
                     * @param {factset.protobuf.stach.table.ITableData=} [properties] Properties to set
                     */
                    function TableData(properties) {
                        this.rows = [];
                        this.columns = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableData rows.
                     * @member {Array.<factset.protobuf.stach.table.ISeriesDefinition>} rows
                     * @memberof factset.protobuf.stach.table.TableData
                     * @instance
                     */
                    TableData.prototype.rows = $util.emptyArray;

                    /**
                     * TableData columns.
                     * @member {Object.<string,factset.protobuf.stach.table.ISeriesData>} columns
                     * @memberof factset.protobuf.stach.table.TableData
                     * @instance
                     */
                    TableData.prototype.columns = $util.emptyObject;

                    /**
                     * TableData metadata.
                     * @member {factset.protobuf.stach.table.IMetadataCollection|null|undefined} metadata
                     * @memberof factset.protobuf.stach.table.TableData
                     * @instance
                     */
                    TableData.prototype.metadata = null;

                    /**
                     * Creates a new TableData instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {factset.protobuf.stach.table.ITableData=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.TableData} TableData instance
                     */
                    TableData.create = function create(properties) {
                        return new TableData(properties);
                    };

                    /**
                     * Encodes the specified TableData message. Does not implicitly {@link factset.protobuf.stach.table.TableData.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {factset.protobuf.stach.table.ITableData} message TableData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.rows != null && message.rows.length)
                            for (var i = 0; i < message.rows.length; ++i)
                                $root.factset.protobuf.stach.table.SeriesDefinition.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.columns != null && message.hasOwnProperty("columns"))
                            for (var keys = Object.keys(message.columns), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.SeriesData.encode(message.columns[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            $root.factset.protobuf.stach.table.MetadataCollection.encode(message.metadata, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TableData message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TableData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {factset.protobuf.stach.table.ITableData} message TableData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableData message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.TableData} TableData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.TableData(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.rows && message.rows.length))
                                    message.rows = [];
                                message.rows.push($root.factset.protobuf.stach.table.SeriesDefinition.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.columns === $util.emptyObject)
                                    message.columns = {};
                                key = reader.string();
                                reader.pos++;
                                message.columns[key] = $root.factset.protobuf.stach.table.SeriesData.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.metadata = $root.factset.protobuf.stach.table.MetadataCollection.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TableData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.TableData} TableData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TableData message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.rows != null && message.hasOwnProperty("rows")) {
                            if (!Array.isArray(message.rows))
                                return "rows: array expected";
                            for (var i = 0; i < message.rows.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.SeriesDefinition.verify(message.rows[i]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!$util.isObject(message.columns))
                                return "columns: object expected";
                            var key = Object.keys(message.columns);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.SeriesData.verify(message.columns[key[i]]);
                                if (error)
                                    return "columns." + error;
                            }
                        }
                        if (message.metadata != null && message.hasOwnProperty("metadata")) {
                            var error = $root.factset.protobuf.stach.table.MetadataCollection.verify(message.metadata);
                            if (error)
                                return "metadata." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a TableData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.TableData} TableData
                     */
                    TableData.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.TableData)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.TableData();
                        if (object.rows) {
                            if (!Array.isArray(object.rows))
                                throw TypeError(".factset.protobuf.stach.table.TableData.rows: array expected");
                            message.rows = [];
                            for (var i = 0; i < object.rows.length; ++i) {
                                if (typeof object.rows[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.TableData.rows: object expected");
                                message.rows[i] = $root.factset.protobuf.stach.table.SeriesDefinition.fromObject(object.rows[i]);
                            }
                        }
                        if (object.columns) {
                            if (typeof object.columns !== "object")
                                throw TypeError(".factset.protobuf.stach.table.TableData.columns: object expected");
                            message.columns = {};
                            for (var keys = Object.keys(object.columns), i = 0; i < keys.length; ++i) {
                                if (typeof object.columns[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.TableData.columns: object expected");
                                message.columns[keys[i]] = $root.factset.protobuf.stach.table.SeriesData.fromObject(object.columns[keys[i]]);
                            }
                        }
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".factset.protobuf.stach.table.TableData.metadata: object expected");
                            message.metadata = $root.factset.protobuf.stach.table.MetadataCollection.fromObject(object.metadata);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.TableData
                     * @static
                     * @param {factset.protobuf.stach.table.TableData} message TableData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.rows = [];
                        if (options.objects || options.defaults)
                            object.columns = {};
                        if (options.defaults)
                            object.metadata = null;
                        if (message.rows && message.rows.length) {
                            object.rows = [];
                            for (var j = 0; j < message.rows.length; ++j)
                                object.rows[j] = $root.factset.protobuf.stach.table.SeriesDefinition.toObject(message.rows[j], options);
                        }
                        var keys2;
                        if (message.columns && (keys2 = Object.keys(message.columns)).length) {
                            object.columns = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.columns[keys2[j]] = $root.factset.protobuf.stach.table.SeriesData.toObject(message.columns[keys2[j]], options);
                        }
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.factset.protobuf.stach.table.MetadataCollection.toObject(message.metadata, options);
                        return object;
                    };

                    /**
                     * Converts this TableData to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.TableData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableData;
                })();

                table.TableDefinition = (function() {

                    /**
                     * Properties of a TableDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @interface ITableDefinition
                     * @property {string|null} [headerTableId] TableDefinition headerTableId
                     * @property {Array.<factset.protobuf.stach.table.ISeriesDefinition>|null} [columns] TableDefinition columns
                     */

                    /**
                     * Constructs a new TableDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a TableDefinition.
                     * @implements ITableDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.table.ITableDefinition=} [properties] Properties to set
                     */
                    function TableDefinition(properties) {
                        this.columns = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableDefinition headerTableId.
                     * @member {string} headerTableId
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @instance
                     */
                    TableDefinition.prototype.headerTableId = "";

                    /**
                     * TableDefinition columns.
                     * @member {Array.<factset.protobuf.stach.table.ISeriesDefinition>} columns
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @instance
                     */
                    TableDefinition.prototype.columns = $util.emptyArray;

                    /**
                     * Creates a new TableDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ITableDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.TableDefinition} TableDefinition instance
                     */
                    TableDefinition.create = function create(properties) {
                        return new TableDefinition(properties);
                    };

                    /**
                     * Encodes the specified TableDefinition message. Does not implicitly {@link factset.protobuf.stach.table.TableDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ITableDefinition} message TableDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.headerTableId != null && message.hasOwnProperty("headerTableId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.headerTableId);
                        if (message.columns != null && message.columns.length)
                            for (var i = 0; i < message.columns.length; ++i)
                                $root.factset.protobuf.stach.table.SeriesDefinition.encode(message.columns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TableDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TableDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ITableDefinition} message TableDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.TableDefinition} TableDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.TableDefinition();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.headerTableId = reader.string();
                                break;
                            case 2:
                                if (!(message.columns && message.columns.length))
                                    message.columns = [];
                                message.columns.push($root.factset.protobuf.stach.table.SeriesDefinition.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TableDefinition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.TableDefinition} TableDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableDefinition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TableDefinition message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableDefinition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.headerTableId != null && message.hasOwnProperty("headerTableId"))
                            if (!$util.isString(message.headerTableId))
                                return "headerTableId: string expected";
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!Array.isArray(message.columns))
                                return "columns: array expected";
                            for (var i = 0; i < message.columns.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.SeriesDefinition.verify(message.columns[i]);
                                if (error)
                                    return "columns." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TableDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.TableDefinition} TableDefinition
                     */
                    TableDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.TableDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.TableDefinition();
                        if (object.headerTableId != null)
                            message.headerTableId = String(object.headerTableId);
                        if (object.columns) {
                            if (!Array.isArray(object.columns))
                                throw TypeError(".factset.protobuf.stach.table.TableDefinition.columns: array expected");
                            message.columns = [];
                            for (var i = 0; i < object.columns.length; ++i) {
                                if (typeof object.columns[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.TableDefinition.columns: object expected");
                                message.columns[i] = $root.factset.protobuf.stach.table.SeriesDefinition.fromObject(object.columns[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.TableDefinition} message TableDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.columns = [];
                        if (options.defaults)
                            object.headerTableId = "";
                        if (message.headerTableId != null && message.hasOwnProperty("headerTableId"))
                            object.headerTableId = message.headerTableId;
                        if (message.columns && message.columns.length) {
                            object.columns = [];
                            for (var j = 0; j < message.columns.length; ++j)
                                object.columns[j] = $root.factset.protobuf.stach.table.SeriesDefinition.toObject(message.columns[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TableDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.TableDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableDefinition;
                })();

                /**
                 * VerticalAlignment enum.
                 * @name factset.protobuf.stach.table.VerticalAlignment
                 * @enum {string}
                 * @property {number} UNKNOWN_VALIGN=0 UNKNOWN_VALIGN value
                 * @property {number} TOP=1 TOP value
                 * @property {number} MIDDLE=2 MIDDLE value
                 * @property {number} BOTTOM=3 BOTTOM value
                 */
                table.VerticalAlignment = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_VALIGN"] = 0;
                    values[valuesById[1] = "TOP"] = 1;
                    values[valuesById[2] = "MIDDLE"] = 2;
                    values[valuesById[3] = "BOTTOM"] = 3;
                    return values;
                })();

                table.DoubleArray = (function() {

                    /**
                     * Properties of a DoubleArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface IDoubleArray
                     * @property {Array.<number>|null} [values] DoubleArray values
                     */

                    /**
                     * Constructs a new DoubleArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a DoubleArray.
                     * @implements IDoubleArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.IDoubleArray=} [properties] Properties to set
                     */
                    function DoubleArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DoubleArray values.
                     * @member {Array.<number>} values
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @instance
                     */
                    DoubleArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new DoubleArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDoubleArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.DoubleArray} DoubleArray instance
                     */
                    DoubleArray.create = function create(properties) {
                        return new DoubleArray(properties);
                    };

                    /**
                     * Encodes the specified DoubleArray message. Does not implicitly {@link factset.protobuf.stach.table.DoubleArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDoubleArray} message DoubleArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoubleArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.values.length; ++i)
                                writer.double(message.values[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified DoubleArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.DoubleArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDoubleArray} message DoubleArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoubleArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DoubleArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.DoubleArray} DoubleArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoubleArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.DoubleArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.values.push(reader.double());
                                } else
                                    message.values.push(reader.double());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DoubleArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.DoubleArray} DoubleArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoubleArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DoubleArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DoubleArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (typeof message.values[i] !== "number")
                                    return "values: number[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a DoubleArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.DoubleArray} DoubleArray
                     */
                    DoubleArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.DoubleArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.DoubleArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.DoubleArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = Number(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DoubleArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @static
                     * @param {factset.protobuf.stach.table.DoubleArray} message DoubleArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DoubleArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = options.json && !isFinite(message.values[j]) ? String(message.values[j]) : message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this DoubleArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.DoubleArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DoubleArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DoubleArray;
                })();

                table.FloatArray = (function() {

                    /**
                     * Properties of a FloatArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface IFloatArray
                     * @property {Array.<number>|null} [values] FloatArray values
                     */

                    /**
                     * Constructs a new FloatArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a FloatArray.
                     * @implements IFloatArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.IFloatArray=} [properties] Properties to set
                     */
                    function FloatArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FloatArray values.
                     * @member {Array.<number>} values
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @instance
                     */
                    FloatArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new FloatArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {factset.protobuf.stach.table.IFloatArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.FloatArray} FloatArray instance
                     */
                    FloatArray.create = function create(properties) {
                        return new FloatArray(properties);
                    };

                    /**
                     * Encodes the specified FloatArray message. Does not implicitly {@link factset.protobuf.stach.table.FloatArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {factset.protobuf.stach.table.IFloatArray} message FloatArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FloatArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.values.length; ++i)
                                writer.float(message.values[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified FloatArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.FloatArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {factset.protobuf.stach.table.IFloatArray} message FloatArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FloatArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FloatArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.FloatArray} FloatArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FloatArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.FloatArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.values.push(reader.float());
                                } else
                                    message.values.push(reader.float());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FloatArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.FloatArray} FloatArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FloatArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FloatArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FloatArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (typeof message.values[i] !== "number")
                                    return "values: number[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FloatArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.FloatArray} FloatArray
                     */
                    FloatArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.FloatArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.FloatArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.FloatArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = Number(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a FloatArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @static
                     * @param {factset.protobuf.stach.table.FloatArray} message FloatArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FloatArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = options.json && !isFinite(message.values[j]) ? String(message.values[j]) : message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this FloatArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.FloatArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FloatArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FloatArray;
                })();

                table.Int32Array = (function() {

                    /**
                     * Properties of an Int32Array.
                     * @memberof factset.protobuf.stach.table
                     * @interface IInt32Array
                     * @property {Array.<number>|null} [values] Int32Array values
                     */

                    /**
                     * Constructs a new Int32Array.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents an Int32Array.
                     * @implements IInt32Array
                     * @constructor
                     * @param {factset.protobuf.stach.table.IInt32Array=} [properties] Properties to set
                     */
                    function Int32Array(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Int32Array values.
                     * @member {Array.<number>} values
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @instance
                     */
                    Int32Array.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new Int32Array instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt32Array=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.Int32Array} Int32Array instance
                     */
                    Int32Array.create = function create(properties) {
                        return new Int32Array(properties);
                    };

                    /**
                     * Encodes the specified Int32Array message. Does not implicitly {@link factset.protobuf.stach.table.Int32Array.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt32Array} message Int32Array message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Int32Array.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.values.length; ++i)
                                writer.int32(message.values[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Int32Array message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Int32Array.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt32Array} message Int32Array message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Int32Array.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Int32Array message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.Int32Array} Int32Array
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Int32Array.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.Int32Array();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.values.push(reader.int32());
                                } else
                                    message.values.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Int32Array message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.Int32Array} Int32Array
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Int32Array.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Int32Array message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Int32Array.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (!$util.isInteger(message.values[i]))
                                    return "values: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an Int32Array message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.Int32Array} Int32Array
                     */
                    Int32Array.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.Int32Array)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.Int32Array();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.Int32Array.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = object.values[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Int32Array message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @static
                     * @param {factset.protobuf.stach.table.Int32Array} message Int32Array
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Int32Array.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Int32Array to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.Int32Array
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Int32Array.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Int32Array;
                })();

                table.Int64Array = (function() {

                    /**
                     * Properties of an Int64Array.
                     * @memberof factset.protobuf.stach.table
                     * @interface IInt64Array
                     * @property {Array.<number|Long>|null} [values] Int64Array values
                     */

                    /**
                     * Constructs a new Int64Array.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents an Int64Array.
                     * @implements IInt64Array
                     * @constructor
                     * @param {factset.protobuf.stach.table.IInt64Array=} [properties] Properties to set
                     */
                    function Int64Array(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Int64Array values.
                     * @member {Array.<number|Long>} values
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @instance
                     */
                    Int64Array.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new Int64Array instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt64Array=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.Int64Array} Int64Array instance
                     */
                    Int64Array.create = function create(properties) {
                        return new Int64Array(properties);
                    };

                    /**
                     * Encodes the specified Int64Array message. Does not implicitly {@link factset.protobuf.stach.table.Int64Array.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt64Array} message Int64Array message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Int64Array.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.values.length; ++i)
                                writer.int64(message.values[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Int64Array message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Int64Array.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {factset.protobuf.stach.table.IInt64Array} message Int64Array message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Int64Array.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Int64Array message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.Int64Array} Int64Array
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Int64Array.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.Int64Array();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.values.push(reader.int64());
                                } else
                                    message.values.push(reader.int64());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Int64Array message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.Int64Array} Int64Array
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Int64Array.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Int64Array message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Int64Array.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (!$util.isInteger(message.values[i]) && !(message.values[i] && $util.isInteger(message.values[i].low) && $util.isInteger(message.values[i].high)))
                                    return "values: integer|Long[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an Int64Array message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.Int64Array} Int64Array
                     */
                    Int64Array.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.Int64Array)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.Int64Array();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.Int64Array.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                if ($util.Long)
                                    (message.values[i] = $util.Long.fromValue(object.values[i])).unsigned = false;
                                else if (typeof object.values[i] === "string")
                                    message.values[i] = parseInt(object.values[i], 10);
                                else if (typeof object.values[i] === "number")
                                    message.values[i] = object.values[i];
                                else if (typeof object.values[i] === "object")
                                    message.values[i] = new $util.LongBits(object.values[i].low >>> 0, object.values[i].high >>> 0).toNumber();
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Int64Array message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @static
                     * @param {factset.protobuf.stach.table.Int64Array} message Int64Array
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Int64Array.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                if (typeof message.values[j] === "number")
                                    object.values[j] = options.longs === String ? String(message.values[j]) : message.values[j];
                                else
                                    object.values[j] = options.longs === String ? $util.Long.prototype.toString.call(message.values[j]) : options.longs === Number ? new $util.LongBits(message.values[j].low >>> 0, message.values[j].high >>> 0).toNumber() : message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Int64Array to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.Int64Array
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Int64Array.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Int64Array;
                })();

                table.BoolArray = (function() {

                    /**
                     * Properties of a BoolArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface IBoolArray
                     * @property {Array.<boolean>|null} [values] BoolArray values
                     */

                    /**
                     * Constructs a new BoolArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a BoolArray.
                     * @implements IBoolArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.IBoolArray=} [properties] Properties to set
                     */
                    function BoolArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BoolArray values.
                     * @member {Array.<boolean>} values
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @instance
                     */
                    BoolArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new BoolArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {factset.protobuf.stach.table.IBoolArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.BoolArray} BoolArray instance
                     */
                    BoolArray.create = function create(properties) {
                        return new BoolArray(properties);
                    };

                    /**
                     * Encodes the specified BoolArray message. Does not implicitly {@link factset.protobuf.stach.table.BoolArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {factset.protobuf.stach.table.IBoolArray} message BoolArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BoolArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.values.length; ++i)
                                writer.bool(message.values[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified BoolArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.BoolArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {factset.protobuf.stach.table.IBoolArray} message BoolArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BoolArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BoolArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.BoolArray} BoolArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BoolArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.BoolArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.values.push(reader.bool());
                                } else
                                    message.values.push(reader.bool());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BoolArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.BoolArray} BoolArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BoolArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BoolArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BoolArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (typeof message.values[i] !== "boolean")
                                    return "values: boolean[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a BoolArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.BoolArray} BoolArray
                     */
                    BoolArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.BoolArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.BoolArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.BoolArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = Boolean(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a BoolArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @static
                     * @param {factset.protobuf.stach.table.BoolArray} message BoolArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BoolArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this BoolArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.BoolArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BoolArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BoolArray;
                })();

                table.StringArray = (function() {

                    /**
                     * Properties of a StringArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface IStringArray
                     * @property {Array.<string>|null} [values] StringArray values
                     */

                    /**
                     * Constructs a new StringArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a StringArray.
                     * @implements IStringArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.IStringArray=} [properties] Properties to set
                     */
                    function StringArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StringArray values.
                     * @member {Array.<string>} values
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @instance
                     */
                    StringArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new StringArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {factset.protobuf.stach.table.IStringArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.StringArray} StringArray instance
                     */
                    StringArray.create = function create(properties) {
                        return new StringArray(properties);
                    };

                    /**
                     * Encodes the specified StringArray message. Does not implicitly {@link factset.protobuf.stach.table.StringArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {factset.protobuf.stach.table.IStringArray} message StringArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified StringArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.StringArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {factset.protobuf.stach.table.IStringArray} message StringArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StringArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.StringArray} StringArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.StringArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StringArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.StringArray} StringArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StringArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StringArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (!$util.isString(message.values[i]))
                                    return "values: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a StringArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.StringArray} StringArray
                     */
                    StringArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.StringArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.StringArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.StringArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = String(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StringArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @static
                     * @param {factset.protobuf.stach.table.StringArray} message StringArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StringArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this StringArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.StringArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StringArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return StringArray;
                })();

                table.DurationArray = (function() {

                    /**
                     * Properties of a DurationArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface IDurationArray
                     * @property {Array.<google.protobuf.IDuration>|null} [values] DurationArray values
                     */

                    /**
                     * Constructs a new DurationArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a DurationArray.
                     * @implements IDurationArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.IDurationArray=} [properties] Properties to set
                     */
                    function DurationArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DurationArray values.
                     * @member {Array.<google.protobuf.IDuration>} values
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @instance
                     */
                    DurationArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new DurationArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDurationArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.DurationArray} DurationArray instance
                     */
                    DurationArray.create = function create(properties) {
                        return new DurationArray(properties);
                    };

                    /**
                     * Encodes the specified DurationArray message. Does not implicitly {@link factset.protobuf.stach.table.DurationArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDurationArray} message DurationArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DurationArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.google.protobuf.Duration.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DurationArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.DurationArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {factset.protobuf.stach.table.IDurationArray} message DurationArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DurationArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DurationArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.DurationArray} DurationArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DurationArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.DurationArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.google.protobuf.Duration.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DurationArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.DurationArray} DurationArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DurationArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DurationArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DurationArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.google.protobuf.Duration.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a DurationArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.DurationArray} DurationArray
                     */
                    DurationArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.DurationArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.DurationArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.DurationArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.DurationArray.values: object expected");
                                message.values[i] = $root.google.protobuf.Duration.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DurationArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @static
                     * @param {factset.protobuf.stach.table.DurationArray} message DurationArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DurationArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.google.protobuf.Duration.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this DurationArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.DurationArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DurationArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DurationArray;
                })();

                table.TimestampArray = (function() {

                    /**
                     * Properties of a TimestampArray.
                     * @memberof factset.protobuf.stach.table
                     * @interface ITimestampArray
                     * @property {Array.<google.protobuf.ITimestamp>|null} [values] TimestampArray values
                     */

                    /**
                     * Constructs a new TimestampArray.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a TimestampArray.
                     * @implements ITimestampArray
                     * @constructor
                     * @param {factset.protobuf.stach.table.ITimestampArray=} [properties] Properties to set
                     */
                    function TimestampArray(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TimestampArray values.
                     * @member {Array.<google.protobuf.ITimestamp>} values
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @instance
                     */
                    TimestampArray.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new TimestampArray instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {factset.protobuf.stach.table.ITimestampArray=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.TimestampArray} TimestampArray instance
                     */
                    TimestampArray.create = function create(properties) {
                        return new TimestampArray(properties);
                    };

                    /**
                     * Encodes the specified TimestampArray message. Does not implicitly {@link factset.protobuf.stach.table.TimestampArray.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {factset.protobuf.stach.table.ITimestampArray} message TimestampArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TimestampArray.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.google.protobuf.Timestamp.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TimestampArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TimestampArray.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {factset.protobuf.stach.table.ITimestampArray} message TimestampArray message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TimestampArray.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TimestampArray message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.TimestampArray} TimestampArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TimestampArray.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.TimestampArray();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.google.protobuf.Timestamp.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TimestampArray message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.TimestampArray} TimestampArray
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TimestampArray.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TimestampArray message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TimestampArray.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.google.protobuf.Timestamp.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TimestampArray message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.TimestampArray} TimestampArray
                     */
                    TimestampArray.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.TimestampArray)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.TimestampArray();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".factset.protobuf.stach.table.TimestampArray.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.TimestampArray.values: object expected");
                                message.values[i] = $root.google.protobuf.Timestamp.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TimestampArray message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @static
                     * @param {factset.protobuf.stach.table.TimestampArray} message TimestampArray
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TimestampArray.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.google.protobuf.Timestamp.toObject(message.values[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TimestampArray to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.TimestampArray
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TimestampArray.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TimestampArray;
                })();

                return table;
            })();

            return stach;
        })();

        return protobuf;
    })();

    return factset;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                var message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Duration;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && message.hasOwnProperty("fields"))
                    for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        key = reader.string();
                        reader.pos++;
                        message.fields[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    var key = Object.keys(message.fields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                var message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                var keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && message.hasOwnProperty("nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && message.hasOwnProperty("structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && message.hasOwnProperty("listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                var message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {string}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                var message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListValue;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
