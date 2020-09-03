// package: factset.protobuf.stach
// file: fds/protobuf/stach/RowOrganized.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_MetadataItem_pb from "../../../fds/protobuf/stach/table/MetadataItem_pb";
import * as fds_protobuf_stach_table_CellDefinition_pb from "../../../fds/protobuf/stach/table/CellDefinition_pb";
import * as fds_protobuf_stach_table_ColumnDefinition_pb from "../../../fds/protobuf/stach/table/ColumnDefinition_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class RowOrganizedPackage extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getTablesMap(): jspb.Map<string, RowOrganizedPackage.Table>;
  clearTablesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowOrganizedPackage.AsObject;
  static toObject(includeInstance: boolean, msg: RowOrganizedPackage): RowOrganizedPackage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RowOrganizedPackage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowOrganizedPackage;
  static deserializeBinaryFromReader(message: RowOrganizedPackage, reader: jspb.BinaryReader): RowOrganizedPackage;
}

export namespace RowOrganizedPackage {
  export type AsObject = {
    version: string,
    tablesMap: Array<[string, RowOrganizedPackage.Table.AsObject]>,
  }

  export class Table extends jspb.Message {
    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): RowOrganizedPackage.TableDefinition | undefined;
    setDefinition(value?: RowOrganizedPackage.TableDefinition): void;

    hasHeadersDefinition(): boolean;
    clearHeadersDefinition(): void;
    getHeadersDefinition(): RowOrganizedPackage.TableDefinition | undefined;
    setHeadersDefinition(value?: RowOrganizedPackage.TableDefinition): void;

