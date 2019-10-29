import * as Long from "long";
import * as $protobuf from "protobufjs";
export = stach;

declare namespace stach {


    /** Namespace factset. */
    namespace factset {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Namespace stach. */
            namespace stach {

                /** Properties of a Package. */
                interface IPackage {

                    /** Package version */
                    version?: (string|null);

                    /** Package primaryTableIds */
                    primaryTableIds?: (string[]|null);

                    /** Package tables */
                    tables?: ({ [k: string]: factset.protobuf.stach.table.ITable }|null);
                }

                /** Represents a Package. */
                class Package implements IPackage {

                    /**
                     * Constructs a new Package.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: factset.protobuf.stach.IPackage);

                    /** Package version. */
                    public version: string;

                    /** Package primaryTableIds. */
                    public primaryTableIds: string[];

                    /** Package tables. */
                    public tables: { [k: string]: factset.protobuf.stach.table.ITable };

                    /**
                     * Creates a new Package instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Package instance
                     */
                    public static create(properties?: factset.protobuf.stach.IPackage): factset.protobuf.stach.Package;

                    /**
                     * Encodes the specified Package message. Does not implicitly {@link factset.protobuf.stach.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: factset.protobuf.stach.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Package message, length delimited. Does not implicitly {@link factset.protobuf.stach.Package.verify|verify} messages.
                     * @param message Package message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: factset.protobuf.stach.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Package message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.Package;

                    /**
                     * Decodes a Package message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.Package;

                    /**
                     * Verifies a Package message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Package message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Package
                     */
                    public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.Package;

                    /**
                     * Creates a plain object from a Package message. Also converts values to other types if specified.
                     * @param message Package
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: factset.protobuf.stach.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Package to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataItem. */
                interface IMetadataItem {

                    /** MetadataItem name */
                    name?: (string|null);

                    /** MetadataItem doubleValue */
                    doubleValue?: (number|null);

                    /** MetadataItem floatValue */
                    floatValue?: (number|null);

                    /** MetadataItem int32Value */
                    int32Value?: (number|null);

                    /** MetadataItem int64Value */
                    int64Value?: (number|Long|null);

                    /** MetadataItem boolValue */
                    boolValue?: (boolean|null);

                    /** MetadataItem stringValue */
                    stringValue?: (string|null);

                    /** MetadataItem durationValue */
                    durationValue?: (google.protobuf.IDuration|null);

                    /** MetadataItem timestampValue */
                    timestampValue?: (google.protobuf.ITimestamp|null);

                    /** MetadataItem refValue */
                    refValue?: (factset.protobuf.stach.table.IReference|null);
                }

                /** Represents a MetadataItem. */
                class MetadataItem implements IMetadataItem {

                    /**
                     * Constructs a new MetadataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: factset.protobuf.stach.IMetadataItem);

                    /** MetadataItem name. */
                    public name: string;

                    /** MetadataItem doubleValue. */
                    public doubleValue: number;

                    /** MetadataItem floatValue. */
                    public floatValue: number;

                    /** MetadataItem int32Value. */
                    public int32Value: number;

                    /** MetadataItem int64Value. */
                    public int64Value: (number|Long);

                    /** MetadataItem boolValue. */
                    public boolValue: boolean;

                    /** MetadataItem stringValue. */
                    public stringValue: string;

                    /** MetadataItem durationValue. */
                    public durationValue?: (google.protobuf.IDuration|null);

                    /** MetadataItem timestampValue. */
                    public timestampValue?: (google.protobuf.ITimestamp|null);

                    /** MetadataItem refValue. */
                    public refValue?: (factset.protobuf.stach.table.IReference|null);

                    /** MetadataItem data. */
                    public data?: ("doubleValue"|"floatValue"|"int32Value"|"int64Value"|"boolValue"|"stringValue"|"durationValue"|"timestampValue"|"refValue");

                    /**
                     * Creates a new MetadataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataItem instance
                     */
                    public static create(properties?: factset.protobuf.stach.IMetadataItem): factset.protobuf.stach.MetadataItem;

                    /**
                     * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.MetadataItem.verify|verify} messages.
                     * @param message MetadataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: factset.protobuf.stach.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.MetadataItem.verify|verify} messages.
                     * @param message MetadataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: factset.protobuf.stach.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.MetadataItem;

                    /**
                     * Decodes a MetadataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.MetadataItem;

                    /**
                     * Verifies a MetadataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataItem
                     */
                    public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.MetadataItem;

                    /**
                     * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                     * @param message MetadataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: factset.protobuf.stach.MetadataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Namespace chart. */
                namespace chart {

                    /** Properties of a Chart. */
                    interface IChart {

                        /** Chart template */
                        template?: (google.protobuf.IStruct|null);

                        /** Chart attributes */
                        attributes?: ({ [k: string]: factset.protobuf.stach.table.IReference }|null);

                        /** Chart plots */
                        plots?: ({ [k: string]: factset.protobuf.stach.chart.IPlot }|null);

                        /** Chart series */
                        series?: ({ [k: string]: factset.protobuf.stach.chart.ISeries }|null);

                        /** Chart data */
                        data?: ({ [k: string]: factset.protobuf.stach.chart.IData }|null);
                    }

                    /** Represents a Chart. */
                    class Chart implements IChart {

                        /**
                         * Constructs a new Chart.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.chart.IChart);

                        /** Chart template. */
                        public template?: (google.protobuf.IStruct|null);

                        /** Chart attributes. */
                        public attributes: { [k: string]: factset.protobuf.stach.table.IReference };

                        /** Chart plots. */
                        public plots: { [k: string]: factset.protobuf.stach.chart.IPlot };

