import { ColumnDefinition } from '../../../fds/protobuf/stach/table/ColumnDefinition';
import { MetadataItem } from '../../../fds/protobuf/stach/table/MetadataItem';
import { ListValue, Struct } from '../../../google/protobuf/struct';
import { CellDefinition } from '../../../fds/protobuf/stach/table/CellDefinition';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A row organized package of tables
 */
export interface RowOrganizedPackage {
    /**
     *  The version of the STACH schema. Formatted {major}.{minor}
     */
    version: string;
    /**
     *  The map (key: table id) of all tables
     */
    tables: {
        [key: string]: RowOrganizedPackage_Table;
    };
}
export interface RowOrganizedPackage_TablesEntry {
    key: string;
    value?: RowOrganizedPackage_Table;
}
/**
 *  A row organized table
 */
export interface RowOrganizedPackage_Table {
    /**
     *  The definition
     */
    definition?: RowOrganizedPackage_TableDefinition;
    /**
     *  The headers definition
     */
    headersDefinition?: RowOrganizedPackage_TableDefinition;
    /**
     *  The data
     */
    data?: RowOrganizedPackage_TableData;
}
/**
 *  A table definition
 */
export interface RowOrganizedPackage_TableDefinition {
    /**
     *  The column definitions
     */
    columns: ColumnDefinition[];
}
/**
 *  A table data
 */
export interface RowOrganizedPackage_TableData {
    /**
     *  The rows
     */
    rows: RowOrganizedPackage_Row[];
    /**
     *  The map (key: metadataitem id) of metadata at the table location
     */
    tableMetadata: {
        [key: string]: MetadataItem;
    };
    /**
     *  The map (key: column id) of metadata at the column location
     */
    columnMetadata: {
        [key: string]: RowOrganizedPackage_MapOfMetadata;
    };
}
export interface RowOrganizedPackage_TableData_TableMetadataEntry {
    key: string;
    value?: MetadataItem;
}
export interface RowOrganizedPackage_TableData_ColumnMetadataEntry {
    key: string;
    value?: RowOrganizedPackage_MapOfMetadata;
}
/**
 *  A row
 */
export interface RowOrganizedPackage_Row {
    /**
     *  The row id
     */
    id: string;
    /**
     *  The row type
     */
    rowType: RowOrganizedPackage_Row_RowType;
    /**
     *  The list of cell values
     */
    cells?: ListValue | undefined;
    /**
     *  The map of cell values
     */
    values?: Struct | undefined;
    /**
     *  The details for a body row cell
     */
    cellDetails: {
        [key: string]: RowOrganizedPackage_CellDetail;
    };
    /**
     *  The details for a header row cell
     */
    headerCellDetails: {
        [key: string]: RowOrganizedPackage_HeaderCellDetail;
    };
    /**
     *  The map (key: metadataitem id) of metadata at the row location
     */
    rowMetadata: {
        [key: string]: MetadataItem;
    };
}
export interface RowOrganizedPackage_Row_CellDetailsEntry {
    key: string;
    value?: RowOrganizedPackage_CellDetail;
}
export interface RowOrganizedPackage_Row_HeaderCellDetailsEntry {
    key: string;
    value?: RowOrganizedPackage_HeaderCellDetail;
}
export interface RowOrganizedPackage_Row_RowMetadataEntry {
    key: string;
    value?: MetadataItem;
}
/**
 *  A body row cell detail
 */
export interface RowOrganizedPackage_CellDetail {
    /**
     *  The group level
     */
    groupLevel: number;
    /**
     *  The definition of the cell; overrides the column definition
     */
    cellDefinition?: CellDefinition;
    /**
     *  The map (key: metadataitem id) of metadata at the cell location
     */
    cellMetadata: {
        [key: string]: MetadataItem;
    };
}
export interface RowOrganizedPackage_CellDetail_CellMetadataEntry {
    key: string;
    value?: MetadataItem;
}
/**
 *  A header row cell detail
 */
export interface RowOrganizedPackage_HeaderCellDetail {
    /**
     *  The column span
     */
    colspan: number;
    /**
     *  The row span
     */
    rowspan: number;
    /**
     *  The table where the row is sourced from
     */
    source: RowOrganizedPackage_HeaderCellDetail_TableSource;
    /**
     *  The column index; used to index into the `headers_definition.columns` array
     */
    columnIndex: number;
    /**
     *  The definition of the cell; overrides the column definition
     */
    cellDefinition?: CellDefinition;
    /**
     *  The map (key: metadataitem id) of metadata at the cell location
     */
    cellMetadata: {
        [key: string]: MetadataItem;
    };
}
export interface RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry {
    key: string;
    value?: MetadataItem;
}
/**
 *  A wrapper for a map of metadata items
 */
