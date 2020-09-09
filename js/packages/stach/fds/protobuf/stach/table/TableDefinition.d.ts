import { ColumnDefinition } from '../../../../fds/protobuf/stach/table/ColumnDefinition';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A table definition
 */
export interface TableDefinition {
    /**
     *  The id of the headers table
     */
    headerTableId: string;
    /**
     *  The array of column definitions
     */
    columns: ColumnDefinition[];
}
export declare const TableDefinition: {
    encode(message: TableDefinition, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): TableDefinition;
    fromJSON(object: any): TableDefinition;
    fromPartial(object: DeepPartial<TableDefinition>): TableDefinition;
    toJSON(message: TableDefinition): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