                        /** Chart series. */
                        public series: { [k: string]: factset.protobuf.stach.chart.ISeries };

                        /** Chart data. */
                        public data: { [k: string]: factset.protobuf.stach.chart.IData };

                        /**
                         * Creates a new Chart instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Chart instance
                         */
                        public static create(properties?: factset.protobuf.stach.chart.IChart): factset.protobuf.stach.chart.Chart;

                        /**
                         * Encodes the specified Chart message. Does not implicitly {@link factset.protobuf.stach.chart.Chart.verify|verify} messages.
                         * @param message Chart message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.chart.IChart, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Chart message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Chart.verify|verify} messages.
                         * @param message Chart message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.chart.IChart, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Chart message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Chart
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.chart.Chart;

                        /**
                         * Decodes a Chart message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Chart
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.chart.Chart;

                        /**
                         * Verifies a Chart message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Chart message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Chart
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.chart.Chart;

                        /**
                         * Creates a plain object from a Chart message. Also converts values to other types if specified.
                         * @param message Chart
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.chart.Chart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Chart to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Data. */
                    interface IData {

                        /** Data template */
                        template?: (google.protobuf.IStruct|null);

                        /** Data attributes */
                        attributes?: ({ [k: string]: factset.protobuf.stach.table.IReference }|null);

                        /** Data reference */
                        reference?: (factset.protobuf.stach.table.IReference|null);

                        /** Data children */
                        children?: (factset.protobuf.stach.table.IReference[]|null);
                    }

                    /** Represents a Data. */
                    class Data implements IData {

                        /**
                         * Constructs a new Data.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.chart.IData);

                        /** Data template. */
                        public template?: (google.protobuf.IStruct|null);

                        /** Data attributes. */
                        public attributes: { [k: string]: factset.protobuf.stach.table.IReference };

                        /** Data reference. */
                        public reference?: (factset.protobuf.stach.table.IReference|null);

                        /** Data children. */
                        public children: factset.protobuf.stach.table.IReference[];

                        /**
                         * Creates a new Data instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Data instance
                         */
                        public static create(properties?: factset.protobuf.stach.chart.IData): factset.protobuf.stach.chart.Data;

                        /**
                         * Encodes the specified Data message. Does not implicitly {@link factset.protobuf.stach.chart.Data.verify|verify} messages.
                         * @param message Data message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.chart.IData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Data message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Data.verify|verify} messages.
                         * @param message Data message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.chart.IData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Data message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Data
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.chart.Data;

                        /**
                         * Decodes a Data message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Data
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.chart.Data;

                        /**
                         * Verifies a Data message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Data message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Data
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.chart.Data;

                        /**
                         * Creates a plain object from a Data message. Also converts values to other types if specified.
                         * @param message Data
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.chart.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Data to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Plot. */
                    interface IPlot {

                        /** Plot template */
                        template?: (google.protobuf.IStruct|null);

                        /** Plot attributes */
                        attributes?: ({ [k: string]: factset.protobuf.stach.table.IReference }|null);

                        /** Plot label */
                        label?: (factset.protobuf.stach.table.IReference|null);

                        /** Plot series */
                        series?: (string[]|null);
                    }

                    /** Represents a Plot. */
                    class Plot implements IPlot {

                        /**
                         * Constructs a new Plot.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.chart.IPlot);

                        /** Plot template. */
                        public template?: (google.protobuf.IStruct|null);

                        /** Plot attributes. */
                        public attributes: { [k: string]: factset.protobuf.stach.table.IReference };

                        /** Plot label. */
                        public label?: (factset.protobuf.stach.table.IReference|null);

                        /** Plot series. */
                        public series: string[];

                        /**
                         * Creates a new Plot instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Plot instance
                         */
                        public static create(properties?: factset.protobuf.stach.chart.IPlot): factset.protobuf.stach.chart.Plot;

                        /**
                         * Encodes the specified Plot message. Does not implicitly {@link factset.protobuf.stach.chart.Plot.verify|verify} messages.
                         * @param message Plot message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.chart.IPlot, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Plot message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Plot.verify|verify} messages.
                         * @param message Plot message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.chart.IPlot, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Plot message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Plot
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.chart.Plot;

                        /**
                         * Decodes a Plot message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Plot
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.chart.Plot;

                        /**
                         * Verifies a Plot message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Plot message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Plot
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.chart.Plot;

                        /**
                         * Creates a plain object from a Plot message. Also converts values to other types if specified.
                         * @param message Plot
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.chart.Plot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Plot to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Series. */
                    interface ISeries {

                        /** Series template */
                        template?: (google.protobuf.IStruct|null);

                        /** Series attributes */
                        attributes?: ({ [k: string]: factset.protobuf.stach.table.IReference }|null);

                        /** Series label */
                        label?: (factset.protobuf.stach.table.IReference|null);

                        /** Series dimensions */
                        dimensions?: ({ [k: string]: string }|null);
                    }

                    /** Represents a Series. */
                    class Series implements ISeries {

                        /**
                         * Constructs a new Series.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.chart.ISeries);

                        /** Series template. */
                        public template?: (google.protobuf.IStruct|null);

                        /** Series attributes. */
                        public attributes: { [k: string]: factset.protobuf.stach.table.IReference };

                        /** Series label. */
                        public label?: (factset.protobuf.stach.table.IReference|null);

                        /** Series dimensions. */
                        public dimensions: { [k: string]: string };

                        /**
                         * Creates a new Series instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Series instance
                         */
                        public static create(properties?: factset.protobuf.stach.chart.ISeries): factset.protobuf.stach.chart.Series;

