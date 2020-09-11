import { Value } from '../../../../google/protobuf/struct';
import { Reference } from '../../../../fds/protobuf/stach/table/Reference';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A metadata item
 *
 *  Represents data to describe the table or parts of the table
 */
export interface MetadataItem {
    /**
     *  The value
     */
    value?: Value | undefined;
    /**
     *  The table reference
     */
    reference?: Reference | undefined;
}
export declare const MetadataItem: {
    encode(message: MetadataItem, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataItem;
    fromJSON(object: any): MetadataItem;
    fromPartial(object: DeepPartial<MetadataItem>): MetadataItem;
    toJSON(message: MetadataItem): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
