import { HorizontalAlignment } from '../../../../fds/protobuf/stach/table/HorizontalAlignment';
import { VerticalAlignment } from '../../../../fds/protobuf/stach/table/VerticalAlignment';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A data format
 */
export interface DataFormat {
    /**
     *  The format
     */
    format: string;
    /**
     *  The null format
     */
    nullFormat: string;
    /**
     *  The horizontal alignment
     */
    halign: HorizontalAlignment;
    /**
     *  The vertical alignment
     */
    valign: VerticalAlignment;
}
export declare const DataFormat: {
    encode(message: DataFormat, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): DataFormat;
    fromJSON(object: any): DataFormat;
    fromPartial(object: DeepPartial<DataFormat>): DataFormat;
    toJSON(message: DataFormat): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
