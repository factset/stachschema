import { ListValue } from '../../../../google/protobuf/struct';
import { CellDefinition } from '../../../../fds/protobuf/stach/table/CellDefinition';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  An array of column data
 *
 *  The type chosen correlates to the data type of the `ColumnDefinition.type`
 */
export interface ColumnData {
    /**
     *  The map (key: uncompressed index, value: length to repeat the value) used during compression
     */
    ranges: {
        [key: number]: number;
    };
    /**
     *  The values
     */
    values: ListValue | undefined;
    /**
     *  The cell definitions
     */
    definitions: CellDefinition[];
}
export interface ColumnData_RangesEntry {
    key: number;
    value: number;
}
export declare const ColumnData: {
    encode(message: ColumnData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): ColumnData;
    fromJSON(object: any): ColumnData;
    fromPartial(object: DeepPartial<ColumnData>): ColumnData;
    toJSON(message: ColumnData): unknown;
};
export declare const ColumnData_RangesEntry: {
    encode(message: ColumnData_RangesEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): ColumnData_RangesEntry;
    fromJSON(object: any): ColumnData_RangesEntry;
    fromPartial(object: DeepPartial<ColumnData_RangesEntry>): ColumnData_RangesEntry;
    toJSON(message: ColumnData_RangesEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