                        /**
                         * Encodes the specified Series message. Does not implicitly {@link factset.protobuf.stach.chart.Series.verify|verify} messages.
                         * @param message Series message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.chart.ISeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Series message, length delimited. Does not implicitly {@link factset.protobuf.stach.chart.Series.verify|verify} messages.
                         * @param message Series message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.chart.ISeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Series message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Series
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.chart.Series;

                        /**
                         * Decodes a Series message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Series
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.chart.Series;

                        /**
                         * Verifies a Series message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Series message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Series
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.chart.Series;

                        /**
                         * Creates a plain object from a Series message. Also converts values to other types if specified.
                         * @param message Series
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.chart.Series, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Series to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Namespace table. */
                namespace table {

                    /** DataType enum. */
                    enum DataType {
                        UNKNOWN_DATATYPE = 0,
                        DOUBLE = 1,
                        FLOAT = 2,
                        INT32 = 3,
                        INT64 = 4,
                        BOOL = 7,
                        STRING = 8,
                        DURATION = 9,
                        TIMESTAMP = 10
                    }

                    /** HorizontalAlignment enum. */
                    enum HorizontalAlignment {
                        UNKNOWN_HALIGN = 0,
                        LEFT = 1,
                        CENTER = 2,
                        RIGHT = 3
                    }

                    /** Properties of a ListOfMetadata. */
                    interface IListOfMetadata {

                        /** ListOfMetadata ids */
                        ids?: (string[]|null);
                    }

                    /** Represents a ListOfMetadata. */
                    class ListOfMetadata implements IListOfMetadata {

                        /**
                         * Constructs a new ListOfMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IListOfMetadata);

                        /** ListOfMetadata ids. */
                        public ids: string[];

                        /**
                         * Creates a new ListOfMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListOfMetadata instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IListOfMetadata): factset.protobuf.stach.table.ListOfMetadata;

                        /**
                         * Encodes the specified ListOfMetadata message. Does not implicitly {@link factset.protobuf.stach.table.ListOfMetadata.verify|verify} messages.
                         * @param message ListOfMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IListOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListOfMetadata message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.ListOfMetadata.verify|verify} messages.
                         * @param message ListOfMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IListOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListOfMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListOfMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.ListOfMetadata;

                        /**
                         * Decodes a ListOfMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListOfMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.ListOfMetadata;

                        /**
                         * Verifies a ListOfMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListOfMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListOfMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.ListOfMetadata;

                        /**
                         * Creates a plain object from a ListOfMetadata message. Also converts values to other types if specified.
                         * @param message ListOfMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.ListOfMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListOfMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetadataCollection. */
                    interface IMetadataCollection {

                        /** MetadataCollection items */
                        items?: ({ [k: string]: factset.protobuf.stach.IMetadataItem }|null);

                        /** MetadataCollection locations */
                        locations?: (factset.protobuf.stach.table.IMetadataLocations|null);
                    }

                    /** Represents a MetadataCollection. */
                    class MetadataCollection implements IMetadataCollection {

                        /**
                         * Constructs a new MetadataCollection.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IMetadataCollection);

                        /** MetadataCollection items. */
                        public items: { [k: string]: factset.protobuf.stach.IMetadataItem };

                        /** MetadataCollection locations. */
                        public locations?: (factset.protobuf.stach.table.IMetadataLocations|null);

                        /**
                         * Creates a new MetadataCollection instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetadataCollection instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IMetadataCollection): factset.protobuf.stach.table.MetadataCollection;

                        /**
                         * Encodes the specified MetadataCollection message. Does not implicitly {@link factset.protobuf.stach.table.MetadataCollection.verify|verify} messages.
                         * @param message MetadataCollection message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IMetadataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetadataCollection message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataCollection.verify|verify} messages.
                         * @param message MetadataCollection message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IMetadataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetadataCollection message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetadataCollection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.MetadataCollection;

                        /**
                         * Decodes a MetadataCollection message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetadataCollection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.MetadataCollection;

                        /**
                         * Verifies a MetadataCollection message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetadataCollection message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetadataCollection
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.MetadataCollection;

                        /**
                         * Creates a plain object from a MetadataCollection message. Also converts values to other types if specified.
                         * @param message MetadataCollection
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.MetadataCollection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetadataCollection to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetadataLocations. */
                    interface IMetadataLocations {

                        /** MetadataLocations table */
                        table?: (string[]|null);

                        /** MetadataLocations columns */
                        columns?: ({ [k: string]: factset.protobuf.stach.table.IListOfMetadata }|null);

                        /** MetadataLocations rows */
                        rows?: ({ [k: string]: factset.protobuf.stach.table.IListOfMetadata }|null);
                    }

                    /** Represents a MetadataLocations. */
                    class MetadataLocations implements IMetadataLocations {

                        /**
                         * Constructs a new MetadataLocations.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IMetadataLocations);

                        /** MetadataLocations table. */
                        public table: string[];

                        /** MetadataLocations columns. */
                        public columns: { [k: string]: factset.protobuf.stach.table.IListOfMetadata };

                        /** MetadataLocations rows. */
                        public rows: { [k: string]: factset.protobuf.stach.table.IListOfMetadata };

