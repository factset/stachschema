// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/CellDefinition.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_DataFormat_pb from "../../../../fds/protobuf/stach/table/DataFormat_pb";

export class CellDefinition extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasFormat(): boolean;
  clearFormat(): void;
  getFormat(): fds_protobuf_stach_table_DataFormat_pb.DataFormat | undefined;
  setFormat(value?: fds_protobuf_stach_table_DataFormat_pb.DataFormat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: CellDefinition): CellDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellDefinition;
  static deserializeBinaryFromReader(message: CellDefinition, reader: jspb.BinaryReader): CellDefinition;
}

export namespace CellDefinition {
  export type AsObject = {
    type: string,
    format?: fds_protobuf_stach_table_DataFormat_pb.DataFormat.AsObject,
  }
}

