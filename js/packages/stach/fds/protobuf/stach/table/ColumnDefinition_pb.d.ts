// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/ColumnDefinition.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_DataFormat_pb from "../../../../fds/protobuf/stach/table/DataFormat_pb";

export class ColumnDefinition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): string;
  setType(value: string): void;

  getIsDimension(): boolean;
  setIsDimension(value: boolean): void;

  getIsHidden(): boolean;
  setIsHidden(value: boolean): void;

  getNextSiblingId(): string;
  setNextSiblingId(value: string): void;

  getParentId(): string;
  setParentId(value: string): void;

  getHeaderId(): string;
  setHeaderId(value: string): void;

  hasFormat(): boolean;
  clearFormat(): void;
  getFormat(): fds_protobuf_stach_table_DataFormat_pb.DataFormat | undefined;
  setFormat(value?: fds_protobuf_stach_table_DataFormat_pb.DataFormat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnDefinition): ColumnDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnDefinition;
  static deserializeBinaryFromReader(message: ColumnDefinition, reader: jspb.BinaryReader): ColumnDefinition;
}

export namespace ColumnDefinition {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    type: string,
    isDimension: boolean,
    isHidden: boolean,
    nextSiblingId: string,
    parentId: string,
    headerId: string,
    format?: fds_protobuf_stach_table_DataFormat_pb.DataFormat.AsObject,
  }
}