                        /**
                         * Creates a new MetadataLocations instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetadataLocations instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IMetadataLocations): factset.protobuf.stach.table.MetadataLocations;

                        /**
                         * Encodes the specified MetadataLocations message. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.verify|verify} messages.
                         * @param message MetadataLocations message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IMetadataLocations, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetadataLocations message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.MetadataLocations.verify|verify} messages.
                         * @param message MetadataLocations message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IMetadataLocations, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetadataLocations message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetadataLocations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.MetadataLocations;

                        /**
                         * Decodes a MetadataLocations message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetadataLocations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.MetadataLocations;

                        /**
                         * Verifies a MetadataLocations message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetadataLocations message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetadataLocations
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.MetadataLocations;

                        /**
                         * Creates a plain object from a MetadataLocations message. Also converts values to other types if specified.
                         * @param message MetadataLocations
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.MetadataLocations, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetadataLocations to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Reference. */
                    interface IReference {

                        /** Reference referenceType */
                        referenceType?: (factset.protobuf.stach.table.ReferenceType|null);

                        /** Reference tableId */
                        tableId?: (string|null);

                        /** Reference columnId */
                        columnId?: (string|null);

                        /** Reference rowId */
                        rowId?: (string|null);
                    }

                    /** Represents a Reference. */
                    class Reference implements IReference {

                        /**
                         * Constructs a new Reference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IReference);

                        /** Reference referenceType. */
                        public referenceType: factset.protobuf.stach.table.ReferenceType;

                        /** Reference tableId. */
                        public tableId: string;

                        /** Reference columnId. */
                        public columnId: string;

                        /** Reference rowId. */
                        public rowId: string;

                        /**
                         * Creates a new Reference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Reference instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IReference): factset.protobuf.stach.table.Reference;

                        /**
                         * Encodes the specified Reference message. Does not implicitly {@link factset.protobuf.stach.table.Reference.verify|verify} messages.
                         * @param message Reference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Reference message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Reference.verify|verify} messages.
                         * @param message Reference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Reference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Reference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.Reference;

                        /**
                         * Decodes a Reference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Reference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.Reference;

                        /**
                         * Verifies a Reference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Reference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Reference
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.Reference;

                        /**
                         * Creates a plain object from a Reference message. Also converts values to other types if specified.
                         * @param message Reference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Reference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ReferenceFilterMode enum. */
                    enum ReferenceFilterMode {
                        INCLUDE = 0,
                        EXCLUDE = 1
                    }

                    /** ReferenceType enum. */
                    enum ReferenceType {
                        UNKNOWN_REFERENCE_TYPE = 0,
                        TABLE = 1,
                        COLUMN = 2,
                        ROW = 3,
                        CELL = 4
                    }

                    /** Properties of a SeriesData. */
                    interface ISeriesData {

                        /** SeriesData ranges */
                        ranges?: ({ [k: string]: number }|null);

                        /** SeriesData doubleArray */
                        doubleArray?: (factset.protobuf.stach.table.IDoubleArray|null);

                        /** SeriesData floatArray */
                        floatArray?: (factset.protobuf.stach.table.IFloatArray|null);

                        /** SeriesData int32Array */
                        int32Array?: (factset.protobuf.stach.table.IInt32Array|null);

                        /** SeriesData int64Array */
                        int64Array?: (factset.protobuf.stach.table.IInt64Array|null);

                        /** SeriesData boolArray */
                        boolArray?: (factset.protobuf.stach.table.IBoolArray|null);

                        /** SeriesData stringArray */
                        stringArray?: (factset.protobuf.stach.table.IStringArray|null);

                        /** SeriesData durationArray */
                        durationArray?: (factset.protobuf.stach.table.IDurationArray|null);

                        /** SeriesData timestampArray */
                        timestampArray?: (factset.protobuf.stach.table.ITimestampArray|null);
                    }

                    /** Represents a SeriesData. */
                    class SeriesData implements ISeriesData {

                        /**
                         * Constructs a new SeriesData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ISeriesData);

                        /** SeriesData ranges. */
                        public ranges: { [k: string]: number };

                        /** SeriesData doubleArray. */
                        public doubleArray?: (factset.protobuf.stach.table.IDoubleArray|null);

                        /** SeriesData floatArray. */
                        public floatArray?: (factset.protobuf.stach.table.IFloatArray|null);

                        /** SeriesData int32Array. */
                        public int32Array?: (factset.protobuf.stach.table.IInt32Array|null);

                        /** SeriesData int64Array. */
                        public int64Array?: (factset.protobuf.stach.table.IInt64Array|null);

                        /** SeriesData boolArray. */
                        public boolArray?: (factset.protobuf.stach.table.IBoolArray|null);

                        /** SeriesData stringArray. */
                        public stringArray?: (factset.protobuf.stach.table.IStringArray|null);

                        /** SeriesData durationArray. */
                        public durationArray?: (factset.protobuf.stach.table.IDurationArray|null);

                        /** SeriesData timestampArray. */
                        public timestampArray?: (factset.protobuf.stach.table.ITimestampArray|null);

                        /** SeriesData data. */
                        public data?: ("doubleArray"|"floatArray"|"int32Array"|"int64Array"|"boolArray"|"stringArray"|"durationArray"|"timestampArray");

                        /**
                         * Creates a new SeriesData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SeriesData instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ISeriesData): factset.protobuf.stach.table.SeriesData;

                        /**
                         * Encodes the specified SeriesData message. Does not implicitly {@link factset.protobuf.stach.table.SeriesData.verify|verify} messages.
                         * @param message SeriesData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ISeriesData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SeriesData message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesData.verify|verify} messages.
                         * @param message SeriesData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ISeriesData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SeriesData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SeriesData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.SeriesData;

                        /**
                         * Decodes a SeriesData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SeriesData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.SeriesData;

                        /**
                         * Verifies a SeriesData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SeriesData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SeriesData
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.SeriesData;

                        /**
                         * Creates a plain object from a SeriesData message. Also converts values to other types if specified.
                         * @param message SeriesData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.SeriesData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SeriesData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SeriesDefinition. */
                    interface ISeriesDefinition {