    hasData(): boolean;
    clearData(): void;
    getData(): RowOrganizedPackage.TableData | undefined;
    setData(value?: RowOrganizedPackage.TableData): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Table.AsObject;
    static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Table;
    static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
  }

  export namespace Table {
    export type AsObject = {
      definition?: RowOrganizedPackage.TableDefinition.AsObject,
      headersDefinition?: RowOrganizedPackage.TableDefinition.AsObject,
      data?: RowOrganizedPackage.TableData.AsObject,
    }
  }

  export class TableDefinition extends jspb.Message {
    clearColumnsList(): void;
    getColumnsList(): Array<fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition>;
    setColumnsList(value: Array<fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition>): void;
    addColumns(value?: fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition, index?: number): fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: TableDefinition): TableDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableDefinition;
    static deserializeBinaryFromReader(message: TableDefinition, reader: jspb.BinaryReader): TableDefinition;
  }

  export namespace TableDefinition {
    export type AsObject = {
      columnsList: Array<fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition.AsObject>,
    }
  }

  export class TableData extends jspb.Message {
    clearRowsList(): void;
    getRowsList(): Array<RowOrganizedPackage.Row>;
    setRowsList(value: Array<RowOrganizedPackage.Row>): void;
    addRows(value?: RowOrganizedPackage.Row, index?: number): RowOrganizedPackage.Row;

    getTableMetadataMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
    clearTableMetadataMap(): void;
    getColumnMetadataMap(): jspb.Map<string, RowOrganizedPackage.MapOfMetadata>;
    clearColumnMetadataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableData.AsObject;
    static toObject(includeInstance: boolean, msg: TableData): TableData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableData;
    static deserializeBinaryFromReader(message: TableData, reader: jspb.BinaryReader): TableData;
  }

  export namespace TableData {
    export type AsObject = {
      rowsList: Array<RowOrganizedPackage.Row.AsObject>,
      tableMetadataMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
      columnMetadataMap: Array<[string, RowOrganizedPackage.MapOfMetadata.AsObject]>,
    }
  }

  export class Row extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getRowType(): RowOrganizedPackage.Row.RowTypeMap[keyof RowOrganizedPackage.Row.RowTypeMap];
    setRowType(value: RowOrganizedPackage.Row.RowTypeMap[keyof RowOrganizedPackage.Row.RowTypeMap]): void;

    hasCells(): boolean;
    clearCells(): void;
    getCells(): google_protobuf_struct_pb.ListValue | undefined;
    setCells(value?: google_protobuf_struct_pb.ListValue): void;

    hasValues(): boolean;
    clearValues(): void;
    getValues(): google_protobuf_struct_pb.Struct | undefined;
    setValues(value?: google_protobuf_struct_pb.Struct): void;

    getCellDetailsMap(): jspb.Map<string, RowOrganizedPackage.CellDetail>;
    clearCellDetailsMap(): void;
    getHeaderCellDetailsMap(): jspb.Map<string, RowOrganizedPackage.HeaderCellDetail>;
    clearHeaderCellDetailsMap(): void;
    getRowMetadataMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
    clearRowMetadataMap(): void;
    getKindCase(): Row.KindCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      id: string,
      rowType: RowOrganizedPackage.Row.RowTypeMap[keyof RowOrganizedPackage.Row.RowTypeMap],
      cells?: google_protobuf_struct_pb.ListValue.AsObject,
      values?: google_protobuf_struct_pb.Struct.AsObject,
      cellDetailsMap: Array<[string, RowOrganizedPackage.CellDetail.AsObject]>,
      headerCellDetailsMap: Array<[string, RowOrganizedPackage.HeaderCellDetail.AsObject]>,
      rowMetadataMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
    }

    export interface RowTypeMap {
      BODY: 0;
      HEADER: 1;
    }

    export const RowType: RowTypeMap;

    export enum KindCase {
      KIND_NOT_SET = 0,
      CELLS = 3,
      VALUES = 4,
    }
  }

  export class CellDetail extends jspb.Message {
    getGroupLevel(): number;
    setGroupLevel(value: number): void;

    hasCellDefinition(): boolean;
    clearCellDefinition(): void;
    getCellDefinition(): fds_protobuf_stach_table_CellDefinition_pb.CellDefinition | undefined;
    setCellDefinition(value?: fds_protobuf_stach_table_CellDefinition_pb.CellDefinition): void;

    getCellMetadataMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
    clearCellMetadataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellDetail.AsObject;
    static toObject(includeInstance: boolean, msg: CellDetail): CellDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellDetail;
    static deserializeBinaryFromReader(message: CellDetail, reader: jspb.BinaryReader): CellDetail;
  }

  export namespace CellDetail {
    export type AsObject = {
      groupLevel: number,
      cellDefinition?: fds_protobuf_stach_table_CellDefinition_pb.CellDefinition.AsObject,
      cellMetadataMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
    }
  }

  export class HeaderCellDetail extends jspb.Message {
    getColspan(): number;
    setColspan(value: number): void;

    getRowspan(): number;
    setRowspan(value: number): void;

    getSource(): RowOrganizedPackage.HeaderCellDetail.TableSourceMap[keyof RowOrganizedPackage.HeaderCellDetail.TableSourceMap];
    setSource(value: RowOrganizedPackage.HeaderCellDetail.TableSourceMap[keyof RowOrganizedPackage.HeaderCellDetail.TableSourceMap]): void;

    getColumnIndex(): number;
    setColumnIndex(value: number): void;

    hasCellDefinition(): boolean;
    clearCellDefinition(): void;
    getCellDefinition(): fds_protobuf_stach_table_CellDefinition_pb.CellDefinition | undefined;
    setCellDefinition(value?: fds_protobuf_stach_table_CellDefinition_pb.CellDefinition): void;

    getCellMetadataMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
    clearCellMetadataMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderCellDetail.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderCellDetail): HeaderCellDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderCellDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderCellDetail;
    static deserializeBinaryFromReader(message: HeaderCellDetail, reader: jspb.BinaryReader): HeaderCellDetail;
  }

  export namespace HeaderCellDetail {
    export type AsObject = {
      colspan: number,
      rowspan: number,
      source: RowOrganizedPackage.HeaderCellDetail.TableSourceMap[keyof RowOrganizedPackage.HeaderCellDetail.TableSourceMap],
      columnIndex: number,
      cellDefinition?: fds_protobuf_stach_table_CellDefinition_pb.CellDefinition.AsObject,
      cellMetadataMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
    }

    export interface TableSourceMap {
      UNKNOWN: 0;
      NONE: 1;
      PRIMARY: 2;
      HEADERS: 3;
    }

    export const TableSource: TableSourceMap;
  }

  export class MapOfMetadata extends jspb.Message {
    getItemsMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
    clearItemsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapOfMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MapOfMetadata): MapOfMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapOfMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapOfMetadata;
    static deserializeBinaryFromReader(message: MapOfMetadata, reader: jspb.BinaryReader): MapOfMetadata;
  }

  export namespace MapOfMetadata {
    export type AsObject = {
      itemsMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
    }
  }
}

