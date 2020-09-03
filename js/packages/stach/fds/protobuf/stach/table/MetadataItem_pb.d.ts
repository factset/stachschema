// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/MetadataItem.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as fds_protobuf_stach_table_Reference_pb from "../../../../fds/protobuf/stach/table/Reference_pb";

export class MetadataItem extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Value | undefined;
  setValue(value?: google_protobuf_struct_pb.Value): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): fds_protobuf_stach_table_Reference_pb.Reference | undefined;
  setReference(value?: fds_protobuf_stach_table_Reference_pb.Reference): void;

  getDataCase(): MetadataItem.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataItem.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataItem): MetadataItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataItem;
  static deserializeBinaryFromReader(message: MetadataItem, reader: jspb.BinaryReader): MetadataItem;
}

export namespace MetadataItem {
  export type AsObject = {
    value?: google_protobuf_struct_pb.Value.AsObject,
    reference?: fds_protobuf_stach_table_Reference_pb.Reference.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    VALUE = 1,
    REFERENCE = 2,
  }
}

