import { Table } from '../../../fds/protobuf/stach/table/Table';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A column organized package of tables
 */
export interface Package {
    /**
     *  The version of the STACH schema. Formatted {major}.{minor}
     */
    version: string;
    /**
     *  The array of primary table ids
     */
    primaryTableIds: string[];
    /**
     *  The map (key: table id) of all tables
     */
    tables: {
        [key: string]: Table;
    };
}
export interface Package_TablesEntry {
    key: string;
    value: Table | undefined;
}
export declare const Package: {
    encode(message: Package, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Package;
    fromJSON(object: any): Package;
    fromPartial(object: DeepPartial<Package>): Package;
    toJSON(message: Package): unknown;
};
export declare const Package_TablesEntry: {
    encode(message: Package_TablesEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Package_TablesEntry;
    fromJSON(object: any): Package_TablesEntry;
    fromPartial(object: DeepPartial<Package_TablesEntry>): Package_TablesEntry;
    toJSON(message: Package_TablesEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
