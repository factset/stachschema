// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/ColumnData.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_CellDefinition_pb from "../../../../fds/protobuf/stach/table/CellDefinition_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class ColumnData extends jspb.Message {
  getRangesMap(): jspb.Map<number, number>;
  clearRangesMap(): void;
  hasValues(): boolean;
  clearValues(): void;
  getValues(): google_protobuf_struct_pb.ListValue | undefined;
  setValues(value?: google_protobuf_struct_pb.ListValue): void;

  clearDefinitionsList(): void;
  getDefinitionsList(): Array<fds_protobuf_stach_table_CellDefinition_pb.CellDefinition>;
  setDefinitionsList(value: Array<fds_protobuf_stach_table_CellDefinition_pb.CellDefinition>): void;
  addDefinitions(value?: fds_protobuf_stach_table_CellDefinition_pb.CellDefinition, index?: number): fds_protobuf_stach_table_CellDefinition_pb.CellDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnData.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnData): ColumnData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnData;
  static deserializeBinaryFromReader(message: ColumnData, reader: jspb.BinaryReader): ColumnData;
}

export namespace ColumnData {
  export type AsObject = {
    rangesMap: Array<[number, number]>,
    values?: google_protobuf_struct_pb.ListValue.AsObject,
    definitionsList: Array<fds_protobuf_stach_table_CellDefinition_pb.CellDefinition.AsObject>,
  }
}

