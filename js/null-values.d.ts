import stach from './stach';
import * as Long from 'long';
declare const NullValues: {
    DOUBLE: number;
    FLOAT: number;
    INT32: number;
    INT64: Long;
    STRING: string;
    DURATION: stach.google.protobuf.Duration;
    TIMESTAMP: stach.google.protobuf.Timestamp;
    isNull(value: string | number | boolean | Long | stach.google.protobuf.IDuration | stach.google.protobuf.ITimestamp, dataType: stach.factset.protobuf.stach.table.DataType): boolean;
};
declare module './stach' {
    namespace factset.protobuf.stach {
        export { NullValues };
    }
}
export {};
