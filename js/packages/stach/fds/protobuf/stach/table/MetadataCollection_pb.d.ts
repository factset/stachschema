// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/MetadataCollection.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_MetadataItem_pb from "../../../../fds/protobuf/stach/table/MetadataItem_pb";
import * as fds_protobuf_stach_table_MetadataLocations_pb from "../../../../fds/protobuf/stach/table/MetadataLocations_pb";

export class MetadataCollection extends jspb.Message {
  getItemsMap(): jspb.Map<string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem>;
  clearItemsMap(): void;
  hasLocations(): boolean;
  clearLocations(): void;
  getLocations(): fds_protobuf_stach_table_MetadataLocations_pb.MetadataLocations | undefined;
  setLocations(value?: fds_protobuf_stach_table_MetadataLocations_pb.MetadataLocations): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataCollection.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataCollection): MetadataCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataCollection;
  static deserializeBinaryFromReader(message: MetadataCollection, reader: jspb.BinaryReader): MetadataCollection;
}

export namespace MetadataCollection {
  export type AsObject = {
    itemsMap: Array<[string, fds_protobuf_stach_table_MetadataItem_pb.MetadataItem.AsObject]>,
    locations?: fds_protobuf_stach_table_MetadataLocations_pb.MetadataLocations.AsObject,
  }
}

