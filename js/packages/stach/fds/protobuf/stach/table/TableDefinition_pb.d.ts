// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/TableDefinition.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_ColumnDefinition_pb from "../../../../fds/protobuf/stach/table/ColumnDefinition_pb";

export class TableDefinition extends jspb.Message {
  getHeaderTableId(): string;
  setHeaderTableId(value: string): void;

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
    headerTableId: string,
    columnsList: Array<fds_protobuf_stach_table_ColumnDefinition_pb.ColumnDefinition.AsObject>,
  }
}

