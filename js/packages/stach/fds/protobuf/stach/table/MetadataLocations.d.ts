import { ListOfMetadata } from '../../../../fds/protobuf/stach/table/ListOfMetadata';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  The metadata locations for a table
 */
export interface MetadataLocations {
    /**
     *  The array (metadata item id) of metadata items associated with the whole table
     */
    table: string[];
    /**
     *  The map (key: column id) of all metadata items associated with a column
     */
    columns: {
        [key: string]: ListOfMetadata;
    };
    /**
     *  The map (key: row id) of all metadata items associated with a row
     */
    rows: {
        [key: string]: ListOfMetadata;
    };
    /**
     *  The metadata items associated with specific cells
     */
    cells?: MetadataLocations_CellsColumnMap;
}
/**
 *  A message wrapper for a map of columns to `CellsRowMap`
 */
export interface MetadataLocations_CellsColumnMap {
    /**
     *  The map (key: column id) of columns to `CellsRowMap`
     */
    columns: {
        [key: string]: MetadataLocations_CellsRowMap;
    };
}
export interface MetadataLocations_CellsColumnMap_ColumnsEntry {
    key: string;
    value?: MetadataLocations_CellsRowMap;
}
/**
 *  A message wrapper for a map of rows to a list of metadata
 */
export interface MetadataLocations_CellsRowMap {
    /**
     *  The map (key: row id) of rows to a list of metadata
     */
    rows: {
        [key: string]: ListOfMetadata;
    };
}
export interface MetadataLocations_CellsRowMap_RowsEntry {
    key: string;
    value?: ListOfMetadata;
}
export interface MetadataLocations_ColumnsEntry {
    key: string;
    value?: ListOfMetadata;
}
export interface MetadataLocations_RowsEntry {
    key: string;
    value?: ListOfMetadata;
}
export declare const MetadataLocations: {
    encode(message: MetadataLocations, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations;
    fromJSON(object: any): MetadataLocations;
    fromPartial(object: DeepPartial<MetadataLocations>): MetadataLocations;
    toJSON(message: MetadataLocations): unknown;
};
export declare const MetadataLocations_CellsColumnMap: {
    encode(message: MetadataLocations_CellsColumnMap, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_CellsColumnMap;
    fromJSON(object: any): MetadataLocations_CellsColumnMap;
    fromPartial(object: DeepPartial<MetadataLocations_CellsColumnMap>): MetadataLocations_CellsColumnMap;
    toJSON(message: MetadataLocations_CellsColumnMap): unknown;
};
export declare const MetadataLocations_CellsColumnMap_ColumnsEntry: {
    encode(message: MetadataLocations_CellsColumnMap_ColumnsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_CellsColumnMap_ColumnsEntry;
    fromJSON(object: any): MetadataLocations_CellsColumnMap_ColumnsEntry;
    fromPartial(object: DeepPartial<MetadataLocations_CellsColumnMap_ColumnsEntry>): MetadataLocations_CellsColumnMap_ColumnsEntry;
    toJSON(message: MetadataLocations_CellsColumnMap_ColumnsEntry): unknown;
};
export declare const MetadataLocations_CellsRowMap: {
    encode(message: MetadataLocations_CellsRowMap, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_CellsRowMap;
    fromJSON(object: any): MetadataLocations_CellsRowMap;
    fromPartial(object: DeepPartial<MetadataLocations_CellsRowMap>): MetadataLocations_CellsRowMap;
    toJSON(message: MetadataLocations_CellsRowMap): unknown;
};
export declare const MetadataLocations_CellsRowMap_RowsEntry: {
    encode(message: MetadataLocations_CellsRowMap_RowsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_CellsRowMap_RowsEntry;
    fromJSON(object: any): MetadataLocations_CellsRowMap_RowsEntry;
    fromPartial(object: DeepPartial<MetadataLocations_CellsRowMap_RowsEntry>): MetadataLocations_CellsRowMap_RowsEntry;
    toJSON(message: MetadataLocations_CellsRowMap_RowsEntry): unknown;
};
export declare const MetadataLocations_ColumnsEntry: {
    encode(message: MetadataLocations_ColumnsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_ColumnsEntry;
    fromJSON(object: any): MetadataLocations_ColumnsEntry;
    fromPartial(object: DeepPartial<MetadataLocations_ColumnsEntry>): MetadataLocations_ColumnsEntry;
    toJSON(message: MetadataLocations_ColumnsEntry): unknown;
};
export declare const MetadataLocations_RowsEntry: {
    encode(message: MetadataLocations_RowsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): MetadataLocations_RowsEntry;
    fromJSON(object: any): MetadataLocations_RowsEntry;
    fromPartial(object: DeepPartial<MetadataLocations_RowsEntry>): MetadataLocations_RowsEntry;
    toJSON(message: MetadataLocations_RowsEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
