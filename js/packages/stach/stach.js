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

            stach.RowOrganizedPackage = (function() {

                /**
                 * Properties of a RowOrganizedPackage.
                 * @memberof factset.protobuf.stach
                 * @interface IRowOrganizedPackage
                 * @property {string|null} [version] RowOrganizedPackage version
                 * @property {Object.<string,factset.protobuf.stach.RowOrganizedPackage.ITable>|null} [tables] RowOrganizedPackage tables
                 */

                /**
                 * Constructs a new RowOrganizedPackage.
                 * @memberof factset.protobuf.stach
                 * @classdesc Represents a RowOrganizedPackage.
                 * @implements IRowOrganizedPackage
                 * @constructor
                 * @param {factset.protobuf.stach.IRowOrganizedPackage=} [properties] Properties to set
                 */
                function RowOrganizedPackage(properties) {
                    this.tables = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RowOrganizedPackage version.
                 * @member {string} version
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @instance
                 */
                RowOrganizedPackage.prototype.version = "";

                /**
                 * RowOrganizedPackage tables.
                 * @member {Object.<string,factset.protobuf.stach.RowOrganizedPackage.ITable>} tables
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @instance
                 */
                RowOrganizedPackage.prototype.tables = $util.emptyObject;

                /**
                 * Creates a new RowOrganizedPackage instance using the specified properties.
                 * @function create
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {factset.protobuf.stach.IRowOrganizedPackage=} [properties] Properties to set
                 * @returns {factset.protobuf.stach.RowOrganizedPackage} RowOrganizedPackage instance
                 */
                RowOrganizedPackage.create = function create(properties) {
                    return new RowOrganizedPackage(properties);
                };

                /**
                 * Encodes the specified RowOrganizedPackage message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.verify|verify} messages.
                 * @function encode
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {factset.protobuf.stach.IRowOrganizedPackage} message RowOrganizedPackage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RowOrganizedPackage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && message.hasOwnProperty("version"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                    if (message.tables != null && message.hasOwnProperty("tables"))
                        for (var keys = Object.keys(message.tables), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.factset.protobuf.stach.RowOrganizedPackage.Table.encode(message.tables[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified RowOrganizedPackage message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {factset.protobuf.stach.IRowOrganizedPackage} message RowOrganizedPackage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RowOrganizedPackage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RowOrganizedPackage message from the specified reader or buffer.
                 * @function decode
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {factset.protobuf.stach.RowOrganizedPackage} RowOrganizedPackage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RowOrganizedPackage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.version = reader.string();
                            break;
                        case 2:
                            reader.skip().pos++;
                            if (message.tables === $util.emptyObject)
                                message.tables = {};
                            key = reader.string();
                            reader.pos++;
                            message.tables[key] = $root.factset.protobuf.stach.RowOrganizedPackage.Table.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RowOrganizedPackage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {factset.protobuf.stach.RowOrganizedPackage} RowOrganizedPackage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RowOrganizedPackage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RowOrganizedPackage message.
                 * @function verify
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RowOrganizedPackage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.tables != null && message.hasOwnProperty("tables")) {
                        if (!$util.isObject(message.tables))
                            return "tables: object expected";
                        var key = Object.keys(message.tables);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.factset.protobuf.stach.RowOrganizedPackage.Table.verify(message.tables[key[i]]);
                            if (error)
                                return "tables." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RowOrganizedPackage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {factset.protobuf.stach.RowOrganizedPackage} RowOrganizedPackage
                 */
                RowOrganizedPackage.fromObject = function fromObject(object) {
                    if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage)
                        return object;
                    var message = new $root.factset.protobuf.stach.RowOrganizedPackage();
                    if (object.version != null)
                        message.version = String(object.version);
                    if (object.tables) {
                        if (typeof object.tables !== "object")
                            throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.tables: object expected");
                        message.tables = {};
                        for (var keys = Object.keys(object.tables), i = 0; i < keys.length; ++i) {
                            if (typeof object.tables[keys[i]] !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.tables: object expected");
                            message.tables[keys[i]] = $root.factset.protobuf.stach.RowOrganizedPackage.Table.fromObject(object.tables[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RowOrganizedPackage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @static
                 * @param {factset.protobuf.stach.RowOrganizedPackage} message RowOrganizedPackage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RowOrganizedPackage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.tables = {};
                    if (options.defaults)
                        object.version = "";
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    var keys2;
                    if (message.tables && (keys2 = Object.keys(message.tables)).length) {
                        object.tables = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.tables[keys2[j]] = $root.factset.protobuf.stach.RowOrganizedPackage.Table.toObject(message.tables[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this RowOrganizedPackage to JSON.
                 * @function toJSON
                 * @memberof factset.protobuf.stach.RowOrganizedPackage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RowOrganizedPackage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                RowOrganizedPackage.Table = (function() {

                    /**
                     * Properties of a Table.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface ITable
                     * @property {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition|null} [definition] Table definition
                     * @property {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition|null} [headersDefinition] Table headersDefinition
                     * @property {factset.protobuf.stach.RowOrganizedPackage.ITableData|null} [data] Table data
                     */

                    /**
                     * Constructs a new Table.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a Table.
                     * @implements ITable
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITable=} [properties] Properties to set
                     */
                    function Table(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Table definition.
                     * @member {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition|null|undefined} definition
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @instance
                     */
                    Table.prototype.definition = null;

                    /**
                     * Table headersDefinition.
                     * @member {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition|null|undefined} headersDefinition
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @instance
                     */
                    Table.prototype.headersDefinition = null;

                    /**
                     * Table data.
                     * @member {factset.protobuf.stach.RowOrganizedPackage.ITableData|null|undefined} data
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @instance
                     */
                    Table.prototype.data = null;

                    /**
                     * Creates a new Table instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITable=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Table} Table instance
                     */
                    Table.create = function create(properties) {
                        return new Table(properties);
                    };

                    /**
                     * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.Table.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.definition != null && message.hasOwnProperty("definition"))
                            $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.encode(message.definition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.headersDefinition != null && message.hasOwnProperty("headersDefinition"))
                            $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.encode(message.headersDefinition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.data != null && message.hasOwnProperty("data"))
                            $root.factset.protobuf.stach.RowOrganizedPackage.TableData.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.Table.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Table message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Table} Table
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Table.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.Table();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.definition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.headersDefinition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.data = $root.factset.protobuf.stach.RowOrganizedPackage.TableData.decode(reader, reader.uint32());
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Table} Table
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Table.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.definition != null && message.hasOwnProperty("definition")) {
                            var error = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.verify(message.definition);
                            if (error)
                                return "definition." + error;
                        }
                        if (message.headersDefinition != null && message.hasOwnProperty("headersDefinition")) {
                            var error = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.verify(message.headersDefinition);
                            if (error)
                                return "headersDefinition." + error;
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            var error = $root.factset.protobuf.stach.RowOrganizedPackage.TableData.verify(message.data);
                            if (error)
                                return "data." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Table message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Table} Table
                     */
                    Table.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.Table)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.Table();
                        if (object.definition != null) {
                            if (typeof object.definition !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Table.definition: object expected");
                            message.definition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.fromObject(object.definition);
                        }
                        if (object.headersDefinition != null) {
                            if (typeof object.headersDefinition !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Table.headersDefinition: object expected");
                            message.headersDefinition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.fromObject(object.headersDefinition);
                        }
                        if (object.data != null) {
                            if (typeof object.data !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Table.data: object expected");
                            message.data = $root.factset.protobuf.stach.RowOrganizedPackage.TableData.fromObject(object.data);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Table message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.Table} message Table
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Table.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.definition = null;
                            object.headersDefinition = null;
                            object.data = null;
                        }
                        if (message.definition != null && message.hasOwnProperty("definition"))
                            object.definition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.toObject(message.definition, options);
                        if (message.headersDefinition != null && message.hasOwnProperty("headersDefinition"))
                            object.headersDefinition = $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition.toObject(message.headersDefinition, options);
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = $root.factset.protobuf.stach.RowOrganizedPackage.TableData.toObject(message.data, options);
                        return object;
                    };

                    /**
                     * Converts this Table to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Table
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Table.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Table;
                })();

                RowOrganizedPackage.TableDefinition = (function() {

                    /**
                     * Properties of a TableDefinition.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface ITableDefinition
                     * @property {Array.<factset.protobuf.stach.table.IColumnDefinition>|null} [columns] TableDefinition columns
                     */

                    /**
                     * Constructs a new TableDefinition.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a TableDefinition.
                     * @implements ITableDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition=} [properties] Properties to set
                     */
                    function TableDefinition(properties) {
                        this.columns = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableDefinition columns.
                     * @member {Array.<factset.protobuf.stach.table.IColumnDefinition>} columns
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @instance
                     */
                    TableDefinition.prototype.columns = $util.emptyArray;

                    /**
                     * Creates a new TableDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableDefinition} TableDefinition instance
                     */
                    TableDefinition.create = function create(properties) {
                        return new TableDefinition(properties);
                    };

                    /**
                     * Encodes the specified TableDefinition message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.TableDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition} message TableDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.columns != null && message.columns.length)
                            for (var i = 0; i < message.columns.length; ++i)
                                $root.factset.protobuf.stach.table.ColumnDefinition.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified TableDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.TableDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableDefinition} message TableDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableDefinition} TableDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.columns && message.columns.length))
                                    message.columns = [];
                                message.columns.push($root.factset.protobuf.stach.table.ColumnDefinition.decode(reader, reader.uint32()));
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableDefinition} TableDefinition
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableDefinition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!Array.isArray(message.columns))
                                return "columns: array expected";
                            for (var i = 0; i < message.columns.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.ColumnDefinition.verify(message.columns[i]);
                                if (error)
                                    return "columns." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TableDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableDefinition} TableDefinition
                     */
                    TableDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.TableDefinition();
                        if (object.columns) {
                            if (!Array.isArray(object.columns))
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableDefinition.columns: array expected");
                            message.columns = [];
                            for (var i = 0; i < object.columns.length; ++i) {
                                if (typeof object.columns[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableDefinition.columns: object expected");
                                message.columns[i] = $root.factset.protobuf.stach.table.ColumnDefinition.fromObject(object.columns[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.TableDefinition} message TableDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.columns = [];
                        if (message.columns && message.columns.length) {
                            object.columns = [];
                            for (var j = 0; j < message.columns.length; ++j)
                                object.columns[j] = $root.factset.protobuf.stach.table.ColumnDefinition.toObject(message.columns[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TableDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableDefinition;
                })();

                RowOrganizedPackage.TableData = (function() {

                    /**
                     * Properties of a TableData.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface ITableData
                     * @property {Array.<factset.protobuf.stach.RowOrganizedPackage.IRow>|null} [rows] TableData rows
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [tableMetadata] TableData tableMetadata
                     * @property {Object.<string,factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata>|null} [columnMetadata] TableData columnMetadata
                     */

                    /**
                     * Constructs a new TableData.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a TableData.
                     * @implements ITableData
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableData=} [properties] Properties to set
                     */
                    function TableData(properties) {
                        this.rows = [];
                        this.tableMetadata = {};
                        this.columnMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableData rows.
                     * @member {Array.<factset.protobuf.stach.RowOrganizedPackage.IRow>} rows
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @instance
                     */
                    TableData.prototype.rows = $util.emptyArray;

                    /**
                     * TableData tableMetadata.
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} tableMetadata
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @instance
                     */
                    TableData.prototype.tableMetadata = $util.emptyObject;

                    /**
                     * TableData columnMetadata.
                     * @member {Object.<string,factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata>} columnMetadata
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @instance
                     */
                    TableData.prototype.columnMetadata = $util.emptyObject;

                    /**
                     * Creates a new TableData instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableData=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableData} TableData instance
                     */
                    TableData.create = function create(properties) {
                        return new TableData(properties);
                    };

                    /**
                     * Encodes the specified TableData message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.TableData.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableData} message TableData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.rows != null && message.rows.length)
                            for (var i = 0; i < message.rows.length; ++i)
                                $root.factset.protobuf.stach.RowOrganizedPackage.Row.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.tableMetadata != null && message.hasOwnProperty("tableMetadata"))
                            for (var keys = Object.keys(message.tableMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.tableMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.columnMetadata != null && message.hasOwnProperty("columnMetadata"))
                            for (var keys = Object.keys(message.columnMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.encode(message.columnMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified TableData message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.TableData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ITableData} message TableData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableData message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableData} TableData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.TableData(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.rows && message.rows.length))
                                    message.rows = [];
                                message.rows.push($root.factset.protobuf.stach.RowOrganizedPackage.Row.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.tableMetadata === $util.emptyObject)
                                    message.tableMetadata = {};
                                key = reader.string();
                                reader.pos++;
                                message.tableMetadata[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.columnMetadata === $util.emptyObject)
                                    message.columnMetadata = {};
                                key = reader.string();
                                reader.pos++;
                                message.columnMetadata[key] = $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.decode(reader, reader.uint32());
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableData} TableData
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
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
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
                                var error = $root.factset.protobuf.stach.RowOrganizedPackage.Row.verify(message.rows[i]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        if (message.tableMetadata != null && message.hasOwnProperty("tableMetadata")) {
                            if (!$util.isObject(message.tableMetadata))
                                return "tableMetadata: object expected";
                            var key = Object.keys(message.tableMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.tableMetadata[key[i]]);
                                if (error)
                                    return "tableMetadata." + error;
                            }
                        }
                        if (message.columnMetadata != null && message.hasOwnProperty("columnMetadata")) {
                            if (!$util.isObject(message.columnMetadata))
                                return "columnMetadata: object expected";
                            var key = Object.keys(message.columnMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.verify(message.columnMetadata[key[i]]);
                                if (error)
                                    return "columnMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TableData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.TableData} TableData
                     */
                    TableData.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.TableData)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.TableData();
                        if (object.rows) {
                            if (!Array.isArray(object.rows))
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.rows: array expected");
                            message.rows = [];
                            for (var i = 0; i < object.rows.length; ++i) {
                                if (typeof object.rows[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.rows: object expected");
                                message.rows[i] = $root.factset.protobuf.stach.RowOrganizedPackage.Row.fromObject(object.rows[i]);
                            }
                        }
                        if (object.tableMetadata) {
                            if (typeof object.tableMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.tableMetadata: object expected");
                            message.tableMetadata = {};
                            for (var keys = Object.keys(object.tableMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.tableMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.tableMetadata: object expected");
                                message.tableMetadata[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.tableMetadata[keys[i]]);
                            }
                        }
                        if (object.columnMetadata) {
                            if (typeof object.columnMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.columnMetadata: object expected");
                            message.columnMetadata = {};
                            for (var keys = Object.keys(object.columnMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.columnMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.TableData.columnMetadata: object expected");
                                message.columnMetadata[keys[i]] = $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.fromObject(object.columnMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.TableData} message TableData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.rows = [];
                        if (options.objects || options.defaults) {
                            object.tableMetadata = {};
                            object.columnMetadata = {};
                        }
                        if (message.rows && message.rows.length) {
                            object.rows = [];
                            for (var j = 0; j < message.rows.length; ++j)
                                object.rows[j] = $root.factset.protobuf.stach.RowOrganizedPackage.Row.toObject(message.rows[j], options);
                        }
                        var keys2;
                        if (message.tableMetadata && (keys2 = Object.keys(message.tableMetadata)).length) {
                            object.tableMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.tableMetadata[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.tableMetadata[keys2[j]], options);
                        }
                        if (message.columnMetadata && (keys2 = Object.keys(message.columnMetadata)).length) {
                            object.columnMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.columnMetadata[keys2[j]] = $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.toObject(message.columnMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TableData to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.TableData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TableData;
                })();

                RowOrganizedPackage.Row = (function() {

                    /**
                     * Properties of a Row.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface IRow
                     * @property {string|null} [id] Row id
                     * @property {factset.protobuf.stach.RowOrganizedPackage.Row.RowType|null} [rowType] Row rowType
                     * @property {google.protobuf.IListValue|null} [cells] Row cells
                     * @property {google.protobuf.IStruct|null} [values] Row values
                     * @property {Object.<string,factset.protobuf.stach.RowOrganizedPackage.ICellDetail>|null} [cellDetails] Row cellDetails
                     * @property {Object.<string,factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail>|null} [headerCellDetails] Row headerCellDetails
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [rowMetadata] Row rowMetadata
                     */

                    /**
                     * Constructs a new Row.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a Row.
                     * @implements IRow
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IRow=} [properties] Properties to set
                     */
                    function Row(properties) {
                        this.cellDetails = {};
                        this.headerCellDetails = {};
                        this.rowMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Row id.
                     * @member {string} id
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.id = "";

                    /**
                     * Row rowType.
                     * @member {factset.protobuf.stach.RowOrganizedPackage.Row.RowType} rowType
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.rowType = 0;

                    /**
                     * Row cells.
                     * @member {google.protobuf.IListValue|null|undefined} cells
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.cells = null;

                    /**
                     * Row values.
                     * @member {google.protobuf.IStruct|null|undefined} values
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.values = null;

                    /**
                     * Row cellDetails.
                     * @member {Object.<string,factset.protobuf.stach.RowOrganizedPackage.ICellDetail>} cellDetails
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.cellDetails = $util.emptyObject;

                    /**
                     * Row headerCellDetails.
                     * @member {Object.<string,factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail>} headerCellDetails
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.headerCellDetails = $util.emptyObject;

                    /**
                     * Row rowMetadata.
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} rowMetadata
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Row.prototype.rowMetadata = $util.emptyObject;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Row kind.
                     * @member {"cells"|"values"|undefined} kind
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     */
                    Object.defineProperty(Row.prototype, "kind", {
                        get: $util.oneOfGetter($oneOfFields = ["cells", "values"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Row instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IRow=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Row} Row instance
                     */
                    Row.create = function create(properties) {
                        return new Row(properties);
                    };

                    /**
                     * Encodes the specified Row message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.Row.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IRow} message Row message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Row.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.rowType != null && message.hasOwnProperty("rowType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rowType);
                        if (message.cells != null && message.hasOwnProperty("cells"))
                            $root.google.protobuf.ListValue.encode(message.cells, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.values != null && message.hasOwnProperty("values"))
                            $root.google.protobuf.Struct.encode(message.values, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.cellDetails != null && message.hasOwnProperty("cellDetails"))
                            for (var keys = Object.keys(message.cellDetails), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail.encode(message.cellDetails[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.headerCellDetails != null && message.hasOwnProperty("headerCellDetails"))
                            for (var keys = Object.keys(message.headerCellDetails), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.encode(message.headerCellDetails[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        if (message.rowMetadata != null && message.hasOwnProperty("rowMetadata"))
                            for (var keys = Object.keys(message.rowMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.rowMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified Row message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.Row.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IRow} message Row message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Row.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Row message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Row} Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Row.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.Row(), key;
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
                                message.cells = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.values = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                                break;
                            case 5:
                                reader.skip().pos++;
                                if (message.cellDetails === $util.emptyObject)
                                    message.cellDetails = {};
                                key = reader.string();
                                reader.pos++;
                                message.cellDetails[key] = $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail.decode(reader, reader.uint32());
                                break;
                            case 6:
                                reader.skip().pos++;
                                if (message.headerCellDetails === $util.emptyObject)
                                    message.headerCellDetails = {};
                                key = reader.string();
                                reader.pos++;
                                message.headerCellDetails[key] = $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.decode(reader, reader.uint32());
                                break;
                            case 7:
                                reader.skip().pos++;
                                if (message.rowMetadata === $util.emptyObject)
                                    message.rowMetadata = {};
                                key = reader.string();
                                reader.pos++;
                                message.rowMetadata[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Row message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Row} Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Row.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Row message.
                     * @function verify
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Row.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.rowType != null && message.hasOwnProperty("rowType"))
                            switch (message.rowType) {
                            default:
                                return "rowType: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.cells != null && message.hasOwnProperty("cells")) {
                            properties.kind = 1;
                            {
                                var error = $root.google.protobuf.ListValue.verify(message.cells);
                                if (error)
                                    return "cells." + error;
                            }
                        }
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (properties.kind === 1)
                                return "kind: multiple values";
                            properties.kind = 1;
                            {
                                var error = $root.google.protobuf.Struct.verify(message.values);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        if (message.cellDetails != null && message.hasOwnProperty("cellDetails")) {
                            if (!$util.isObject(message.cellDetails))
                                return "cellDetails: object expected";
                            var key = Object.keys(message.cellDetails);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail.verify(message.cellDetails[key[i]]);
                                if (error)
                                    return "cellDetails." + error;
                            }
                        }
                        if (message.headerCellDetails != null && message.hasOwnProperty("headerCellDetails")) {
                            if (!$util.isObject(message.headerCellDetails))
                                return "headerCellDetails: object expected";
                            var key = Object.keys(message.headerCellDetails);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.verify(message.headerCellDetails[key[i]]);
                                if (error)
                                    return "headerCellDetails." + error;
                            }
                        }
                        if (message.rowMetadata != null && message.hasOwnProperty("rowMetadata")) {
                            if (!$util.isObject(message.rowMetadata))
                                return "rowMetadata: object expected";
                            var key = Object.keys(message.rowMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.rowMetadata[key[i]]);
                                if (error)
                                    return "rowMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Row message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.Row} Row
                     */
                    Row.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.Row)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.Row();
                        if (object.id != null)
                            message.id = String(object.id);
                        switch (object.rowType) {
                        case "Body":
                        case 0:
                            message.rowType = 0;
                            break;
                        case "Header":
                        case 1:
                            message.rowType = 1;
                            break;
                        }
                        if (object.cells != null) {
                            if (typeof object.cells !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.cells: object expected");
                            message.cells = $root.google.protobuf.ListValue.fromObject(object.cells);
                        }
                        if (object.values != null) {
                            if (typeof object.values !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.values: object expected");
                            message.values = $root.google.protobuf.Struct.fromObject(object.values);
                        }
                        if (object.cellDetails) {
                            if (typeof object.cellDetails !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.cellDetails: object expected");
                            message.cellDetails = {};
                            for (var keys = Object.keys(object.cellDetails), i = 0; i < keys.length; ++i) {
                                if (typeof object.cellDetails[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.cellDetails: object expected");
                                message.cellDetails[keys[i]] = $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail.fromObject(object.cellDetails[keys[i]]);
                            }
                        }
                        if (object.headerCellDetails) {
                            if (typeof object.headerCellDetails !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.headerCellDetails: object expected");
                            message.headerCellDetails = {};
                            for (var keys = Object.keys(object.headerCellDetails), i = 0; i < keys.length; ++i) {
                                if (typeof object.headerCellDetails[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.headerCellDetails: object expected");
                                message.headerCellDetails[keys[i]] = $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.fromObject(object.headerCellDetails[keys[i]]);
                            }
                        }
                        if (object.rowMetadata) {
                            if (typeof object.rowMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.rowMetadata: object expected");
                            message.rowMetadata = {};
                            for (var keys = Object.keys(object.rowMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.rowMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.Row.rowMetadata: object expected");
                                message.rowMetadata[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.rowMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Row message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.Row} message Row
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Row.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults) {
                            object.cellDetails = {};
                            object.headerCellDetails = {};
                            object.rowMetadata = {};
                        }
                        if (options.defaults) {
                            object.id = "";
                            object.rowType = options.enums === String ? "Body" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.rowType != null && message.hasOwnProperty("rowType"))
                            object.rowType = options.enums === String ? $root.factset.protobuf.stach.RowOrganizedPackage.Row.RowType[message.rowType] : message.rowType;
                        if (message.cells != null && message.hasOwnProperty("cells")) {
                            object.cells = $root.google.protobuf.ListValue.toObject(message.cells, options);
                            if (options.oneofs)
                                object.kind = "cells";
                        }
                        if (message.values != null && message.hasOwnProperty("values")) {
                            object.values = $root.google.protobuf.Struct.toObject(message.values, options);
                            if (options.oneofs)
                                object.kind = "values";
                        }
                        var keys2;
                        if (message.cellDetails && (keys2 = Object.keys(message.cellDetails)).length) {
                            object.cellDetails = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.cellDetails[keys2[j]] = $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail.toObject(message.cellDetails[keys2[j]], options);
                        }
                        if (message.headerCellDetails && (keys2 = Object.keys(message.headerCellDetails)).length) {
                            object.headerCellDetails = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.headerCellDetails[keys2[j]] = $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.toObject(message.headerCellDetails[keys2[j]], options);
                        }
                        if (message.rowMetadata && (keys2 = Object.keys(message.rowMetadata)).length) {
                            object.rowMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.rowMetadata[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.rowMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Row to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.Row
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Row.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * RowType enum.
                     * @name factset.protobuf.stach.RowOrganizedPackage.Row.RowType
                     * @enum {string}
                     * @property {number} Body=0 Body value
                     * @property {number} Header=1 Header value
                     */
                    Row.RowType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Body"] = 0;
                        values[valuesById[1] = "Header"] = 1;
                        return values;
                    })();

                    return Row;
                })();

                RowOrganizedPackage.CellDetail = (function() {

                    /**
                     * Properties of a CellDetail.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface ICellDetail
                     * @property {number|null} [groupLevel] CellDetail groupLevel
                     * @property {factset.protobuf.stach.table.ICellDefinition|null} [cellDefinition] CellDetail cellDefinition
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [cellMetadata] CellDetail cellMetadata
                     */

                    /**
                     * Constructs a new CellDetail.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a CellDetail.
                     * @implements ICellDetail
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ICellDetail=} [properties] Properties to set
                     */
                    function CellDetail(properties) {
                        this.cellMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CellDetail groupLevel.
                     * @member {number} groupLevel
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @instance
                     */
                    CellDetail.prototype.groupLevel = 0;

                    /**
                     * CellDetail cellDefinition.
                     * @member {factset.protobuf.stach.table.ICellDefinition|null|undefined} cellDefinition
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @instance
                     */
                    CellDetail.prototype.cellDefinition = null;

                    /**
                     * CellDetail cellMetadata.
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} cellMetadata
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @instance
                     */
                    CellDetail.prototype.cellMetadata = $util.emptyObject;

                    /**
                     * Creates a new CellDetail instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ICellDetail=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.CellDetail} CellDetail instance
                     */
                    CellDetail.create = function create(properties) {
                        return new CellDetail(properties);
                    };

                    /**
                     * Encodes the specified CellDetail message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.CellDetail.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ICellDetail} message CellDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CellDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.groupLevel != null && message.hasOwnProperty("groupLevel"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.groupLevel);
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition"))
                            $root.factset.protobuf.stach.table.CellDefinition.encode(message.cellDefinition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.cellMetadata != null && message.hasOwnProperty("cellMetadata"))
                            for (var keys = Object.keys(message.cellMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.cellMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified CellDetail message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.CellDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.ICellDetail} message CellDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CellDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CellDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.CellDetail} CellDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CellDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.groupLevel = reader.int32();
                                break;
                            case 2:
                                message.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.decode(reader, reader.uint32());
                                break;
                            case 3:
                                reader.skip().pos++;
                                if (message.cellMetadata === $util.emptyObject)
                                    message.cellMetadata = {};
                                key = reader.string();
                                reader.pos++;
                                message.cellMetadata[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CellDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.CellDetail} CellDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CellDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CellDetail message.
                     * @function verify
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CellDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.groupLevel != null && message.hasOwnProperty("groupLevel"))
                            if (!$util.isInteger(message.groupLevel))
                                return "groupLevel: integer expected";
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition")) {
                            var error = $root.factset.protobuf.stach.table.CellDefinition.verify(message.cellDefinition);
                            if (error)
                                return "cellDefinition." + error;
                        }
                        if (message.cellMetadata != null && message.hasOwnProperty("cellMetadata")) {
                            if (!$util.isObject(message.cellMetadata))
                                return "cellMetadata: object expected";
                            var key = Object.keys(message.cellMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.cellMetadata[key[i]]);
                                if (error)
                                    return "cellMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a CellDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.CellDetail} CellDetail
                     */
                    CellDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.CellDetail();
                        if (object.groupLevel != null)
                            message.groupLevel = object.groupLevel | 0;
                        if (object.cellDefinition != null) {
                            if (typeof object.cellDefinition !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.CellDetail.cellDefinition: object expected");
                            message.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.fromObject(object.cellDefinition);
                        }
                        if (object.cellMetadata) {
                            if (typeof object.cellMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.CellDetail.cellMetadata: object expected");
                            message.cellMetadata = {};
                            for (var keys = Object.keys(object.cellMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.cellMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.CellDetail.cellMetadata: object expected");
                                message.cellMetadata[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.cellMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CellDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.CellDetail} message CellDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CellDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.cellMetadata = {};
                        if (options.defaults) {
                            object.groupLevel = 0;
                            object.cellDefinition = null;
                        }
                        if (message.groupLevel != null && message.hasOwnProperty("groupLevel"))
                            object.groupLevel = message.groupLevel;
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition"))
                            object.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.toObject(message.cellDefinition, options);
                        var keys2;
                        if (message.cellMetadata && (keys2 = Object.keys(message.cellMetadata)).length) {
                            object.cellMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.cellMetadata[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.cellMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this CellDetail to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.CellDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CellDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CellDetail;
                })();

                RowOrganizedPackage.HeaderCellDetail = (function() {

                    /**
                     * Properties of a HeaderCellDetail.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface IHeaderCellDetail
                     * @property {number|null} [colspan] HeaderCellDetail colspan
                     * @property {number|null} [rowspan] HeaderCellDetail rowspan
                     * @property {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.TableSource|null} [source] HeaderCellDetail source
                     * @property {number|null} [columnIndex] HeaderCellDetail columnIndex
                     * @property {factset.protobuf.stach.table.ICellDefinition|null} [cellDefinition] HeaderCellDetail cellDefinition
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [cellMetadata] HeaderCellDetail cellMetadata
                     */

                    /**
                     * Constructs a new HeaderCellDetail.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a HeaderCellDetail.
                     * @implements IHeaderCellDetail
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail=} [properties] Properties to set
                     */
                    function HeaderCellDetail(properties) {
                        this.cellMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * HeaderCellDetail colspan.
                     * @member {number} colspan
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.colspan = 0;

                    /**
                     * HeaderCellDetail rowspan.
                     * @member {number} rowspan
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.rowspan = 0;

                    /**
                     * HeaderCellDetail source.
                     * @member {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.TableSource} source
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.source = 0;

                    /**
                     * HeaderCellDetail columnIndex.
                     * @member {number} columnIndex
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.columnIndex = 0;

                    /**
                     * HeaderCellDetail cellDefinition.
                     * @member {factset.protobuf.stach.table.ICellDefinition|null|undefined} cellDefinition
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.cellDefinition = null;

                    /**
                     * HeaderCellDetail cellMetadata.
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} cellMetadata
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     */
                    HeaderCellDetail.prototype.cellMetadata = $util.emptyObject;

                    /**
                     * Creates a new HeaderCellDetail instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail} HeaderCellDetail instance
                     */
                    HeaderCellDetail.create = function create(properties) {
                        return new HeaderCellDetail(properties);
                    };

                    /**
                     * Encodes the specified HeaderCellDetail message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail} message HeaderCellDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeaderCellDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.colspan != null && message.hasOwnProperty("colspan"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.colspan);
                        if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rowspan);
                        if (message.source != null && message.hasOwnProperty("source"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.source);
                        if (message.columnIndex != null && message.hasOwnProperty("columnIndex"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.columnIndex);
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition"))
                            $root.factset.protobuf.stach.table.CellDefinition.encode(message.cellDefinition, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.cellMetadata != null && message.hasOwnProperty("cellMetadata"))
                            for (var keys = Object.keys(message.cellMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.cellMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified HeaderCellDetail message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IHeaderCellDetail} message HeaderCellDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeaderCellDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a HeaderCellDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail} HeaderCellDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeaderCellDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail(), key;
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
                                message.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.decode(reader, reader.uint32());
                                break;
                            case 6:
                                reader.skip().pos++;
                                if (message.cellMetadata === $util.emptyObject)
                                    message.cellMetadata = {};
                                key = reader.string();
                                reader.pos++;
                                message.cellMetadata[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a HeaderCellDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail} HeaderCellDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeaderCellDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HeaderCellDetail message.
                     * @function verify
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HeaderCellDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.colspan != null && message.hasOwnProperty("colspan"))
                            if (!$util.isInteger(message.colspan))
                                return "colspan: integer expected";
                        if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                            if (!$util.isInteger(message.rowspan))
                                return "rowspan: integer expected";
                        if (message.source != null && message.hasOwnProperty("source"))
                            switch (message.source) {
                            default:
                                return "source: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.columnIndex != null && message.hasOwnProperty("columnIndex"))
                            if (!$util.isInteger(message.columnIndex))
                                return "columnIndex: integer expected";
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition")) {
                            var error = $root.factset.protobuf.stach.table.CellDefinition.verify(message.cellDefinition);
                            if (error)
                                return "cellDefinition." + error;
                        }
                        if (message.cellMetadata != null && message.hasOwnProperty("cellMetadata")) {
                            if (!$util.isObject(message.cellMetadata))
                                return "cellMetadata: object expected";
                            var key = Object.keys(message.cellMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.cellMetadata[key[i]]);
                                if (error)
                                    return "cellMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a HeaderCellDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail} HeaderCellDetail
                     */
                    HeaderCellDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail();
                        if (object.colspan != null)
                            message.colspan = object.colspan | 0;
                        if (object.rowspan != null)
                            message.rowspan = object.rowspan | 0;
                        switch (object.source) {
                        case "UNKNOWN":
                        case 0:
                            message.source = 0;
                            break;
                        case "NONE":
                        case 1:
                            message.source = 1;
                            break;
                        case "PRIMARY":
                        case 2:
                            message.source = 2;
                            break;
                        case "HEADERS":
                        case 3:
                            message.source = 3;
                            break;
                        }
                        if (object.columnIndex != null)
                            message.columnIndex = object.columnIndex | 0;
                        if (object.cellDefinition != null) {
                            if (typeof object.cellDefinition !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.cellDefinition: object expected");
                            message.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.fromObject(object.cellDefinition);
                        }
                        if (object.cellMetadata) {
                            if (typeof object.cellMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.cellMetadata: object expected");
                            message.cellMetadata = {};
                            for (var keys = Object.keys(object.cellMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.cellMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.cellMetadata: object expected");
                                message.cellMetadata[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.cellMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a HeaderCellDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail} message HeaderCellDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HeaderCellDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.cellMetadata = {};
                        if (options.defaults) {
                            object.colspan = 0;
                            object.rowspan = 0;
                            object.source = options.enums === String ? "UNKNOWN" : 0;
                            object.columnIndex = 0;
                            object.cellDefinition = null;
                        }
                        if (message.colspan != null && message.hasOwnProperty("colspan"))
                            object.colspan = message.colspan;
                        if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                            object.rowspan = message.rowspan;
                        if (message.source != null && message.hasOwnProperty("source"))
                            object.source = options.enums === String ? $root.factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.TableSource[message.source] : message.source;
                        if (message.columnIndex != null && message.hasOwnProperty("columnIndex"))
                            object.columnIndex = message.columnIndex;
                        if (message.cellDefinition != null && message.hasOwnProperty("cellDefinition"))
                            object.cellDefinition = $root.factset.protobuf.stach.table.CellDefinition.toObject(message.cellDefinition, options);
                        var keys2;
                        if (message.cellMetadata && (keys2 = Object.keys(message.cellMetadata)).length) {
                            object.cellMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.cellMetadata[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.cellMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this HeaderCellDetail to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HeaderCellDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * TableSource enum.
                     * @name factset.protobuf.stach.RowOrganizedPackage.HeaderCellDetail.TableSource
                     * @enum {string}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} NONE=1 NONE value
                     * @property {number} PRIMARY=2 PRIMARY value
                     * @property {number} HEADERS=3 HEADERS value
                     */
                    HeaderCellDetail.TableSource = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "NONE"] = 1;
                        values[valuesById[2] = "PRIMARY"] = 2;
                        values[valuesById[3] = "HEADERS"] = 3;
                        return values;
                    })();

                    return HeaderCellDetail;
                })();

                RowOrganizedPackage.MapOfMetadata = (function() {

                    /**
                     * Properties of a MapOfMetadata.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @interface IMapOfMetadata
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [items] MapOfMetadata items
                     */

                    /**
                     * Constructs a new MapOfMetadata.
                     * @memberof factset.protobuf.stach.RowOrganizedPackage
                     * @classdesc Represents a MapOfMetadata.
                     * @implements IMapOfMetadata
                     * @constructor
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata=} [properties] Properties to set
                     */
                    function MapOfMetadata(properties) {
                        this.items = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MapOfMetadata items.
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} items
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @instance
                     */
                    MapOfMetadata.prototype.items = $util.emptyObject;

                    /**
                     * Creates a new MapOfMetadata instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata} MapOfMetadata instance
                     */
                    MapOfMetadata.create = function create(properties) {
                        return new MapOfMetadata(properties);
                    };

                    /**
                     * Encodes the specified MapOfMetadata message. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata} message MapOfMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MapOfMetadata.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.items != null && message.hasOwnProperty("items"))
                            for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified MapOfMetadata message, length delimited. Does not implicitly {@link factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.IMapOfMetadata} message MapOfMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MapOfMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MapOfMetadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata} MapOfMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MapOfMetadata.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.items === $util.emptyObject)
                                    message.items = {};
                                key = reader.string();
                                reader.pos++;
                                message.items[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MapOfMetadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata} MapOfMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MapOfMetadata.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MapOfMetadata message.
                     * @function verify
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MapOfMetadata.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.items != null && message.hasOwnProperty("items")) {
                            if (!$util.isObject(message.items))
                                return "items: object expected";
                            var key = Object.keys(message.items);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.items[key[i]]);
                                if (error)
                                    return "items." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MapOfMetadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata} MapOfMetadata
                     */
                    MapOfMetadata.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata)
                            return object;
                        var message = new $root.factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata();
                        if (object.items) {
                            if (typeof object.items !== "object")
                                throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.items: object expected");
                            message.items = {};
                            for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                                if (typeof object.items[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata.items: object expected");
                                message.items[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.items[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MapOfMetadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @static
                     * @param {factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata} message MapOfMetadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MapOfMetadata.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.items = {};
                        var keys2;
                        if (message.items && (keys2 = Object.keys(message.items)).length) {
                            object.items = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.items[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.items[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this MapOfMetadata to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.RowOrganizedPackage.MapOfMetadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MapOfMetadata.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MapOfMetadata;
                })();

                return RowOrganizedPackage;
            })();

            stach.table = (function() {

                /**
                 * Namespace table.
                 * @memberof factset.protobuf.stach
                 * @namespace
                 */
                var table = {};

                table.CellDefinition = (function() {

                    /**
                     * Properties of a CellDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @interface ICellDefinition
                     * @property {string|null} [type] CellDefinition type
                     * @property {factset.protobuf.stach.table.IDataFormat|null} [format] CellDefinition format
                     */

                    /**
                     * Constructs a new CellDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a CellDefinition.
                     * @implements ICellDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.table.ICellDefinition=} [properties] Properties to set
                     */
                    function CellDefinition(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CellDefinition type.
                     * @member {string} type
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @instance
                     */
                    CellDefinition.prototype.type = "";

                    /**
                     * CellDefinition format.
                     * @member {factset.protobuf.stach.table.IDataFormat|null|undefined} format
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @instance
                     */
                    CellDefinition.prototype.format = null;

                    /**
                     * Creates a new CellDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ICellDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.CellDefinition} CellDefinition instance
                     */
                    CellDefinition.create = function create(properties) {
                        return new CellDefinition(properties);
                    };

                    /**
                     * Encodes the specified CellDefinition message. Does not implicitly {@link factset.protobuf.stach.table.CellDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ICellDefinition} message CellDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CellDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.factset.protobuf.stach.table.DataFormat.encode(message.format, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CellDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.CellDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ICellDefinition} message CellDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CellDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CellDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.CellDefinition} CellDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CellDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.CellDefinition();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.string();
                                break;
                            case 2:
                                message.format = $root.factset.protobuf.stach.table.DataFormat.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CellDefinition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.CellDefinition} CellDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CellDefinition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CellDefinition message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CellDefinition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        if (message.format != null && message.hasOwnProperty("format")) {
                            var error = $root.factset.protobuf.stach.table.DataFormat.verify(message.format);
                            if (error)
                                return "format." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CellDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.CellDefinition} CellDefinition
                     */
                    CellDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.CellDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.CellDefinition();
                        if (object.type != null)
                            message.type = String(object.type);
                        if (object.format != null) {
                            if (typeof object.format !== "object")
                                throw TypeError(".factset.protobuf.stach.table.CellDefinition.format: object expected");
                            message.format = $root.factset.protobuf.stach.table.DataFormat.fromObject(object.format);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CellDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.CellDefinition} message CellDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CellDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.type = "";
                            object.format = null;
                        }
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        if (message.format != null && message.hasOwnProperty("format"))
                            object.format = $root.factset.protobuf.stach.table.DataFormat.toObject(message.format, options);
                        return object;
                    };

                    /**
                     * Converts this CellDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.CellDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CellDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CellDefinition;
                })();

                table.ColumnData = (function() {

                    /**
                     * Properties of a ColumnData.
                     * @memberof factset.protobuf.stach.table
                     * @interface IColumnData
                     * @property {Object.<string,number>|null} [ranges] ColumnData ranges
                     * @property {google.protobuf.IListValue|null} [values] ColumnData values
                     * @property {Array.<factset.protobuf.stach.table.ICellDefinition>|null} [definitions] ColumnData definitions
                     */

                    /**
                     * Constructs a new ColumnData.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a ColumnData.
                     * @implements IColumnData
                     * @constructor
                     * @param {factset.protobuf.stach.table.IColumnData=} [properties] Properties to set
                     */
                    function ColumnData(properties) {
                        this.ranges = {};
                        this.definitions = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ColumnData ranges.
                     * @member {Object.<string,number>} ranges
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @instance
                     */
                    ColumnData.prototype.ranges = $util.emptyObject;

                    /**
                     * ColumnData values.
                     * @member {google.protobuf.IListValue|null|undefined} values
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @instance
                     */
                    ColumnData.prototype.values = null;

                    /**
                     * ColumnData definitions.
                     * @member {Array.<factset.protobuf.stach.table.ICellDefinition>} definitions
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @instance
                     */
                    ColumnData.prototype.definitions = $util.emptyArray;

                    /**
                     * Creates a new ColumnData instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnData=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.ColumnData} ColumnData instance
                     */
                    ColumnData.create = function create(properties) {
                        return new ColumnData(properties);
                    };

                    /**
                     * Encodes the specified ColumnData message. Does not implicitly {@link factset.protobuf.stach.table.ColumnData.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnData} message ColumnData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ColumnData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ranges != null && message.hasOwnProperty("ranges"))
                            for (var keys = Object.keys(message.ranges), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.ranges[keys[i]]).ldelim();
                        if (message.values != null && message.hasOwnProperty("values"))
                            $root.google.protobuf.ListValue.encode(message.values, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.definitions != null && message.definitions.length)
                            for (var i = 0; i < message.definitions.length; ++i)
                                $root.factset.protobuf.stach.table.CellDefinition.encode(message.definitions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ColumnData message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.ColumnData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnData} message ColumnData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ColumnData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ColumnData message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.ColumnData} ColumnData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ColumnData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.ColumnData(), key;
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
                            case 2:
                                message.values = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                                break;
                            case 3:
                                if (!(message.definitions && message.definitions.length))
                                    message.definitions = [];
                                message.definitions.push($root.factset.protobuf.stach.table.CellDefinition.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ColumnData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.ColumnData} ColumnData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ColumnData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ColumnData message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ColumnData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
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
                        if (message.values != null && message.hasOwnProperty("values")) {
                            var error = $root.google.protobuf.ListValue.verify(message.values);
                            if (error)
                                return "values." + error;
                        }
                        if (message.definitions != null && message.hasOwnProperty("definitions")) {
                            if (!Array.isArray(message.definitions))
                                return "definitions: array expected";
                            for (var i = 0; i < message.definitions.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.CellDefinition.verify(message.definitions[i]);
                                if (error)
                                    return "definitions." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ColumnData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.ColumnData} ColumnData
                     */
                    ColumnData.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.ColumnData)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.ColumnData();
                        if (object.ranges) {
                            if (typeof object.ranges !== "object")
                                throw TypeError(".factset.protobuf.stach.table.ColumnData.ranges: object expected");
                            message.ranges = {};
                            for (var keys = Object.keys(object.ranges), i = 0; i < keys.length; ++i)
                                message.ranges[keys[i]] = object.ranges[keys[i]] | 0;
                        }
                        if (object.values != null) {
                            if (typeof object.values !== "object")
                                throw TypeError(".factset.protobuf.stach.table.ColumnData.values: object expected");
                            message.values = $root.google.protobuf.ListValue.fromObject(object.values);
                        }
                        if (object.definitions) {
                            if (!Array.isArray(object.definitions))
                                throw TypeError(".factset.protobuf.stach.table.ColumnData.definitions: array expected");
                            message.definitions = [];
                            for (var i = 0; i < object.definitions.length; ++i) {
                                if (typeof object.definitions[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.ColumnData.definitions: object expected");
                                message.definitions[i] = $root.factset.protobuf.stach.table.CellDefinition.fromObject(object.definitions[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ColumnData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @static
                     * @param {factset.protobuf.stach.table.ColumnData} message ColumnData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ColumnData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.definitions = [];
                        if (options.objects || options.defaults)
                            object.ranges = {};
                        if (options.defaults)
                            object.values = null;
                        var keys2;
                        if (message.ranges && (keys2 = Object.keys(message.ranges)).length) {
                            object.ranges = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.ranges[keys2[j]] = message.ranges[keys2[j]];
                        }
                        if (message.values != null && message.hasOwnProperty("values"))
                            object.values = $root.google.protobuf.ListValue.toObject(message.values, options);
                        if (message.definitions && message.definitions.length) {
                            object.definitions = [];
                            for (var j = 0; j < message.definitions.length; ++j)
                                object.definitions[j] = $root.factset.protobuf.stach.table.CellDefinition.toObject(message.definitions[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ColumnData to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.ColumnData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ColumnData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ColumnData;
                })();

                table.ColumnDefinition = (function() {

                    /**
                     * Properties of a ColumnDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @interface IColumnDefinition
                     * @property {string|null} [id] ColumnDefinition id
                     * @property {string|null} [name] ColumnDefinition name
                     * @property {string|null} [description] ColumnDefinition description
                     * @property {string|null} [type] ColumnDefinition type
                     * @property {boolean|null} [isDimension] ColumnDefinition isDimension
                     * @property {boolean|null} [isHidden] ColumnDefinition isHidden
                     * @property {string|null} [nextSiblingId] ColumnDefinition nextSiblingId
                     * @property {string|null} [parentId] ColumnDefinition parentId
                     * @property {string|null} [headerId] ColumnDefinition headerId
                     * @property {factset.protobuf.stach.table.IDataFormat|null} [format] ColumnDefinition format
                     */

                    /**
                     * Constructs a new ColumnDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a ColumnDefinition.
                     * @implements IColumnDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.table.IColumnDefinition=} [properties] Properties to set
                     */
                    function ColumnDefinition(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ColumnDefinition id.
                     * @member {string} id
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.id = "";

                    /**
                     * ColumnDefinition name.
                     * @member {string} name
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.name = "";

                    /**
                     * ColumnDefinition description.
                     * @member {string} description
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.description = "";

                    /**
                     * ColumnDefinition type.
                     * @member {string} type
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.type = "";

                    /**
                     * ColumnDefinition isDimension.
                     * @member {boolean} isDimension
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.isDimension = false;

                    /**
                     * ColumnDefinition isHidden.
                     * @member {boolean} isHidden
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.isHidden = false;

                    /**
                     * ColumnDefinition nextSiblingId.
                     * @member {string} nextSiblingId
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.nextSiblingId = "";

                    /**
                     * ColumnDefinition parentId.
                     * @member {string} parentId
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.parentId = "";

                    /**
                     * ColumnDefinition headerId.
                     * @member {string} headerId
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.headerId = "";

                    /**
                     * ColumnDefinition format.
                     * @member {factset.protobuf.stach.table.IDataFormat|null|undefined} format
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     */
                    ColumnDefinition.prototype.format = null;

                    /**
                     * Creates a new ColumnDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.ColumnDefinition} ColumnDefinition instance
                     */
                    ColumnDefinition.create = function create(properties) {
                        return new ColumnDefinition(properties);
                    };

                    /**
                     * Encodes the specified ColumnDefinition message. Does not implicitly {@link factset.protobuf.stach.table.ColumnDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnDefinition} message ColumnDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ColumnDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && message.hasOwnProperty("name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
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
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.factset.protobuf.stach.table.DataFormat.encode(message.format, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ColumnDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.ColumnDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IColumnDefinition} message ColumnDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ColumnDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ColumnDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.ColumnDefinition} ColumnDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ColumnDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.ColumnDefinition();
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
                                message.format = $root.factset.protobuf.stach.table.DataFormat.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ColumnDefinition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.ColumnDefinition} ColumnDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ColumnDefinition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ColumnDefinition message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ColumnDefinition.verify = function verify(message) {
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
                            if (!$util.isString(message.type))
                                return "type: string expected";
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
                        if (message.format != null && message.hasOwnProperty("format")) {
                            var error = $root.factset.protobuf.stach.table.DataFormat.verify(message.format);
                            if (error)
                                return "format." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a ColumnDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.ColumnDefinition} ColumnDefinition
                     */
                    ColumnDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.ColumnDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.ColumnDefinition();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.type != null)
                            message.type = String(object.type);
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
                        if (object.format != null) {
                            if (typeof object.format !== "object")
                                throw TypeError(".factset.protobuf.stach.table.ColumnDefinition.format: object expected");
                            message.format = $root.factset.protobuf.stach.table.DataFormat.fromObject(object.format);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ColumnDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.ColumnDefinition} message ColumnDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ColumnDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.description = "";
                            object.type = "";
                            object.isDimension = false;
                            object.isHidden = false;
                            object.nextSiblingId = "";
                            object.parentId = "";
                            object.headerId = "";
                            object.format = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
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
                        if (message.format != null && message.hasOwnProperty("format"))
                            object.format = $root.factset.protobuf.stach.table.DataFormat.toObject(message.format, options);
                        return object;
                    };

                    /**
                     * Converts this ColumnDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.ColumnDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ColumnDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ColumnDefinition;
                })();

                table.DataFormat = (function() {

                    /**
                     * Properties of a DataFormat.
                     * @memberof factset.protobuf.stach.table
                     * @interface IDataFormat
                     * @property {string|null} [format] DataFormat format
                     * @property {string|null} [nullFormat] DataFormat nullFormat
                     * @property {factset.protobuf.stach.table.HorizontalAlignment|null} [halign] DataFormat halign
                     * @property {factset.protobuf.stach.table.VerticalAlignment|null} [valign] DataFormat valign
                     */

                    /**
                     * Constructs a new DataFormat.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a DataFormat.
                     * @implements IDataFormat
                     * @constructor
                     * @param {factset.protobuf.stach.table.IDataFormat=} [properties] Properties to set
                     */
                    function DataFormat(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DataFormat format.
                     * @member {string} format
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @instance
                     */
                    DataFormat.prototype.format = "";

                    /**
                     * DataFormat nullFormat.
                     * @member {string} nullFormat
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @instance
                     */
                    DataFormat.prototype.nullFormat = "";

                    /**
                     * DataFormat halign.
                     * @member {factset.protobuf.stach.table.HorizontalAlignment} halign
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @instance
                     */
                    DataFormat.prototype.halign = 0;

                    /**
                     * DataFormat valign.
                     * @member {factset.protobuf.stach.table.VerticalAlignment} valign
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @instance
                     */
                    DataFormat.prototype.valign = 0;

                    /**
                     * Creates a new DataFormat instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {factset.protobuf.stach.table.IDataFormat=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.DataFormat} DataFormat instance
                     */
                    DataFormat.create = function create(properties) {
                        return new DataFormat(properties);
                    };

                    /**
                     * Encodes the specified DataFormat message. Does not implicitly {@link factset.protobuf.stach.table.DataFormat.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {factset.protobuf.stach.table.IDataFormat} message DataFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataFormat.encode = function encode(message, writer) {
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
                     * Encodes the specified DataFormat message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.DataFormat.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {factset.protobuf.stach.table.IDataFormat} message DataFormat message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataFormat.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DataFormat message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.DataFormat} DataFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataFormat.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.DataFormat();
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
                     * Decodes a DataFormat message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.DataFormat} DataFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataFormat.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DataFormat message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DataFormat.verify = function verify(message) {
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
                     * Creates a DataFormat message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.DataFormat} DataFormat
                     */
                    DataFormat.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.DataFormat)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.DataFormat();
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
                     * Creates a plain object from a DataFormat message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @static
                     * @param {factset.protobuf.stach.table.DataFormat} message DataFormat
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DataFormat.toObject = function toObject(message, options) {
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
                     * Converts this DataFormat to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.DataFormat
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DataFormat.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DataFormat;
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
                     * @property {Object.<string,factset.protobuf.stach.table.IMetadataItem>|null} [items] MetadataCollection items
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
                     * @member {Object.<string,factset.protobuf.stach.table.IMetadataItem>} items
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
                                $root.factset.protobuf.stach.table.MetadataItem.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
                                message.items[key] = $root.factset.protobuf.stach.table.MetadataItem.decode(reader, reader.uint32());
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
                                var error = $root.factset.protobuf.stach.table.MetadataItem.verify(message.items[key[i]]);
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
                                message.items[keys[i]] = $root.factset.protobuf.stach.table.MetadataItem.fromObject(object.items[keys[i]]);
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
                                object.items[keys2[j]] = $root.factset.protobuf.stach.table.MetadataItem.toObject(message.items[keys2[j]], options);
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

                table.MetadataItem = (function() {

                    /**
                     * Properties of a MetadataItem.
                     * @memberof factset.protobuf.stach.table
                     * @interface IMetadataItem
                     * @property {google.protobuf.IValue|null} [value] MetadataItem value
                     * @property {factset.protobuf.stach.table.IReference|null} [reference] MetadataItem reference
                     */

                    /**
                     * Constructs a new MetadataItem.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a MetadataItem.
                     * @implements IMetadataItem
                     * @constructor
                     * @param {factset.protobuf.stach.table.IMetadataItem=} [properties] Properties to set
                     */
                    function MetadataItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MetadataItem value.
                     * @member {google.protobuf.IValue|null|undefined} value
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @instance
                     */
                    MetadataItem.prototype.value = null;

                    /**
                     * MetadataItem reference.
                     * @member {factset.protobuf.stach.table.IReference|null|undefined} reference
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @instance
                     */
                    MetadataItem.prototype.reference = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * MetadataItem data.
                     * @member {"value"|"reference"|undefined} data
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @instance
                     */
                    Object.defineProperty(MetadataItem.prototype, "data", {
                        get: $util.oneOfGetter($oneOfFields = ["value", "reference"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new MetadataItem instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataItem=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.MetadataItem} MetadataItem instance
                     */
                    MetadataItem.create = function create(properties) {
                        return new MetadataItem(properties);
                    };

                    /**
                     * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.table.MetadataItem.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataItem} message MetadataItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && message.hasOwnProperty("value"))
                            $root.google.protobuf.Value.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.reference != null && message.hasOwnProperty("reference"))
                            $root.factset.protobuf.stach.table.Reference.encode(message.reference, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.table.IMetadataItem} message MetadataItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MetadataItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.MetadataItem} MetadataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.MetadataItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.reference = $root.factset.protobuf.stach.table.Reference.decode(reader, reader.uint32());
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
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.MetadataItem} MetadataItem
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
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MetadataItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.value != null && message.hasOwnProperty("value")) {
                            properties.data = 1;
                            {
                                var error = $root.google.protobuf.Value.verify(message.value);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        if (message.reference != null && message.hasOwnProperty("reference")) {
                            if (properties.data === 1)
                                return "data: multiple values";
                            properties.data = 1;
                            {
                                var error = $root.factset.protobuf.stach.table.Reference.verify(message.reference);
                                if (error)
                                    return "reference." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.MetadataItem} MetadataItem
                     */
                    MetadataItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.MetadataItem)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.MetadataItem();
                        if (object.value != null) {
                            if (typeof object.value !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataItem.value: object expected");
                            message.value = $root.google.protobuf.Value.fromObject(object.value);
                        }
                        if (object.reference != null) {
                            if (typeof object.reference !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataItem.reference: object expected");
                            message.reference = $root.factset.protobuf.stach.table.Reference.fromObject(object.reference);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.table.MetadataItem} message MetadataItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MetadataItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.value != null && message.hasOwnProperty("value")) {
                            object.value = $root.google.protobuf.Value.toObject(message.value, options);
                            if (options.oneofs)
                                object.data = "value";
                        }
                        if (message.reference != null && message.hasOwnProperty("reference")) {
                            object.reference = $root.factset.protobuf.stach.table.Reference.toObject(message.reference, options);
                            if (options.oneofs)
                                object.data = "reference";
                        }
                        return object;
                    };

                    /**
                     * Converts this MetadataItem to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.MetadataItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MetadataItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MetadataItem;
                })();

                table.MetadataLocations = (function() {

                    /**
                     * Properties of a MetadataLocations.
                     * @memberof factset.protobuf.stach.table
                     * @interface IMetadataLocations
                     * @property {Array.<string>|null} [table] MetadataLocations table
                     * @property {Object.<string,factset.protobuf.stach.table.IListOfMetadata>|null} [columns] MetadataLocations columns
                     * @property {Object.<string,factset.protobuf.stach.table.IListOfMetadata>|null} [rows] MetadataLocations rows
                     * @property {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap|null} [cells] MetadataLocations cells
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
                     * MetadataLocations cells.
                     * @member {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap|null|undefined} cells
                     * @memberof factset.protobuf.stach.table.MetadataLocations
                     * @instance
                     */
                    MetadataLocations.prototype.cells = null;

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
                        if (message.cells != null && message.hasOwnProperty("cells"))
                            $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.encode(message.cells, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                            case 4:
                                message.cells = $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.decode(reader, reader.uint32());
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
                        if (message.cells != null && message.hasOwnProperty("cells")) {
                            var error = $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.verify(message.cells);
                            if (error)
                                return "cells." + error;
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
                        if (object.cells != null) {
                            if (typeof object.cells !== "object")
                                throw TypeError(".factset.protobuf.stach.table.MetadataLocations.cells: object expected");
                            message.cells = $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.fromObject(object.cells);
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
                        if (options.defaults)
                            object.cells = null;
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
                        if (message.cells != null && message.hasOwnProperty("cells"))
                            object.cells = $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.toObject(message.cells, options);
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

                    MetadataLocations.CellsColumnMap = (function() {

                        /**
                         * Properties of a CellsColumnMap.
                         * @memberof factset.protobuf.stach.table.MetadataLocations
                         * @interface ICellsColumnMap
                         * @property {Object.<string,factset.protobuf.stach.table.MetadataLocations.ICellsRowMap>|null} [columns] CellsColumnMap columns
                         */

                        /**
                         * Constructs a new CellsColumnMap.
                         * @memberof factset.protobuf.stach.table.MetadataLocations
                         * @classdesc Represents a CellsColumnMap.
                         * @implements ICellsColumnMap
                         * @constructor
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap=} [properties] Properties to set
                         */
                        function CellsColumnMap(properties) {
                            this.columns = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CellsColumnMap columns.
                         * @member {Object.<string,factset.protobuf.stach.table.MetadataLocations.ICellsRowMap>} columns
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @instance
                         */
                        CellsColumnMap.prototype.columns = $util.emptyObject;

                        /**
                         * Creates a new CellsColumnMap instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} CellsColumnMap instance
                         */
                        CellsColumnMap.create = function create(properties) {
                            return new CellsColumnMap(properties);
                        };

                        /**
                         * Encodes the specified CellsColumnMap message. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap} message CellsColumnMap message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CellsColumnMap.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.columns != null && message.hasOwnProperty("columns"))
                                for (var keys = Object.keys(message.columns), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.encode(message.columns[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            return writer;
                        };

                        /**
                         * Encodes the specified CellsColumnMap message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsColumnMap} message CellsColumnMap message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CellsColumnMap.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a CellsColumnMap message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} CellsColumnMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CellsColumnMap.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    reader.skip().pos++;
                                    if (message.columns === $util.emptyObject)
                                        message.columns = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.columns[key] = $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a CellsColumnMap message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} CellsColumnMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CellsColumnMap.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a CellsColumnMap message.
                         * @function verify
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CellsColumnMap.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.columns != null && message.hasOwnProperty("columns")) {
                                if (!$util.isObject(message.columns))
                                    return "columns: object expected";
                                var key = Object.keys(message.columns);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.verify(message.columns[key[i]]);
                                    if (error)
                                        return "columns." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a CellsColumnMap message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} CellsColumnMap
                         */
                        CellsColumnMap.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap)
                                return object;
                            var message = new $root.factset.protobuf.stach.table.MetadataLocations.CellsColumnMap();
                            if (object.columns) {
                                if (typeof object.columns !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.columns: object expected");
                                message.columns = {};
                                for (var keys = Object.keys(object.columns), i = 0; i < keys.length; ++i) {
                                    if (typeof object.columns[keys[i]] !== "object")
                                        throw TypeError(".factset.protobuf.stach.table.MetadataLocations.CellsColumnMap.columns: object expected");
                                    message.columns[keys[i]] = $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.fromObject(object.columns[keys[i]]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a CellsColumnMap message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.CellsColumnMap} message CellsColumnMap
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CellsColumnMap.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.columns = {};
                            var keys2;
                            if (message.columns && (keys2 = Object.keys(message.columns)).length) {
                                object.columns = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.columns[keys2[j]] = $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap.toObject(message.columns[keys2[j]], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this CellsColumnMap to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsColumnMap
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CellsColumnMap.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return CellsColumnMap;
                    })();

                    MetadataLocations.CellsRowMap = (function() {

                        /**
                         * Properties of a CellsRowMap.
                         * @memberof factset.protobuf.stach.table.MetadataLocations
                         * @interface ICellsRowMap
                         * @property {Object.<string,factset.protobuf.stach.table.IListOfMetadata>|null} [rows] CellsRowMap rows
                         */

                        /**
                         * Constructs a new CellsRowMap.
                         * @memberof factset.protobuf.stach.table.MetadataLocations
                         * @classdesc Represents a CellsRowMap.
                         * @implements ICellsRowMap
                         * @constructor
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsRowMap=} [properties] Properties to set
                         */
                        function CellsRowMap(properties) {
                            this.rows = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CellsRowMap rows.
                         * @member {Object.<string,factset.protobuf.stach.table.IListOfMetadata>} rows
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @instance
                         */
                        CellsRowMap.prototype.rows = $util.emptyObject;

                        /**
                         * Creates a new CellsRowMap instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsRowMap=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsRowMap} CellsRowMap instance
                         */
                        CellsRowMap.create = function create(properties) {
                            return new CellsRowMap(properties);
                        };

                        /**
                         * Encodes the specified CellsRowMap message. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.CellsRowMap.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsRowMap} message CellsRowMap message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CellsRowMap.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.rows != null && message.hasOwnProperty("rows"))
                                for (var keys = Object.keys(message.rows), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.factset.protobuf.stach.table.ListOfMetadata.encode(message.rows[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            return writer;
                        };

                        /**
                         * Encodes the specified CellsRowMap message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.CellsRowMap.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.ICellsRowMap} message CellsRowMap message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CellsRowMap.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a CellsRowMap message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsRowMap} CellsRowMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CellsRowMap.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
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
                         * Decodes a CellsRowMap message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsRowMap} CellsRowMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CellsRowMap.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a CellsRowMap message.
                         * @function verify
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CellsRowMap.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
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
                         * Creates a CellsRowMap message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.table.MetadataLocations.CellsRowMap} CellsRowMap
                         */
                        CellsRowMap.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap)
                                return object;
                            var message = new $root.factset.protobuf.stach.table.MetadataLocations.CellsRowMap();
                            if (object.rows) {
                                if (typeof object.rows !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.MetadataLocations.CellsRowMap.rows: object expected");
                                message.rows = {};
                                for (var keys = Object.keys(object.rows), i = 0; i < keys.length; ++i) {
                                    if (typeof object.rows[keys[i]] !== "object")
                                        throw TypeError(".factset.protobuf.stach.table.MetadataLocations.CellsRowMap.rows: object expected");
                                    message.rows[keys[i]] = $root.factset.protobuf.stach.table.ListOfMetadata.fromObject(object.rows[keys[i]]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a CellsRowMap message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @static
                         * @param {factset.protobuf.stach.table.MetadataLocations.CellsRowMap} message CellsRowMap
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CellsRowMap.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.rows = {};
                            var keys2;
                            if (message.rows && (keys2 = Object.keys(message.rows)).length) {
                                object.rows = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.rows[keys2[j]] = $root.factset.protobuf.stach.table.ListOfMetadata.toObject(message.rows[keys2[j]], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this CellsRowMap to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.table.MetadataLocations.CellsRowMap
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CellsRowMap.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return CellsRowMap;
                    })();

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

                table.RowDefinition = (function() {

                    /**
                     * Properties of a RowDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @interface IRowDefinition
                     * @property {string|null} [id] RowDefinition id
                     * @property {factset.protobuf.stach.table.IDataFormat|null} [format] RowDefinition format
                     */

                    /**
                     * Constructs a new RowDefinition.
                     * @memberof factset.protobuf.stach.table
                     * @classdesc Represents a RowDefinition.
                     * @implements IRowDefinition
                     * @constructor
                     * @param {factset.protobuf.stach.table.IRowDefinition=} [properties] Properties to set
                     */
                    function RowDefinition(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RowDefinition id.
                     * @member {string} id
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @instance
                     */
                    RowDefinition.prototype.id = "";

                    /**
                     * RowDefinition format.
                     * @member {factset.protobuf.stach.table.IDataFormat|null|undefined} format
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @instance
                     */
                    RowDefinition.prototype.format = null;

                    /**
                     * Creates a new RowDefinition instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IRowDefinition=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.table.RowDefinition} RowDefinition instance
                     */
                    RowDefinition.create = function create(properties) {
                        return new RowDefinition(properties);
                    };

                    /**
                     * Encodes the specified RowDefinition message. Does not implicitly {@link factset.protobuf.stach.table.RowDefinition.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IRowDefinition} message RowDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RowDefinition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.format != null && message.hasOwnProperty("format"))
                            $root.factset.protobuf.stach.table.DataFormat.encode(message.format, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RowDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.RowDefinition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.IRowDefinition} message RowDefinition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RowDefinition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RowDefinition message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.table.RowDefinition} RowDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RowDefinition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.table.RowDefinition();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.format = $root.factset.protobuf.stach.table.DataFormat.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RowDefinition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.table.RowDefinition} RowDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RowDefinition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RowDefinition message.
                     * @function verify
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RowDefinition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.format != null && message.hasOwnProperty("format")) {
                            var error = $root.factset.protobuf.stach.table.DataFormat.verify(message.format);
                            if (error)
                                return "format." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a RowDefinition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.table.RowDefinition} RowDefinition
                     */
                    RowDefinition.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.table.RowDefinition)
                            return object;
                        var message = new $root.factset.protobuf.stach.table.RowDefinition();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.format != null) {
                            if (typeof object.format !== "object")
                                throw TypeError(".factset.protobuf.stach.table.RowDefinition.format: object expected");
                            message.format = $root.factset.protobuf.stach.table.DataFormat.fromObject(object.format);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RowDefinition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @static
                     * @param {factset.protobuf.stach.table.RowDefinition} message RowDefinition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RowDefinition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.format = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.format != null && message.hasOwnProperty("format"))
                            object.format = $root.factset.protobuf.stach.table.DataFormat.toObject(message.format, options);
                        return object;
                    };

                    /**
                     * Converts this RowDefinition to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.table.RowDefinition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RowDefinition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RowDefinition;
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
                     * @property {Array.<factset.protobuf.stach.table.IRowDefinition>|null} [rows] TableData rows
                     * @property {Object.<string,factset.protobuf.stach.table.IColumnData>|null} [columns] TableData columns
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
                     * @member {Array.<factset.protobuf.stach.table.IRowDefinition>} rows
                     * @memberof factset.protobuf.stach.table.TableData
                     * @instance
                     */
                    TableData.prototype.rows = $util.emptyArray;

                    /**
                     * TableData columns.
                     * @member {Object.<string,factset.protobuf.stach.table.IColumnData>} columns
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
                                $root.factset.protobuf.stach.table.RowDefinition.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.columns != null && message.hasOwnProperty("columns"))
                            for (var keys = Object.keys(message.columns), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.table.ColumnData.encode(message.columns[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
                                message.rows.push($root.factset.protobuf.stach.table.RowDefinition.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                reader.skip().pos++;
                                if (message.columns === $util.emptyObject)
                                    message.columns = {};
                                key = reader.string();
                                reader.pos++;
                                message.columns[key] = $root.factset.protobuf.stach.table.ColumnData.decode(reader, reader.uint32());
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
                                var error = $root.factset.protobuf.stach.table.RowDefinition.verify(message.rows[i]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!$util.isObject(message.columns))
                                return "columns: object expected";
                            var key = Object.keys(message.columns);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.table.ColumnData.verify(message.columns[key[i]]);
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
                                message.rows[i] = $root.factset.protobuf.stach.table.RowDefinition.fromObject(object.rows[i]);
                            }
                        }
                        if (object.columns) {
                            if (typeof object.columns !== "object")
                                throw TypeError(".factset.protobuf.stach.table.TableData.columns: object expected");
                            message.columns = {};
                            for (var keys = Object.keys(object.columns), i = 0; i < keys.length; ++i) {
                                if (typeof object.columns[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.table.TableData.columns: object expected");
                                message.columns[keys[i]] = $root.factset.protobuf.stach.table.ColumnData.fromObject(object.columns[keys[i]]);
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
                                object.rows[j] = $root.factset.protobuf.stach.table.RowDefinition.toObject(message.rows[j], options);
                        }
                        var keys2;
                        if (message.columns && (keys2 = Object.keys(message.columns)).length) {
                            object.columns = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.columns[keys2[j]] = $root.factset.protobuf.stach.table.ColumnData.toObject(message.columns[keys2[j]], options);
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
                     * @property {Array.<factset.protobuf.stach.table.IColumnDefinition>|null} [columns] TableDefinition columns
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
                     * @member {Array.<factset.protobuf.stach.table.IColumnDefinition>} columns
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
                                $root.factset.protobuf.stach.table.ColumnDefinition.encode(message.columns[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                                message.columns.push($root.factset.protobuf.stach.table.ColumnDefinition.decode(reader, reader.uint32()));
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
                                var error = $root.factset.protobuf.stach.table.ColumnDefinition.verify(message.columns[i]);
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
                                message.columns[i] = $root.factset.protobuf.stach.table.ColumnDefinition.fromObject(object.columns[i]);
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
                                object.columns[j] = $root.factset.protobuf.stach.table.ColumnDefinition.toObject(message.columns[j], options);
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
