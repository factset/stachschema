// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/MetadataLocations.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_ListOfMetadata_pb from "../../../../fds/protobuf/stach/table/ListOfMetadata_pb";

export class MetadataLocations extends jspb.Message {
  clearTableList(): void;
  getTableList(): Array<string>;
  setTableList(value: Array<string>): void;
  addTable(value: string, index?: number): string;

  getColumnsMap(): jspb.Map<string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata>;
  clearColumnsMap(): void;
  getRowsMap(): jspb.Map<string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata>;
  clearRowsMap(): void;
  hasCells(): boolean;
  clearCells(): void;
  getCells(): MetadataLocations.CellsColumnMap | undefined;
  setCells(value?: MetadataLocations.CellsColumnMap): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataLocations.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataLocations): MetadataLocations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataLocations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataLocations;
  static deserializeBinaryFromReader(message: MetadataLocations, reader: jspb.BinaryReader): MetadataLocations;
}

export namespace MetadataLocations {
  export type AsObject = {
    tableList: Array<string>,
    columnsMap: Array<[string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata.AsObject]>,
    rowsMap: Array<[string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata.AsObject]>,
    cells?: MetadataLocations.CellsColumnMap.AsObject,
  }

  export class CellsColumnMap extends jspb.Message {
    getColumnsMap(): jspb.Map<string, MetadataLocations.CellsRowMap>;
    clearColumnsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellsColumnMap.AsObject;
    static toObject(includeInstance: boolean, msg: CellsColumnMap): CellsColumnMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellsColumnMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellsColumnMap;
    static deserializeBinaryFromReader(message: CellsColumnMap, reader: jspb.BinaryReader): CellsColumnMap;
  }

  export namespace CellsColumnMap {
    export type AsObject = {
      columnsMap: Array<[string, MetadataLocations.CellsRowMap.AsObject]>,
    }
  }

  export class CellsRowMap extends jspb.Message {
    getRowsMap(): jspb.Map<string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata>;
    clearRowsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellsRowMap.AsObject;
    static toObject(includeInstance: boolean, msg: CellsRowMap): CellsRowMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellsRowMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellsRowMap;
    static deserializeBinaryFromReader(message: CellsRowMap, reader: jspb.BinaryReader): CellsRowMap;
  }

  export namespace CellsRowMap {
    export type AsObject = {
      rowsMap: Array<[string, fds_protobuf_stach_table_ListOfMetadata_pb.ListOfMetadata.AsObject]>,
    }
  }
}

