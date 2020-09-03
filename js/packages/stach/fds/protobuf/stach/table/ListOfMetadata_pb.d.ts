// package: factset.protobuf.stach.table
// file: fds/protobuf/stach/table/ListOfMetadata.proto

import * as jspb from "google-protobuf";

export class ListOfMetadata extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOfMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ListOfMetadata): ListOfMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOfMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOfMetadata;
  static deserializeBinaryFromReader(message: ListOfMetadata, reader: jspb.BinaryReader): ListOfMetadata;
}

export namespace ListOfMetadata {
  export type AsObject = {
    idsList: Array<string>,
  }
}

