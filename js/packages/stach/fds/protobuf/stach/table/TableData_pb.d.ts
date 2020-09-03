// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/TableData.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_ColumnData_pb from "../../../../fds/protobuf/stach/table/ColumnData_pb";
import * as fds_protobuf_stach_table_MetadataCollection_pb from "../../../../fds/protobuf/stach/table/MetadataCollection_pb";
import * as fds_protobuf_stach_table_RowDefinition_pb from "../../../../fds/protobuf/stach/table/RowDefinition_pb";

export class TableData extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<fds_protobuf_stach_table_RowDefinition_pb.RowDefinition>;
  setRowsList(value: Array<fds_protobuf_stach_table_RowDefinition_pb.RowDefinition>): void;
  addRows(value?: fds_protobuf_stach_table_RowDefinition_pb.RowDefinition, index?: number): fds_protobuf_stach_table_RowDefinition_pb.RowDefinition;

  getColumnsMap(): jspb.Map<string, fds_protobuf_stach_table_ColumnData_pb.ColumnData>;
  clearColumnsMap(): void;
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): fds_protobuf_stach_table_MetadataCollection_pb.MetadataCollection | undefined;
  setMetadata(value?: fds_protobuf_stach_table_MetadataCollection_pb.MetadataCollection): void;

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
    rowsList: Array<fds_protobuf_stach_table_RowDefinition_pb.RowDefinition.AsObject>,
    columnsMap: Array<[string, fds_protobuf_stach_table_ColumnData_pb.ColumnData.AsObject]>,
    metadata?: fds_protobuf_stach_table_MetadataCollection_pb.MetadataCollection.AsObject,
  }
}

