import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A list of metadata ids
 */
export interface ListOfMetadata {
    /**
     *  The list of metadata ids
     */
    ids: string[];
}
export declare const ListOfMetadata: {
    encode(message: ListOfMetadata, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): ListOfMetadata;
    fromJSON(object: any): ListOfMetadata;
    fromPartial(object: DeepPartial<ListOfMetadata>): ListOfMetadata;
    toJSON(message: ListOfMetadata): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