export interface RowOrganizedPackage_MapOfMetadata {
    /**
     *  The map (key: metadataitem id) metadata
     */
    items: {
        [key: string]: MetadataItem;
    };
}
export interface RowOrganizedPackage_MapOfMetadata_ItemsEntry {
    key: string;
    value?: MetadataItem;
}
/**  A type of row
 */
export declare enum RowOrganizedPackage_Row_RowType {
    /** Body -  A body row
     */
    Body = 0,
    /** Header -  A header row
     */
    Header = 1,
    UNRECOGNIZED = -1
}
export declare function rowOrganizedPackage_Row_RowTypeFromJSON(object: any): RowOrganizedPackage_Row_RowType;
export declare function rowOrganizedPackage_Row_RowTypeToJSON(object: RowOrganizedPackage_Row_RowType): string;
/**  A table where a row is sourced from
 */
export declare enum RowOrganizedPackage_HeaderCellDetail_TableSource {
    UNKNOWN = 0,
    NONE = 1,
    PRIMARY = 2,
    HEADERS = 3,
    UNRECOGNIZED = -1
}
export declare function rowOrganizedPackage_HeaderCellDetail_TableSourceFromJSON(object: any): RowOrganizedPackage_HeaderCellDetail_TableSource;
export declare function rowOrganizedPackage_HeaderCellDetail_TableSourceToJSON(object: RowOrganizedPackage_HeaderCellDetail_TableSource): string;
export declare const RowOrganizedPackage: {
    encode(message: RowOrganizedPackage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage;
    fromJSON(object: any): RowOrganizedPackage;
    fromPartial(object: DeepPartial<RowOrganizedPackage>): RowOrganizedPackage;
    toJSON(message: RowOrganizedPackage): unknown;
};
export declare const RowOrganizedPackage_TablesEntry: {
    encode(message: RowOrganizedPackage_TablesEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_TablesEntry;
    fromJSON(object: any): RowOrganizedPackage_TablesEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_TablesEntry>): RowOrganizedPackage_TablesEntry;
    toJSON(message: RowOrganizedPackage_TablesEntry): unknown;
};
export declare const RowOrganizedPackage_Table: {
    encode(message: RowOrganizedPackage_Table, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_Table;
    fromJSON(object: any): RowOrganizedPackage_Table;
    fromPartial(object: DeepPartial<RowOrganizedPackage_Table>): RowOrganizedPackage_Table;
    toJSON(message: RowOrganizedPackage_Table): unknown;
};
export declare const RowOrganizedPackage_TableDefinition: {
    encode(message: RowOrganizedPackage_TableDefinition, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_TableDefinition;
    fromJSON(object: any): RowOrganizedPackage_TableDefinition;
    fromPartial(object: DeepPartial<RowOrganizedPackage_TableDefinition>): RowOrganizedPackage_TableDefinition;
    toJSON(message: RowOrganizedPackage_TableDefinition): unknown;
};
export declare const RowOrganizedPackage_TableData: {
    encode(message: RowOrganizedPackage_TableData, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_TableData;
    fromJSON(object: any): RowOrganizedPackage_TableData;
    fromPartial(object: DeepPartial<RowOrganizedPackage_TableData>): RowOrganizedPackage_TableData;
    toJSON(message: RowOrganizedPackage_TableData): unknown;
};
export declare const RowOrganizedPackage_TableData_TableMetadataEntry: {
    encode(message: RowOrganizedPackage_TableData_TableMetadataEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_TableData_TableMetadataEntry;
    fromJSON(object: any): RowOrganizedPackage_TableData_TableMetadataEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_TableData_TableMetadataEntry>): RowOrganizedPackage_TableData_TableMetadataEntry;
    toJSON(message: RowOrganizedPackage_TableData_TableMetadataEntry): unknown;
};
export declare const RowOrganizedPackage_TableData_ColumnMetadataEntry: {
    encode(message: RowOrganizedPackage_TableData_ColumnMetadataEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_TableData_ColumnMetadataEntry;
    fromJSON(object: any): RowOrganizedPackage_TableData_ColumnMetadataEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_TableData_ColumnMetadataEntry>): RowOrganizedPackage_TableData_ColumnMetadataEntry;
    toJSON(message: RowOrganizedPackage_TableData_ColumnMetadataEntry): unknown;
};
export declare const RowOrganizedPackage_Row: {
    encode(message: RowOrganizedPackage_Row, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_Row;
    fromJSON(object: any): RowOrganizedPackage_Row;
    fromPartial(object: DeepPartial<RowOrganizedPackage_Row>): RowOrganizedPackage_Row;
    toJSON(message: RowOrganizedPackage_Row): unknown;
};
export declare const RowOrganizedPackage_Row_CellDetailsEntry: {
    encode(message: RowOrganizedPackage_Row_CellDetailsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_Row_CellDetailsEntry;
    fromJSON(object: any): RowOrganizedPackage_Row_CellDetailsEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_Row_CellDetailsEntry>): RowOrganizedPackage_Row_CellDetailsEntry;
    toJSON(message: RowOrganizedPackage_Row_CellDetailsEntry): unknown;
};
export declare const RowOrganizedPackage_Row_HeaderCellDetailsEntry: {
    encode(message: RowOrganizedPackage_Row_HeaderCellDetailsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_Row_HeaderCellDetailsEntry;
    fromJSON(object: any): RowOrganizedPackage_Row_HeaderCellDetailsEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_Row_HeaderCellDetailsEntry>): RowOrganizedPackage_Row_HeaderCellDetailsEntry;
    toJSON(message: RowOrganizedPackage_Row_HeaderCellDetailsEntry): unknown;
};
export declare const RowOrganizedPackage_Row_RowMetadataEntry: {
    encode(message: RowOrganizedPackage_Row_RowMetadataEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_Row_RowMetadataEntry;
    fromJSON(object: any): RowOrganizedPackage_Row_RowMetadataEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_Row_RowMetadataEntry>): RowOrganizedPackage_Row_RowMetadataEntry;
    toJSON(message: RowOrganizedPackage_Row_RowMetadataEntry): unknown;
};
export declare const RowOrganizedPackage_CellDetail: {
    encode(message: RowOrganizedPackage_CellDetail, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_CellDetail;
    fromJSON(object: any): RowOrganizedPackage_CellDetail;
    fromPartial(object: DeepPartial<RowOrganizedPackage_CellDetail>): RowOrganizedPackage_CellDetail;
    toJSON(message: RowOrganizedPackage_CellDetail): unknown;
};
export declare const RowOrganizedPackage_CellDetail_CellMetadataEntry: {
    encode(message: RowOrganizedPackage_CellDetail_CellMetadataEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_CellDetail_CellMetadataEntry;
    fromJSON(object: any): RowOrganizedPackage_CellDetail_CellMetadataEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_CellDetail_CellMetadataEntry>): RowOrganizedPackage_CellDetail_CellMetadataEntry;
    toJSON(message: RowOrganizedPackage_CellDetail_CellMetadataEntry): unknown;
};
export declare const RowOrganizedPackage_HeaderCellDetail: {
    encode(message: RowOrganizedPackage_HeaderCellDetail, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_HeaderCellDetail;
    fromJSON(object: any): RowOrganizedPackage_HeaderCellDetail;
    fromPartial(object: DeepPartial<RowOrganizedPackage_HeaderCellDetail>): RowOrganizedPackage_HeaderCellDetail;
    toJSON(message: RowOrganizedPackage_HeaderCellDetail): unknown;
};
export declare const RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry: {
    encode(message: RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry;
    fromJSON(object: any): RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry>): RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry;
    toJSON(message: RowOrganizedPackage_HeaderCellDetail_CellMetadataEntry): unknown;
};
export declare const RowOrganizedPackage_MapOfMetadata: {
    encode(message: RowOrganizedPackage_MapOfMetadata, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_MapOfMetadata;
    fromJSON(object: any): RowOrganizedPackage_MapOfMetadata;
    fromPartial(object: DeepPartial<RowOrganizedPackage_MapOfMetadata>): RowOrganizedPackage_MapOfMetadata;
    toJSON(message: RowOrganizedPackage_MapOfMetadata): unknown;
};
export declare const RowOrganizedPackage_MapOfMetadata_ItemsEntry: {
    encode(message: RowOrganizedPackage_MapOfMetadata_ItemsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): RowOrganizedPackage_MapOfMetadata_ItemsEntry;
    fromJSON(object: any): RowOrganizedPackage_MapOfMetadata_ItemsEntry;
    fromPartial(object: DeepPartial<RowOrganizedPackage_MapOfMetadata_ItemsEntry>): RowOrganizedPackage_MapOfMetadata_ItemsEntry;
    toJSON(message: RowOrganizedPackage_MapOfMetadata_ItemsEntry): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
