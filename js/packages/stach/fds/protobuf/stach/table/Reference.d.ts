import { ReferenceType } from '../../../../fds/protobuf/stach/table/ReferenceType';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A reference to a table or a piece of a table
 */
export interface Reference {
    /**
     *  The type of the reference
     */
    referenceType: ReferenceType;
    /**
     *  The table id
     */
    tableId: string;
    /**
     *  The column id
     */
    columnId: string;
    /**
     *  The row id
     */
    rowId: string;
}
export declare const Reference: {
    encode(message: Reference, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Reference;
    fromJSON(object: any): Reference;
    fromPartial(object: DeepPartial<Reference>): Reference;
    toJSON(message: Reference): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
