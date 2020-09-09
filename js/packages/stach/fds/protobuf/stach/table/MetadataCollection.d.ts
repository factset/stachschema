import { MetadataItem } from '../../../../fds/protobuf/stach/table/MetadataItem';
import { MetadataLocations } from '../../../../fds/protobuf/stach/table/MetadataLocations';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A collection of metadata for a table
 */
export interface MetadataCollection {
    /**
     *  The metadata items associated with a table
     */
    items: {
        [key: string]: MetadataItem;
    };
    /**
     *  The locations where metadata items are associated
     */
    locations: MetadataLocations | undefined;
}
export interface MetadataCollection_ItemsEntry {
    key: string;
    value: MetadataItem | undefined;
}
export declare const MetadataCollection: {
    encode(message: MetadataCollection, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataCollection;
    fromJSON(object: any): MetadataCollection;
    fromPartial(object: DeepPartial<MetadataCollection>): MetadataCollection;
    toJSON(message: MetadataCollection): unknown;
};
export declare const MetadataCollection_ItemsEntry: {
    encode(message: MetadataCollection_ItemsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataCollection_ItemsEntry;
    fromJSON(object: any): MetadataCollection_ItemsEntry;
    fromPartial(object: DeepPartial<MetadataCollection_ItemsEntry>): MetadataCollection_ItemsEntry;
    toJSON(message: MetadataCollection_ItemsEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
