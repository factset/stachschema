// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/Reference.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_ReferenceType_pb from "../../../../fds/protobuf/stach/table/ReferenceType_pb";

export class Reference extends jspb.Message {
  getReferenceType(): fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap[keyof fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap];
  setReferenceType(value: fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap[keyof fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap]): void;

  getTableId(): string;
  setTableId(value: string): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  getRowId(): string;
  setRowId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    referenceType: fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap[keyof fds_protobuf_stach_table_ReferenceType_pb.ReferenceTypeMap],
    tableId: string,
    columnId: string,
    rowId: string,
  }
}

