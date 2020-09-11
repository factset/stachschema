import { DataFormat } from '../../../../fds/protobuf/stach/table/DataFormat';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A cell definition
 *
 *  Overrides the column and row definition
 */
export interface CellDefinition {
    /**
     *  The data type; correlates with the chosen property for `ColumnData.data`; overrides the `ColumnDefinition.type`
     */
    type: string;
    /**
     *  The data format; overrides the `RowDefinition.format` and the `ColumnDefinition.format`
     */
    format?: DataFormat;
}
export declare const CellDefinition: {
    encode(message: CellDefinition, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): CellDefinition;
    fromJSON(object: any): CellDefinition;
    fromPartial(object: DeepPartial<CellDefinition>): CellDefinition;
    toJSON(message: CellDefinition): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