                        /** SeriesDefinition id */
                        id?: (string|null);

                        /** SeriesDefinition name */
                        name?: (string|null);

                        /** SeriesDefinition description */
                        description?: (string|null);

                        /** SeriesDefinition type */
                        type?: (factset.protobuf.stach.table.DataType|null);

                        /** SeriesDefinition isDimension */
                        isDimension?: (boolean|null);

                        /** SeriesDefinition isHidden */
                        isHidden?: (boolean|null);

                        /** SeriesDefinition nextSiblingId */
                        nextSiblingId?: (string|null);

                        /** SeriesDefinition parentId */
                        parentId?: (string|null);

                        /** SeriesDefinition headerId */
                        headerId?: (string|null);

                        /** SeriesDefinition headerIndex */
                        headerIndex?: (number|null);

                        /** SeriesDefinition format */
                        format?: (factset.protobuf.stach.table.ISeriesFormat|null);
                    }

                    /** Represents a SeriesDefinition. */
                    class SeriesDefinition implements ISeriesDefinition {

                        /**
                         * Constructs a new SeriesDefinition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ISeriesDefinition);

                        /** SeriesDefinition id. */
                        public id: string;

                        /** SeriesDefinition name. */
                        public name: string;

                        /** SeriesDefinition description. */
                        public description: string;

                        /** SeriesDefinition type. */
                        public type: factset.protobuf.stach.table.DataType;

                        /** SeriesDefinition isDimension. */
                        public isDimension: boolean;

                        /** SeriesDefinition isHidden. */
                        public isHidden: boolean;

                        /** SeriesDefinition nextSiblingId. */
                        public nextSiblingId: string;

                        /** SeriesDefinition parentId. */
                        public parentId: string;

                        /** SeriesDefinition headerId. */
                        public headerId: string;

                        /** SeriesDefinition headerIndex. */
                        public headerIndex: number;

                        /** SeriesDefinition format. */
                        public format?: (factset.protobuf.stach.table.ISeriesFormat|null);

                        /**
                         * Creates a new SeriesDefinition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SeriesDefinition instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ISeriesDefinition): factset.protobuf.stach.table.SeriesDefinition;

                        /**
                         * Encodes the specified SeriesDefinition message. Does not implicitly {@link factset.protobuf.stach.table.SeriesDefinition.verify|verify} messages.
                         * @param message SeriesDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ISeriesDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SeriesDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesDefinition.verify|verify} messages.
                         * @param message SeriesDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ISeriesDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SeriesDefinition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SeriesDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.SeriesDefinition;

                        /**
                         * Decodes a SeriesDefinition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SeriesDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.SeriesDefinition;

                        /**
                         * Verifies a SeriesDefinition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SeriesDefinition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SeriesDefinition
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.SeriesDefinition;

                        /**
                         * Creates a plain object from a SeriesDefinition message. Also converts values to other types if specified.
                         * @param message SeriesDefinition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.SeriesDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SeriesDefinition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SeriesFormat. */
                    interface ISeriesFormat {

                        /** SeriesFormat format */
                        format?: (string|null);

                        /** SeriesFormat nullFormat */
                        nullFormat?: (string|null);

                        /** SeriesFormat halign */
                        halign?: (factset.protobuf.stach.table.HorizontalAlignment|null);

                        /** SeriesFormat valign */
                        valign?: (factset.protobuf.stach.table.VerticalAlignment|null);
                    }

                    /** Represents a SeriesFormat. */
                    class SeriesFormat implements ISeriesFormat {

                        /**
                         * Constructs a new SeriesFormat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ISeriesFormat);

                        /** SeriesFormat format. */
                        public format: string;

                        /** SeriesFormat nullFormat. */
                        public nullFormat: string;

                        /** SeriesFormat halign. */
                        public halign: factset.protobuf.stach.table.HorizontalAlignment;

                        /** SeriesFormat valign. */
                        public valign: factset.protobuf.stach.table.VerticalAlignment;

                        /**
                         * Creates a new SeriesFormat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SeriesFormat instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ISeriesFormat): factset.protobuf.stach.table.SeriesFormat;

                        /**
                         * Encodes the specified SeriesFormat message. Does not implicitly {@link factset.protobuf.stach.table.SeriesFormat.verify|verify} messages.
                         * @param message SeriesFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ISeriesFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SeriesFormat message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.SeriesFormat.verify|verify} messages.
                         * @param message SeriesFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ISeriesFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SeriesFormat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SeriesFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.SeriesFormat;

                        /**
                         * Decodes a SeriesFormat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SeriesFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.SeriesFormat;

                        /**
                         * Verifies a SeriesFormat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SeriesFormat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SeriesFormat
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.SeriesFormat;

                        /**
                         * Creates a plain object from a SeriesFormat message. Also converts values to other types if specified.
                         * @param message SeriesFormat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.SeriesFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SeriesFormat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Table. */
                    interface ITable {

                        /** Table definition */
                        definition?: (factset.protobuf.stach.table.ITableDefinition|null);

                        /** Table data */
                        data?: (factset.protobuf.stach.table.ITableData|null);
                    }

                    /** Represents a Table. */
                    class Table implements ITable {

                        /**
                         * Constructs a new Table.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ITable);

                        /** Table definition. */
                        public definition?: (factset.protobuf.stach.table.ITableDefinition|null);

                        /** Table data. */
                        public data?: (factset.protobuf.stach.table.ITableData|null);

