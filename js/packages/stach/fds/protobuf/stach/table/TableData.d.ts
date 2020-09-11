import { RowDefinition } from '../../../../fds/protobuf/stach/table/RowDefinition';
import { ColumnData } from '../../../../fds/protobuf/stach/table/ColumnData';
import { MetadataCollection } from '../../../../fds/protobuf/stach/table/MetadataCollection';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  An object of table data
 */
export interface TableData {
    /**
     *  The array of rows definitions
     */
    rows: RowDefinition[];
    /**
     *  The map (key: column id) of column data
     */
    columns: {
        [key: string]: ColumnData;
    };
    /**
     *  The metadata
     */
    metadata?: MetadataCollection;
}
export interface TableData_ColumnsEntry {
    key: string;
    value?: ColumnData;
}
export declare const TableData: {
    encode(message: TableData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): TableData;
    fromJSON(object: any): TableData;
    fromPartial(object: DeepPartial<TableData>): TableData;
    toJSON(message: TableData): unknown;
};
export declare const TableData_ColumnsEntry: {
    encode(message: TableData_ColumnsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): TableData_ColumnsEntry;
    fromJSON(object: any): TableData_ColumnsEntry;
    fromPartial(object: DeepPartial<TableData_ColumnsEntry>): TableData_ColumnsEntry;
    toJSON(message: TableData_ColumnsEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
