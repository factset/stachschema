import { TableDefinition } from '../../../../fds/protobuf/stach/table/TableDefinition';
import { TableData } from '../../../../fds/protobuf/stach/table/TableData';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A column organized table
 */
export interface Table {
    /**
     *  The definition
     */
    definition: TableDefinition | undefined;
    /**
     *  The data
     */
    data: TableData | undefined;
}
export declare const Table: {
    encode(message: Table, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Table;
    fromJSON(object: any): Table;
    fromPartial(object: DeepPartial<Table>): Table;
    toJSON(message: Table): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