                        /**
                         * Creates a new Table instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Table instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ITable): factset.protobuf.stach.table.Table;

                        /**
                         * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.table.Table.verify|verify} messages.
                         * @param message Table message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Table.verify|verify} messages.
                         * @param message Table message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Table message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Table
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.Table;

                        /**
                         * Decodes a Table message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Table
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.Table;

                        /**
                         * Verifies a Table message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Table message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Table
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.Table;

                        /**
                         * Creates a plain object from a Table message. Also converts values to other types if specified.
                         * @param message Table
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Table to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TableData. */
                    interface ITableData {

                        /** TableData rows */
                        rows?: (factset.protobuf.stach.table.ISeriesDefinition[]|null);

                        /** TableData columns */
                        columns?: ({ [k: string]: factset.protobuf.stach.table.ISeriesData }|null);

                        /** TableData metadata */
                        metadata?: (factset.protobuf.stach.table.IMetadataCollection|null);
                    }

                    /** Represents a TableData. */
                    class TableData implements ITableData {

                        /**
                         * Constructs a new TableData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ITableData);

                        /** TableData rows. */
                        public rows: factset.protobuf.stach.table.ISeriesDefinition[];

                        /** TableData columns. */
                        public columns: { [k: string]: factset.protobuf.stach.table.ISeriesData };

                        /** TableData metadata. */
                        public metadata?: (factset.protobuf.stach.table.IMetadataCollection|null);

                        /**
                         * Creates a new TableData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableData instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ITableData): factset.protobuf.stach.table.TableData;

                        /**
                         * Encodes the specified TableData message. Does not implicitly {@link factset.protobuf.stach.table.TableData.verify|verify} messages.
                         * @param message TableData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableData message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TableData.verify|verify} messages.
                         * @param message TableData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.TableData;

                        /**
                         * Decodes a TableData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.TableData;

                        /**
                         * Verifies a TableData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableData
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.TableData;

                        /**
                         * Creates a plain object from a TableData message. Also converts values to other types if specified.
                         * @param message TableData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.TableData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TableDefinition. */
                    interface ITableDefinition {

                        /** TableDefinition headerTableId */
                        headerTableId?: (string|null);

                        /** TableDefinition columns */
                        columns?: (factset.protobuf.stach.table.ISeriesDefinition[]|null);
                    }

                    /** Represents a TableDefinition. */
                    class TableDefinition implements ITableDefinition {

                        /**
                         * Constructs a new TableDefinition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ITableDefinition);

                        /** TableDefinition headerTableId. */
                        public headerTableId: string;

                        /** TableDefinition columns. */
                        public columns: factset.protobuf.stach.table.ISeriesDefinition[];

                        /**
                         * Creates a new TableDefinition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableDefinition instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ITableDefinition): factset.protobuf.stach.table.TableDefinition;

                        /**
                         * Encodes the specified TableDefinition message. Does not implicitly {@link factset.protobuf.stach.table.TableDefinition.verify|verify} messages.
                         * @param message TableDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TableDefinition.verify|verify} messages.
                         * @param message TableDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableDefinition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.TableDefinition;

                        /**
                         * Decodes a TableDefinition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.TableDefinition;

                        /**
                         * Verifies a TableDefinition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableDefinition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableDefinition
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.TableDefinition;

                        /**
                         * Creates a plain object from a TableDefinition message. Also converts values to other types if specified.
                         * @param message TableDefinition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.TableDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableDefinition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** VerticalAlignment enum. */
                    enum VerticalAlignment {
                        UNKNOWN_VALIGN = 0,
                        TOP = 1,
                        MIDDLE = 2,
                        BOTTOM = 3
                    }

                    /** Properties of a DoubleArray. */
                    interface IDoubleArray {

                        /** DoubleArray values */
                        values?: (number[]|null);
                    }

                    /** Represents a DoubleArray. */
                    class DoubleArray implements IDoubleArray {

                        /**
                         * Constructs a new DoubleArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IDoubleArray);

                        /** DoubleArray values. */
                        public values: number[];

                        /**
                         * Creates a new DoubleArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DoubleArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IDoubleArray): factset.protobuf.stach.table.DoubleArray;

                        /**
                         * Encodes the specified DoubleArray message. Does not implicitly {@link factset.protobuf.stach.table.DoubleArray.verify|verify} messages.
                         * @param message DoubleArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IDoubleArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DoubleArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.DoubleArray.verify|verify} messages.
                         * @param message DoubleArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IDoubleArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DoubleArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DoubleArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.DoubleArray;

                        /**
                         * Decodes a DoubleArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DoubleArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.DoubleArray;

                        /**
                         * Verifies a DoubleArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DoubleArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DoubleArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.DoubleArray;

                        /**
                         * Creates a plain object from a DoubleArray message. Also converts values to other types if specified.
                         * @param message DoubleArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.DoubleArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DoubleArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FloatArray. */
                    interface IFloatArray {

                        /** FloatArray values */
                        values?: (number[]|null);
                    }

                    /** Represents a FloatArray. */
                    class FloatArray implements IFloatArray {

                        /**
                         * Constructs a new FloatArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IFloatArray);

                        /** FloatArray values. */
                        public values: number[];

                        /**
                         * Creates a new FloatArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FloatArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IFloatArray): factset.protobuf.stach.table.FloatArray;

                        /**
                         * Encodes the specified FloatArray message. Does not implicitly {@link factset.protobuf.stach.table.FloatArray.verify|verify} messages.
                         * @param message FloatArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IFloatArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FloatArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.FloatArray.verify|verify} messages.
                         * @param message FloatArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IFloatArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FloatArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FloatArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.FloatArray;

                        /**
                         * Decodes a FloatArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FloatArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.FloatArray;

                        /**
                         * Verifies a FloatArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FloatArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FloatArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.FloatArray;

                        /**
                         * Creates a plain object from a FloatArray message. Also converts values to other types if specified.
                         * @param message FloatArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.FloatArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FloatArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Int32Array. */
                    interface IInt32Array {

