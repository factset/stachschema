// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/DataFormat.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_HorizontalAlignment_pb from "../../../../fds/protobuf/stach/table/HorizontalAlignment_pb";
import * as fds_protobuf_stach_table_VerticalAlignment_pb from "../../../../fds/protobuf/stach/table/VerticalAlignment_pb";

export class DataFormat extends jspb.Message {
  getFormat(): string;
  setFormat(value: string): void;

  getNullFormat(): string;
  setNullFormat(value: string): void;

  getHalign(): fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap[keyof fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap];
  setHalign(value: fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap[keyof fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap]): void;

  getValign(): fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap[keyof fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap];
  setValign(value: fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap[keyof fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataFormat.AsObject;
  static toObject(includeInstance: boolean, msg: DataFormat): DataFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataFormat;
  static deserializeBinaryFromReader(message: DataFormat, reader: jspb.BinaryReader): DataFormat;
}

export namespace DataFormat {
  export type AsObject = {
    format: string,
    nullFormat: string,
    halign: fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap[keyof fds_protobuf_stach_table_HorizontalAlignment_pb.HorizontalAlignmentMap],
    valign: fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap[keyof fds_protobuf_stach_table_VerticalAlignment_pb.VerticalAlignmentMap],
  }
}

