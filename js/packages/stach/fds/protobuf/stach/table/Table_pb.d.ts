// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/Table.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_TableData_pb from "../../../../fds/protobuf/stach/table/TableData_pb";
import * as fds_protobuf_stach_table_TableDefinition_pb from "../../../../fds/protobuf/stach/table/TableDefinition_pb";

export class Table extends jspb.Message {
  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): fds_protobuf_stach_table_TableDefinition_pb.TableDefinition | undefined;
  setDefinition(value?: fds_protobuf_stach_table_TableDefinition_pb.TableDefinition): void;

  hasData(): boolean;
  clearData(): void;
  getData(): fds_protobuf_stach_table_TableData_pb.TableData | undefined;
  setData(value?: fds_protobuf_stach_table_TableData_pb.TableData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    definition?: fds_protobuf_stach_table_TableDefinition_pb.TableDefinition.AsObject,
    data?: fds_protobuf_stach_table_TableData_pb.TableData.AsObject,
  }
}