                        /** Int32Array values */
                        values?: (number[]|null);
                    }

                    /** Represents an Int32Array. */
                    class Int32Array implements IInt32Array {

                        /**
                         * Constructs a new Int32Array.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IInt32Array);

                        /** Int32Array values. */
                        public values: number[];

                        /**
                         * Creates a new Int32Array instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Int32Array instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IInt32Array): factset.protobuf.stach.table.Int32Array;

                        /**
                         * Encodes the specified Int32Array message. Does not implicitly {@link factset.protobuf.stach.table.Int32Array.verify|verify} messages.
                         * @param message Int32Array message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IInt32Array, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Int32Array message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Int32Array.verify|verify} messages.
                         * @param message Int32Array message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IInt32Array, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Int32Array message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Int32Array
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.Int32Array;

                        /**
                         * Decodes an Int32Array message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Int32Array
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.Int32Array;

                        /**
                         * Verifies an Int32Array message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Int32Array message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Int32Array
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.Int32Array;

                        /**
                         * Creates a plain object from an Int32Array message. Also converts values to other types if specified.
                         * @param message Int32Array
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.Int32Array, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Int32Array to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Int64Array. */
                    interface IInt64Array {

                        /** Int64Array values */
                        values?: ((number|Long)[]|null);
                    }

                    /** Represents an Int64Array. */
                    class Int64Array implements IInt64Array {

                        /**
                         * Constructs a new Int64Array.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IInt64Array);

                        /** Int64Array values. */
                        public values: (number|Long)[];

                        /**
                         * Creates a new Int64Array instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Int64Array instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IInt64Array): factset.protobuf.stach.table.Int64Array;

                        /**
                         * Encodes the specified Int64Array message. Does not implicitly {@link factset.protobuf.stach.table.Int64Array.verify|verify} messages.
                         * @param message Int64Array message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IInt64Array, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Int64Array message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.Int64Array.verify|verify} messages.
                         * @param message Int64Array message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IInt64Array, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Int64Array message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Int64Array
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.Int64Array;

                        /**
                         * Decodes an Int64Array message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Int64Array
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.Int64Array;

                        /**
                         * Verifies an Int64Array message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Int64Array message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Int64Array
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.Int64Array;

                        /**
                         * Creates a plain object from an Int64Array message. Also converts values to other types if specified.
                         * @param message Int64Array
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.Int64Array, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Int64Array to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BoolArray. */
                    interface IBoolArray {

                        /** BoolArray values */
                        values?: (boolean[]|null);
                    }

                    /** Represents a BoolArray. */
                    class BoolArray implements IBoolArray {

                        /**
                         * Constructs a new BoolArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IBoolArray);

                        /** BoolArray values. */
                        public values: boolean[];

                        /**
                         * Creates a new BoolArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BoolArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IBoolArray): factset.protobuf.stach.table.BoolArray;

                        /**
                         * Encodes the specified BoolArray message. Does not implicitly {@link factset.protobuf.stach.table.BoolArray.verify|verify} messages.
                         * @param message BoolArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IBoolArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BoolArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.BoolArray.verify|verify} messages.
                         * @param message BoolArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IBoolArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BoolArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BoolArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.BoolArray;

                        /**
                         * Decodes a BoolArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BoolArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.BoolArray;

                        /**
                         * Verifies a BoolArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BoolArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BoolArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.BoolArray;

                        /**
                         * Creates a plain object from a BoolArray message. Also converts values to other types if specified.
                         * @param message BoolArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.BoolArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BoolArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a StringArray. */
                    interface IStringArray {

                        /** StringArray values */
                        values?: (string[]|null);
                    }

                    /** Represents a StringArray. */
                    class StringArray implements IStringArray {

                        /**
                         * Constructs a new StringArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IStringArray);

                        /** StringArray values. */
                        public values: string[];

                        /**
                         * Creates a new StringArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StringArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IStringArray): factset.protobuf.stach.table.StringArray;

                        /**
                         * Encodes the specified StringArray message. Does not implicitly {@link factset.protobuf.stach.table.StringArray.verify|verify} messages.
                         * @param message StringArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IStringArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StringArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.StringArray.verify|verify} messages.
                         * @param message StringArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IStringArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StringArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StringArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.StringArray;

                        /**
                         * Decodes a StringArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StringArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.StringArray;

                        /**
                         * Verifies a StringArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StringArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StringArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.StringArray;

                        /**
                         * Creates a plain object from a StringArray message. Also converts values to other types if specified.
                         * @param message StringArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.StringArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StringArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DurationArray. */
                    interface IDurationArray {

                        /** DurationArray values */
                        values?: (google.protobuf.IDuration[]|null);
                    }

                    /** Represents a DurationArray. */
                    class DurationArray implements IDurationArray {

                        /**
                         * Constructs a new DurationArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.IDurationArray);

                        /** DurationArray values. */
                        public values: google.protobuf.IDuration[];

