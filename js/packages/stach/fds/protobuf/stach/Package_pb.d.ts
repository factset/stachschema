// package: factset.protobuf.stach
// file: fds/protobuf/stach/Package.proto

import * as jspb from "google-protobuf";
import * as fds_protobuf_stach_table_Table_pb from "../../../fds/protobuf/stach/table/Table_pb";

export class Package extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  clearPrimaryTableIdsList(): void;
  getPrimaryTableIdsList(): Array<string>;
  setPrimaryTableIdsList(value: Array<string>): void;
  addPrimaryTableIds(value: string, index?: number): string;

  getTablesMap(): jspb.Map<string, fds_protobuf_stach_table_Table_pb.Table>;
  clearTablesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    version: string,
    primaryTableIdsList: Array<string>,
    tablesMap: Array<[string, fds_protobuf_stach_table_Table_pb.Table.AsObject]>,
  }
}

