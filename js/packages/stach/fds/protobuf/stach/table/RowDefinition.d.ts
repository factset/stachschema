import { DataFormat } from '../../../../fds/protobuf/stach/table/DataFormat';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A definition of a row
 *
 *  Overrides the column definition
 */
export interface RowDefinition {
    /**
     *  The id; used for referring to a row internal to a package
     */
    id: string;
    /**
     *  The data format; overrides the `ColumnDefinition.format`
     */
    format?: DataFormat;
}
export declare const RowDefinition: {
    encode(message: RowDefinition, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowDefinition;
    fromJSON(object: any): RowDefinition;
    fromPartial(object: DeepPartial<RowDefinition>): RowDefinition;
    toJSON(message: RowDefinition): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