                        /**
                         * Creates a new DurationArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DurationArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.IDurationArray): factset.protobuf.stach.table.DurationArray;

                        /**
                         * Encodes the specified DurationArray message. Does not implicitly {@link factset.protobuf.stach.table.DurationArray.verify|verify} messages.
                         * @param message DurationArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.IDurationArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DurationArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.DurationArray.verify|verify} messages.
                         * @param message DurationArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.IDurationArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DurationArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DurationArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.DurationArray;

                        /**
                         * Decodes a DurationArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DurationArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.DurationArray;

                        /**
                         * Verifies a DurationArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DurationArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DurationArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.DurationArray;

                        /**
                         * Creates a plain object from a DurationArray message. Also converts values to other types if specified.
                         * @param message DurationArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.DurationArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DurationArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TimestampArray. */
                    interface ITimestampArray {

                        /** TimestampArray values */
                        values?: (google.protobuf.ITimestamp[]|null);
                    }

                    /** Represents a TimestampArray. */
                    class TimestampArray implements ITimestampArray {

                        /**
                         * Constructs a new TimestampArray.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.table.ITimestampArray);

                        /** TimestampArray values. */
                        public values: google.protobuf.ITimestamp[];

                        /**
                         * Creates a new TimestampArray instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimestampArray instance
                         */
                        public static create(properties?: factset.protobuf.stach.table.ITimestampArray): factset.protobuf.stach.table.TimestampArray;

                        /**
                         * Encodes the specified TimestampArray message. Does not implicitly {@link factset.protobuf.stach.table.TimestampArray.verify|verify} messages.
                         * @param message TimestampArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.table.ITimestampArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimestampArray message, length delimited. Does not implicitly {@link factset.protobuf.stach.table.TimestampArray.verify|verify} messages.
                         * @param message TimestampArray message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.table.ITimestampArray, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimestampArray message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimestampArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.table.TimestampArray;

                        /**
                         * Decodes a TimestampArray message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimestampArray
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.table.TimestampArray;

                        /**
                         * Verifies a TimestampArray message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimestampArray message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimestampArray
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.table.TimestampArray;

                        /**
                         * Creates a plain object from a TimestampArray message. Also converts values to other types if specified.
                         * @param message TimestampArray
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.table.TimestampArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimestampArray to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace google. */
    namespace google {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Properties of a Duration. */
            interface IDuration {

                /** Duration seconds */
                seconds?: (number|Long|null);

                /** Duration nanos */
                nanos?: (number|null);
            }

            /** Represents a Duration. */
            class Duration implements IDuration {

                /**
                 * Constructs a new Duration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IDuration);

                /** Duration seconds. */
                public seconds: (number|Long);

                /** Duration nanos. */
                public nanos: number;

                /**
                 * Creates a new Duration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Duration instance
                 */
                public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

                /**
                 * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @param message Duration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @param message Duration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Duration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

                /**
                 * Decodes a Duration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

                /**
                 * Verifies a Duration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Duration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Duration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

                /**
                 * Creates a plain object from a Duration message. Also converts values to other types if specified.
                 * @param message Duration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Duration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Timestamp. */
            interface ITimestamp {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);
            }

            /** Represents a Timestamp. */
            class Timestamp implements ITimestamp {

                /**
                 * Constructs a new Timestamp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ITimestamp);

                /** Timestamp seconds. */
                public seconds: (number|Long);

                /** Timestamp nanos. */
                public nanos: number;

                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Timestamp instance
                 */
                public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @param message Timestamp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @param message Timestamp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

                /**
                 * Verifies a Timestamp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Timestamp
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @param message Timestamp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Timestamp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Struct. */
            interface IStruct {

                /** Struct fields */
                fields?: ({ [k: string]: google.protobuf.IValue }|null);
            }

            /** Represents a Struct. */
            class Struct implements IStruct {

                /**
                 * Constructs a new Struct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IStruct);

                /** Struct fields. */
                public fields: { [k: string]: google.protobuf.IValue };

                /**
                 * Creates a new Struct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Struct instance
                 */
                public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

                /**
                 * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Struct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

                /**
                 * Decodes a Struct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

                /**
                 * Verifies a Struct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Struct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Struct
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

                /**
                 * Creates a plain object from a Struct message. Also converts values to other types if specified.
                 * @param message Struct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Struct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|null);

                /** Value numberValue */
                numberValue?: (number|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value boolValue */
                boolValue?: (boolean|null);

                /** Value structValue */
                structValue?: (google.protobuf.IStruct|null);

                /** Value listValue */
                listValue?: (google.protobuf.IListValue|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IValue);

                /** Value nullValue. */
                public nullValue: google.protobuf.NullValue;

                /** Value numberValue. */
                public numberValue: number;

                /** Value stringValue. */
                public stringValue: string;

                /** Value boolValue. */
                public boolValue: boolean;

                /** Value structValue. */
                public structValue?: (google.protobuf.IStruct|null);

                /** Value listValue. */
                public listValue?: (google.protobuf.IListValue|null);

                /** Value kind. */
                public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

                /**
                 * Verifies a Value message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** NullValue enum. */
            enum NullValue {
                NULL_VALUE = 0
            }

            /** Properties of a ListValue. */
            interface IListValue {

                /** ListValue values */
                values?: (google.protobuf.IValue[]|null);
            }

            /** Represents a ListValue. */
            class ListValue implements IListValue {

                /**
                 * Constructs a new ListValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IListValue);

                /** ListValue values. */
                public values: google.protobuf.IValue[];

                /**
                 * Creates a new ListValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListValue instance
                 */
                public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

                /**
                 * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

                /**
                 * Decodes a ListValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

                /**
                 * Verifies a ListValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListValue
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

                /**
                 * Creates a plain object from a ListValue message. Also converts values to other types if specified.
                 * @param message ListValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
