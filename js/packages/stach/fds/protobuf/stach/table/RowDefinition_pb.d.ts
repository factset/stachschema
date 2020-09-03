// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/RowDefinition.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_DataFormat_pb from "../../../../fds/protobuf/stach/table/DataFormat_pb";

export class RowDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasFormat(): boolean;
  clearFormat(): void;
  getFormat(): fds_protobuf_stach_table_DataFormat_pb.DataFormat | undefined;
  setFormat(value?: fds_protobuf_stach_table_DataFormat_pb.DataFormat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: RowDefinition): RowDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RowDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowDefinition;
  static deserializeBinaryFromReader(message: RowDefinition, reader: jspb.BinaryReader): RowDefinition;
}

export namespace RowDefinition {
  export type AsObject = {
    id: string,
    format?: fds_protobuf_stach_table_DataFormat_pb.DataFormat.AsObject,
  }
}

